<template>
  <div id="complaint">
    <div class="complaint-heared">
      <i class="el-icon-warning"></i>
      <div class="line">查看应聘者简历</div>
      <el-button @click="toAdd" icon="el-icon-plus" type="danger">申请宣讲会</el-button>
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
        <!-- <ul class="complaint-content-title">
          <li class="w-title">审核状态</li>
          <li class="w-title">宣讲会信息</li>
          <li class="w-title"></li>
          <li class="w-title"></li>
          <li class="w-foot"></li>
          <li class="w-title">时间</li>
          <li class="w-title">操作</li>
        </ul>-->
        <div class="complaint-table">
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
                  <el-table-column type="selection" width="40"></el-table-column>
                  <el-table-column label="id" prop="id" min-width="40"></el-table-column>
                  <el-table-column prop="pm_title" label="宣讲会标题" show-overflow-tooltip></el-table-column>
                  <el-table-column prop="pm_starttime" label="活动开始时间" show-overflow-tooltip></el-table-column>
                  <el-table-column prop="pm_endtime" label="活动结束时间" show-overflow-tooltip></el-table-column>
                  <el-table-column prop="pm_field" label="活动地点" show-overflow-tooltip></el-table-column>
                  <el-table-column prop="id" label="审核状态" align="center" show-overflow-tooltip>
                    <template slot-scope="scope">
                      <el-switch
                        v-model="scope.row.pm_outway"
                        active-color="#13ce66"
                        inactive-color="#999"
                        disabled
                      ></el-switch>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="操作" width="150">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        type="success"
                        @click="handleEdit(scope.$index, scope.row.id)"
                      >编辑</el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row.id)"
                      >撤销</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="panel_pagination">
                <el-pagination
                  style="text-align:center"
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-size="pageSize"
                  layout="prev, pager, next, jumper"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
          </el-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "../../../common/css/student/style.css";
export default {
  data() {
    return {
      input: "",
      pageSize: 20,
      pageNum: 0,
      total: 0,
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
      multipleSelection: []
    };
  },
  watch: {
    secondType(newVal, oldVal) {
      console.log(newVal);
    }
  },
  created() {
    this.getList();
  },
  methods: {
    //查询全部校园宣讲会列表
    getList() {
      let pageUtil = {
        page: this.pageNum,
        strip: this.pageSize
      };
      this.api.selectPreachMeetingByList(pageUtil).then(res => {
        console.log(res);
        let newData = res.data.map(item => {
          return {
            id: item.id,
            pm_endtime: item.pm_endtime,
            pm_starttime: item.pm_starttime,
            pm_outway: item.pm_outway === "未审核" ? false : true,
            pm_field: item.pm_field,
            pm_title: item.pm_title
          };
        });
        console.log(newData);
        this.list = newData;
        this.total = Number(res.total);
      });
    },
    //申请宣讲会
    toAdd() {
      this.$router.push("/meeting/teachIn/add");
    },
    //修改校园宣讲会
    handleEdit(index, id) {
      // console.log(index, id);
      this.$router.push("/meeting/teachIn/" + id);
    },
    //删除校园宣讲会接口
    handleDelete(index, row) {
      let preachMeeting = { id: row.id, sm_id: 3001 };
      this.api.delePreachMeetingById(preachMeeting).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.$message.success(res.inio);
        }
      });
      this.list.splice(index, 1);
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
.mar-left {
  margin-left: 10px;
}
#complaint {
  margin: 20px;
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
  align-items: center;
  display: flex;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 14px;
  background-color: rgb(8, 189, 189);
}
.complaint-heared button {
  margin-left: 20px;
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
  padding: 0 0 20px 0;
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
