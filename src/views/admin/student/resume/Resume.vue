<template>
  <div>
    <div class="dataTable">
      <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/student/info/list">学生简历管理</el-breadcrumb-item>
        <el-breadcrumb-item>简历信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
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
          <el-table-column label="id" prop="id" width="60"></el-table-column>
          <el-table-column prop="name" label="简历名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="creatTime" label="创建时间" show-overflow-tooltip></el-table-column>
          <el-table-column prop="updataTime" label="刷新时间" show-overflow-tooltip></el-table-column>
          <el-table-column prop="info" label="简历信息" show-overflow-tooltip>
            <template slot-scope="scope">
              <router-link :to="'/student/resume/checkResume/' + scope.row.id">
                <p style="color:#23C6C8;cursor:pointer">查看</p>
              </router-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="panel_pagination">
        <el-pagination
          style="text-align:center"
          background
          @current-change="handleCurrentChange"
          :page-size="15"
          layout="prev, pager, next, jumper"
          :total="10000"
          :pager-count="13"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      loading: false,
      derive: false,
      deletes: false,
      filter: {
        type: [
          {
            open: true,
            name: "已发布"
          },
          {
            open: false,
            name: "已下架"
          }
        ]
      },
      type: "",
      keyword: "",
      headerStyle: {
        color: "#0d8e52"
      },
      list: [],
      multipleSelection: []
    };
  },
  created() {
    this.getPath();
  },
  watch: {
    type(newVal, oldVal) {
      console.log(newVal);
    }
  },
  methods: {
    getPath() {
      this.list = [
        {
          id: 1,
          name: "简历1",
          creatTime: "2019-05-11 10:13",
          updataTime: "2019-05-11 10:13",
        },
        {
          id: 2,
          name: "简历2",
          creatTime: "2019-05-11 10:13",
          updataTime: "2019-05-11 10:13",
        },
      ];
    },
    somePass() {
      const openLoading = this.Loading.startLoading("正在操作...");
      setTimeout(() => {
        openLoading.close();
      }, 1000);
    },
    someBack() {
      const openLoading = this.Loading.startLoading("正在操作...");
      setTimeout(() => {
        openLoading.close();
      }, 1000);
      // console.log(this.multipleSelection)
    },
    toPass() {
      const openLoading = this.Loading.startLoading("正在操作...");
      setTimeout(() => {
        openLoading.close();
      }, 1000);
    },
    toBack() {
      const openLoading = this.Loading.startLoading("正在操作...");
      setTimeout(() => {
        openLoading.close();
      }, 1000);
      // console.log(this.multipleSelection)
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
    handleEdit(index, companyId) {
      console.log(index, companyId);
      this.$router.push("/company/info/" + companyId);
    },
    handleDelete(index, row) {
      this.list.splice(index, 1);
      this.deletes = false;
    },
    handleCurrentChange(val) {
      // console.log(val)
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.label {
  margin-top: 3px;
}
.btnBg {
  color: #fff;
  background-color: #23c6c8;
  border: none;
}
.btnBg2 {
  color: #6b6b6b;
  background-color: #e4e4e4;
  border: none;
}
.btnBg3 {
  color: #23c6c8;
  background-color: #fff;
  border: 1px solid #23c6c8;
}
.breadcrumb {
  position: relative;
  width: 100%;
  height: 30px;
  /* padding-top: 20px; */
}
.breadcrumb:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #42b983;
}
.dataTable {
  width: 100%;
  height: auto;
  padding: 20px 10px;
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
</style>
<style>
.address .el-dialog__title {
  font-size: 14px;
}
.address .el-dialog__body {
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 20px;
  text-align: center;
}
.address h2 {
  margin-top: 20px;
}
</style>
