<template>
  <el-col :span="24">
    <div class="dataTable">
      <div class="dataTable_header">
        <el-col :span="8">
          <el-button size="mini" :plain="true" :loading="derive" @click="toDerive">导出</el-button>
        </el-col>
        <el-col :span="16">
          <el-col :span="12" :offset="12">
            <el-col :span="18">
              <el-input size="mini" v-model="keyword" placeholder="请输入关键词搜索"></el-input>
            </el-col>
            <el-col :span="5" :offset="1">
              <el-button size="mini" type="success" icon="el-icon-search" @click="search">搜索</el-button>
            </el-col>
          </el-col>
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
          <el-table-column type="selection" width="50"></el-table-column>
          <el-table-column label="id" prop="id" width="60"></el-table-column>
          <el-table-column prop="number" label="申请人" show-overflow-tooltip></el-table-column>
          <el-table-column prop="proposer" label="学号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="type" label="身份证号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="id" label="申请信息" width="120" align="center" show-overflow-tooltip>
            <template slot-scope="scope">
              <router-link :to="'/student/protocol/two/unchecked/' + scope.row.id">
                <p style="color:#23C6C8;cursor:pointer">查看</p>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="applyTime" label="申请时间" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column align="center" label="审核信息" width="150">
            <template slot-scope="scope">
              <el-button size="mini" class="btnBg" @click="handleToCheck(scope.$index, scope.row.id)">审核</el-button>
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

      <el-dialog class="toCheck" :visible.sync="toCheck" title="审核入驻企业" width="30%" true>
        <div style="height:160px;border-top:1px solid #ccc">
          <p>
            <span>审核入驻：</span>
            <el-radio v-model="radio" label="1">通过</el-radio>
            <el-radio v-model="radio" label="2">不通过</el-radio>
          </p>
          <p>
            <span>原因备注：</span>
            <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input>
          </p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="toCheck = false">取 消</el-button>
          <el-button @click="toCheck = false" class="btnBg">确 定</el-button>
        </span>
      </el-dialog>
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
      toCheck: false,
      type: "",
      keyword: "",
      headerStyle: {
        color: "#0d8e52"
      },
      textarea: '',
      radio: '',
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
          number: "2019001",
          proposer: "溜得滑",
          type: "首次申请",
          application: "广州XXXX公司",
          applyTime: "2019-04-15 12:00",
          open: true
        },
        {
          id: 2,
          number: "2019001",
          proposer: "溜得滑",
          type: "首次申请",
          application: "广州XXXX公司",
          applyTime: "2019-04-15 12:00",
          open: true
        },
        {
          id: 3,
          number: "2019001",
          proposer: "溜得滑",
          type: "首次申请",
          application: "广州XXXX公司",
          applyTime: "2019-04-15 12:00",
          open: true
        },
        {
          id: 4,
          number: "2019001",
          proposer: "溜得滑",
          type: "首次申请",
          application: "广州XXXX公司",
          applyTime: "2019-04-15 12:00",
          open: true
        },
        {
          id: 5,
          number: "2019001",
          proposer: "溜得滑",
          type: "首次申请",
          application: "广州XXXX公司",
          applyTime: "2019-04-15 12:00",
          open: true
        },
        {
          id: 6,
          number: "2019001",
          proposer: "溜得滑",
          type: "首次申请",
          application: "广州XXXX公司",
          applyTime: "2019-04-15 12:00",
          open: true
        },
        {
          id: 7,
          number: "2019001",
          proposer: "溜得滑",
          type: "首次申请",
          application: "广州XXXX公司",
          applyTime: "2019-04-15 12:00",
          open: true
        },
        {
          id: 8,
          number: "2019001",
          proposer: "溜得滑",
          type: "首次申请",
          application: "广州XXXX公司",
          applyTime: "2019-04-15 12:00",
          open: true
        },
        {
          id: 9,
          number: "2019001",
          proposer: "溜得滑",
          type: "首次申请",
          application: "广州XXXX公司",
          applyTime: "2019-04-15 12:00",
          open: true
        },
        {
          id: 10,
          number: "2019001",
          proposer: "溜得滑",
          type: "首次申请",
          application: "广州XXXX公司",
          applyTime: "2019-04-15 12:00",
          open: true
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
    handleCurrentChange(val) {
      // console.log(val)
    },
    handleToCheck() {
      this.toCheck = true
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
.thumbnail {
  width: 180px;
  height: auto;
}
.thumbnail_big {
  width: 360px;
  height: auto;
}
.toCheck p span {
    width: 100px;
    font-size: 14px;
  }
</style>
<style>
  .toCheck .el-dialog__title {
    font-size: 16px;
  }
  .toCheck .el-dialog__body {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-bottom: 20px;
  }
  .toCheck p {
    margin-top: 20px;
    display: flex;
    height: 28px;
    line-height: 28px;
  }
  .toCheck p .el-radio {
    line-height: 26px;
  }
  .toCheck .el-button:nth-of-type(1){
    color: #23C6C8;
    border: 1px solid #23c6c8;
  }
</style>