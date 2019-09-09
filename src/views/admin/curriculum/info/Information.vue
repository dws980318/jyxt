<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/student/info/list">学生信息管理</el-breadcrumb-item>
        <el-breadcrumb-item>个人履历</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="dataTable">
      <div class="dataTable_header">
        <el-col :span="8">
          <el-button size="mini" :plain="true" :loading="derive" @click="toDerive">导出</el-button>
        </el-col>
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
          <el-table-column prop="title" label="标题" show-overflow-tooltip></el-table-column>
          <el-table-column prop="duration" label="持续时间" show-overflow-tooltip></el-table-column>
          <el-table-column prop="content" label="履历内容" show-overflow-tooltip>
            <template slot-scope="scope">
              <p style="color:#23C6C8;cursor:pointer" @click="content = true ">查看</p>
              <el-dialog class="content" :visible.sync="content" title="履历内容" width="30%">
                <div style="height:100px;border-top:1px solid #ccc">
                  <p>履历内容：{{scope.row.content}}</p>
                </div>
              </el-dialog>
            </template>
          </el-table-column>
          <el-table-column prop="submit_time" label="提交时间" show-overflow-tooltip></el-table-column>
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
  </el-col>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      loading: false,
      derive: false,
      content: false,
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
          title: "个人履历",
          duration: "2019-01-09 00:00 - 2019-01-31 14:22",
          submit_time: "2019-01-18 14:22",
          content: "-"
        },
        {
          id: 2,
          title: "个人履历",
          duration: "2019-01-09 00:00 - 2019-01-31 14:22",
          submit_time: "2019-01-18 14:22",
          content: "-"
        },
        {
          id: 3,
          title: "个人履历",
          duration: "2019-01-09 00:00 - 2019-01-31 14:22",
          submit_time: "2019-01-18 14:22",
          content: "-"
        },
        {
          id: 4,
          title: "个人履历",
          duration: "2019-01-09 00:00 - 2019-01-31 14:22",
          submit_time: "2019-01-18 14:22",
          content: "-"
        },
        {
          id: 5,
          title: "个人履历",
          duration: "2019-01-09 00:00 - 2019-01-31 14:22",
          submit_time: "2019-01-18 14:22",
          content: "-"
        }
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
.breadcrumb {
  position: relative;
  width: 100%;
  height: 45px;
  padding-top: 20px;
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
.content .el-dialog__title {
  font-size: 14px;
}
.content .el-dialog__body {
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 20px;
}
.content p {
  margin-top: 16px;
  font-size: 16px;
}
</style>
