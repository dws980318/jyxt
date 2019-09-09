<template>
  <el-col :span="24">
    <div style="padding:20px 0 29px 0;" class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/subujest/protocol/unchecked">就业课程管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="dataTable">
      <div class="dataTable_header">
        <el-col :span="8">
          <el-button type="success" size="mini" @click="toAdd()">新建就业课程</el-button>
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
          <el-table-column label="序号" prop="id" width="100"></el-table-column>
          <el-table-column prop="type" label="课程名称" width="240" show-overflow-tooltip></el-table-column>
          <el-table-column prop="account" label="教师姓名" width="180" show-overflow-tooltip></el-table-column>
          <el-table-column prop="name" label="课程详情" width="auto" show-overflow-tooltip>
            <template slot-scope="scope">
              <router-link :to="'/subujest/protocol/unchecked/' + scope.row.id">
                <p style="color:dodgerblue;cursor:pointer">详情</p>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="power" label="新建时间" width="140"></el-table-column>
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
          type: "大学生职业规划与创业教育",
          account: "柯婷",
          power: "2019-01-01 06:32:51",
          open: true
        },
        {
          id: "2",
          type: "大学生职业规划与创业教育",
          account: "柯婷",
          power: "2019-01-01 06:32:51",
          open: true
        },
        {
          id: "3",
          type: "大学生职业规划与创业教育",
          account: "柯婷",
          power: "2019-01-01 06:32:51",
          open: false
        },
        {
          id: "4",
          type: "大学生职业规划与创业教育",
          account: "柯婷",
          power: "2019-01-01 06:32:51",
          open: true
        },
        {
          id: "5",
          type: "大学生职业规划与创业教育",
          account: "柯婷",
          power: "2019-01-01 06:32:51",
          open: true
        },
        {
          id: "6",
          type: "大学生职业规划与创业教育",
          account: "柯婷",
          power: "2019-01-01 06:32:51",
          open: false
        },
        {
          id: "7",
          type: "大学生职业规划与创业教育",
          account: "柯婷",
          power: "2019-01-01 06:32:51",
          open: false
        },
        {
          id: "8",
          type: "大学生职业规划与创业教育",
          account: "柯婷",
          power: "2019-01-01 06:32:51",
          open: false
        },
        {
          id: "9",
          type: "大学生职业规划与创业教育",
          account: "柯婷",
          name: "溜得滑",
          power: "2019-01-01 06:32:51",
          open: true
        },
        {
          id: "10",
          type: "大学生职业规划与创业教育",
          account: "柯婷",
          name: "溜得滑",
          power: "2019-01-01 06:32:51",
          open: true
        }
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
