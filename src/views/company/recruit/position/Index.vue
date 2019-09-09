<template>
  <div id="complaint">
    <div class="complaint-heared">
      <div>
        <div class="line">企业可以发布在线招聘职位信息，系统将会推送已入驻的学校就业中心和微信平台；（注：职位需学校先审核，通过后学生可在线投递简历应聘职位）</div>
        <div class="line">企业可以修改、暂停招聘职位；查看学校审核情况、学生应聘简历等</div>
        <div>
          <el-button @click="toAdd()" type="primary">发布新职位</el-button>
        </div>
      </div>
    </div>
    <div class="complaint bg">
      <div class="complaint-title border flex-bt">
        <div>职位列表</div>
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
                  <el-table-column type="selection" width="40"></el-table-column>
                  <el-table-column label="id" prop="id" min-width="40"></el-table-column>
                  <el-table-column prop="pr_name" align="center" label="职位名称" show-overflow-tooltip></el-table-column>
                  <el-table-column
                    align="center"
                    prop="pr_describe"
                    label="工作性质"
                    show-overflow-tooltip
                  ></el-table-column>
                  <el-table-column
                    align="center"
                    prop="pr_education"
                    label="学校审核状态"
                    show-overflow-tooltip
                  >
                    <template slot-scope="scope">
                      <p
                        :style="scope.row.pr_education ? 'color:#0d8e52': 'orangered'"
                      >{{scope.row.pr_education ? '通过': '退改'}}</p>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="pr_salary"
                    label="统计信息"
                    show-overflow-tooltip
                  ></el-table-column>
                  <el-table-column align="center" prop="open" label="状态" width="120">
                    <template slot-scope="scope">
                      <el-switch
                        v-model="scope.row.open"
                        active-color="#13ce66"
                        inactive-color="#999"
                      ></el-switch>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="操作" width="200">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        type="success"
                        @click="handleEdit(scope.$index, scope.row.id)"
                      >编辑</el-button>
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
                  @size-change="handleSizeChange"
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
import { get, post, deletes, put, form, putForm } from "@/utils/request"; //导入axios实例文件中方法
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
  watch: {
    secondType(newVal, oldVal) {
      console.log(newVal);
    },
    // 监听改变页数
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getList();
    }
  },
  created() {
    this.getList();
  },
  methods: {
    //发布新职位
    toAdd() {
      this.$router.push("/recruit/position/add");
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
      }, 1000);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //修改职位
    handleEdit(index, id) {
      // console.log(index, id);
      this.$router.push("/recruit/position/" + id);
    },
    //删除职位接口
    handleDelete(index, row) {
      let positionRecruit = { id: row.id, coi_id: 4002 };
      this.api.delePositionRecruitById(positionRecruit).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.$message.success(res.inio);
        }
      });
      this.list.splice(index, 1);
    },
    //查询全部职位信息列表
    getList() {
      let pageUtil = {
        page: this.pageNum,
        strip: this.pageSize
      };
      this.api.selectPositionRecruitByList(pageUtil).then(res => {
        console.log(res);
        let newData = res.data.map(item => {
          return {
            id: item.id,
            pr_describe: item.pr_describe,
            pr_education: item.pr_education,
            pr_name: item.pr_name,
            pr_salary: item.pr_salary,
            pr_welfare: item.pr_welfare
          };
        });
        console.log(newData);
        this.list = newData;
        // this.pageNum = res.data.pageNum;
        // this.pageSize = res.data.pageSize;
        this.total = Number(res.total);
      });
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      console.log(this.pageNum);
      this.getList();
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getList();
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
  border-left: 5px solid green;
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
.complaint-content {
  min-height: 50px;
}
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
