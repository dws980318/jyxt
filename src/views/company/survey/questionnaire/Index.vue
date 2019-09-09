<template>
  <div class="questionnaire border bg">
    <div class="box-title border-b">所有问卷</div>
    <el-col class="border" :span="24">
      <!-- <div>
      <el-alert
        style="width: 100%"
        title="欢迎贵企业积极参与本系统的问卷调查，谢谢！"
        type="success"
        :closable="false">
      </el-alert>
      </div>-->
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
            <el-table-column prop="qe_name" align="center" label="问卷名称" show-overflow-tooltip></el-table-column>
            <el-table-column align="center" prop="qe_starttime" label="开始时间" show-overflow-tooltip></el-table-column>
            <el-table-column align="center" prop="qe_endtime" label="结束时间" show-overflow-tooltip></el-table-column>
            <el-table-column align="center" prop="open" label="状态" width="120">
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.open"
                  active-color="#13ce66"
                  inactive-color="#999"
                  disabled
                ></el-switch>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="id" label="详情" show-overflow-tooltip>
              <template slot-scope="scope">
                <router-link :to="'/survey/questionnaire/' + scope.row.id">
                  <p style="color: dodgerblue">查看</p>
                </router-link>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="150">
              <template slot-scope="scope">
                <el-button
                  v-if="scope.row.open"
                  size="mini"
                  type="success"
                  @click="handleEdit(scope.$index, scope.row)"
                >开始问卷</el-button>
                <p v-else style="color: orangered">已结束</p>
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
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      loading: false,
      headerStyle: {
        color: "#0d8e52"
      },
      list: [],
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
    getList() {
      let pageUtil = {
        page: this.pageNum,
        strip: this.pageSize
      };
      this.api.seleQuestionnaireByList(pageUtil).then(res => {
        console.log(res);
        let newData = res.data.map(item => {
          return {
            id: item.id,
            qe_name: item.qe_name,
            qe_connect: item.qe_connect,
            qe_endtime: item.qe_endtime,
            pr_salary: item.pr_salary,
            qe_starttime: item.qe_starttime
          };
        });
        console.log(newData);
        this.list = newData;
        this.pageNum = res.data.pageNum;
        this.pageSize = res.data.pageSize;
        this.total = Number(res.total);
      });
    },
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
      }, 2000);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, studentId) {
      console.log(index, studentId);
      this.$router.push("/survey/" + studentId);
    },
    handleDelete(index, row) {
      this.list.splice(index, 1);
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
.questionnaire {
  margin: 30px 20px;
}
a {
  text-decoration: none;
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
