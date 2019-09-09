<template>
  <div id="complaint">
    <div class="complaint-heared">
      <div>
        <div class="line">
          <i class="el-icon-warning"></i> 查看应聘者的简历
        </div>
      </div>
    </div>
    <div class="complaint bg border">
      <div class="complaint-title border-b flex-bt">
        <div>所有收到的应聘简历</div>
        <div class="complaint-title-content">
          <el-input class="w-30" v-model="input" placeholder="快速查询"></el-input>
          <el-button class="mar-left" type="primary" icon="el-icon-search">搜索条件</el-button>
          <el-button type="primary" icon="el-icon-search">其他条件</el-button>
          <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
        </div>
      </div>
      <div class="complaint-content">
        <div>
          <el-col class="border" :span="24">
            <div class="dataTable">
              <div class="dataTable_main">
                <el-table
                  ref="multipleTable"
                  v-loading="loading"
                  :data="list"
                  :header-row-style="headerStyle"
                  tooltip-effect="dark"
                  size="small"
                  style="width: 100%"
                  @selection-change="handleSelectionChange"
                >
                  <el-table-column type="selection" width="50"></el-table-column>
                  <el-table-column label="id" prop="id" min-width="50"></el-table-column>
                  <el-table-column prop="name" align="center" label="职位名称" show-overflow-tooltip></el-table-column>
                  <el-table-column align="center" prop="sr_name" label="面试学生" show-overflow-tooltip></el-table-column>
                  <el-table-column align="center" prop="checked" label="邀请状态" show-overflow-tooltip>
                    <template slot-scope="scope">
                      <p
                        :style="scope.row.checked? 'color:#0d8e52': 'orangered'"
                      >{{scope.row.checked? '已邀请': '已拒绝'}}</p>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" prop="open" label="面试结果" show-overflow-tooltip>
                    <template slot-scope="scope">
                      <p
                        :style="scope.row.open? 'color:#0d8e52': 'orangered'"
                      >{{scope.row.open? '成功': '失败'}}</p>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" prop="sr_name" label="其他说明" show-overflow-tooltip></el-table-column>
                  <el-table-column align="center" label="操作" width="200">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        type="success"
                        @click="handleEdit(scope.$index, scope.row)"
                      >查看</el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                      >删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="panel_pagination">
                <el-pagination
                  style="text-align:center"
                  background
                  @current-change="handleCurrentChange"
                  :page-size="pageSize"
                  layout="prev, pager, next, jumper"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
          </el-col>
        </div>
        <!-- <ul class="complaint-content-title">
          <li class="w-title">职位信息</li>
          <li class="w-title">工作性质</li>
          <li class="w-title">显示状态</li>
          <li class="w-title">学校审核信息</li>
          <li class="w-title">统计信息</li>
          <li class="w-foot">状态</li>
          <li class="w-title">操作</li>
        </ul>-->
        <!-- <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      loading: false,
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      secondType: "",
      keyword: "",
      headerStyle: {
        color: "#0d8e52"
      },
      list: [],
      date: "",
      multipleSelection: [],
      pageSize: 20,
      pageNum: 0,
      total: 0
    };
  },
  created() {
    this.getList();
  },
  methods: {
  //查询所有收到的学生简历列表
    getList() {
      let pageUtil = {
        page: this.pageNum,
        strip: this.pageSize
      };
      this.api.selectResumeDeliveryByList(pageUtil).then(res => {
        console.log(res);
        let newData = res.data.map(item => {
          return {
            id: item.id,
            sr_name: item.sr_name,
            sr_username: item.sr_username,
            pr_id: item.pr_id
          };
        });
        console.log(newData);
        this.list = newData;
        this.total = Number(res.total);
      });
    },
    toLead() {
      const openLoading = this.Loading.startLoading("正在导入...");
      setTimeout(() => {
        openLoading.close();
      }, 1000);
    },
    toDerive() {
      const openLoading = this.Loading.startLoading("正在导出...");
      setTimeout(() => {
        openLoading.close();
      }, 1000);
    },
    search() {
      this.loading = true;
      console.log(this.type, this.keyword);
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push("/recruit/employ/" + row.id + '/' + row.pr_id);
    },
    handleDelete(index, row) {
      this.list.splice(index, 1);
    },
    handleCurrentChange(val) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
      // console.log(val)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped>
#complaint {
  margin: 20px;
}
.mar-left {
  margin-left: 10px;
}
.line {
  line-height: 30px;
}
.complaint-title-content {
  display: flex;
  height: 40px;
  align-items: center;
  overflow: hidden;
}
.complaint-content-title {
  height: 50px;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #999;
}
.complaint-heared {
  width: 100%;
  min-height: 50px;
  display: flex;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 14px;
  background-color: rgb(8, 189, 189);
}
.w-title {
  width: 15%;
}
.w-foot {
  width: 10%;
}
.block {
  height: 100px;
  display: flex;
  align-items: center;
}
.flex-bt {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-tabs__nav-scroll {
  border-bottom: 1px solid #999;
}
/* .complaint-content {
  padding: 20px;
} */
.complaint-title {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
}
.breadcrumb {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #999999;
}
.dataTable {
  width: 100%;
  height: auto;
}
.dataTable_header {
  width: 100%;
  height: 30px;
}
.dataTable_main {
  width: 100%;
  height: auto;
  padding: 10px 0 20px 0;
}
.thumbnail {
  width: 120px;
  height: auto;
}
.thumbnail_big {
  width: 270px;
  height: auto;
}
.art_view {
  max-width: 600px;
  max-height: 360px;
  overflow-y: scroll;
}
.alert_panel {
  width: calc(100% - 20px);
  height: auto;
  margin: auto;
}
.el-alert {
  margin: 10px auto;
}
</style>
