<template>
  <el-col :span="24">
    <div style="padding:20px 0 29px 0;" class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/subujest/employ/list">教师信息管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="dataTable">
      <div class="dataTable_header">
        <el-col :span="16">
          <el-col :span="12">
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
          <el-table-column label="序号" prop="id" width="100"></el-table-column>
          <el-table-column prop="type" label="教师姓名" width="200" show-overflow-tooltip></el-table-column>
          <el-table-column prop="account" label="教师工号" width="200" show-overflow-tooltip></el-table-column>
          <el-table-column prop="power" label="手机号码" width="200"></el-table-column>
          <el-table-column prop="phone" label="教师专业" width="200"></el-table-column>
          <el-table-column prop="name" label="个人资料" width="140" show-overflow-tooltip>
            <template slot-scope="scope">
              <router-link :to="'/subujest/employ/' + scope.row.id">
                <p style="color:dodgerblue;cursor:pointer">详情</p>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="auto">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
  </el-col>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      loading: false,
      derive: false,
      filter: {
        type: [
          {
            id: 1,
            name: "超级管理员"
          },
          {
            id: 2,
            name: "首页栏目管理员"
          },
          {
            id: 3,
            name: "老师账号管理"
          },
          {
            id: 4,
            name: "企业审核"
          }
        ]
      },
      type: "",
      keyword: "",
      headerStyle: {
        color: "#0d8e52"
      },
      list: [
        {
          id: "1",
          type: "谢伟洁",
          account: "5465465",
          power: "语文",
          phone: '156160351941',
          open: true
        },
        {
          id: "2",
          type: "谢伟洁",
          account: "5465465",
          power: "语文",
          phone: '156160351941',
          open: true
        },
        {
          id: "3",
          type: "谢伟洁",
          account: "5465465",
          power: "语文",
          phone: '156160351941',
          open: true
        },
        {
          id: "4",
          type: "谢伟洁",
          account: "5465465",
          power: "语文",
          phone: '156160351941',
          open: true
        },
        {
          id: "5",
          type: "谢伟洁",
          account: "5465465",
          power: "语文",
          phone: '156160351941',
          open: true
        },
        {
          id: "6",
          type: "谢伟洁",
          account: "5465465",
          power: "语文",
          phone: '156160351941',
          open: true
        },{
          id: "7",
          type: "谢伟洁",
          account: "5465465",
          power: "语文",
          phone: '156160351941',
          open: true
        },
      ],
      multipleSelection: []
    };
  },
  watch: {
    type(newVal, oldVal) {
      console.log(newVal);
    }
  },
  methods: {
    toAdd() {
      this.$router.push("/subujest/protocol/unchecked/add");
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
    handleEdit(index, adminId) {
      console.log(index, adminId);
      this.$router.push("/protocol/unchecked/" + adminId);
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
.breadcrumb {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #999999;
}
.dataTable {
  width: 100%;
  height: auto;
  padding: 10px;
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
.el-main {
  padding: 20px 20px;
}
</style>

<style>
.el-main {
}
</style>
