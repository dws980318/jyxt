<template>
  <el-col :span="24">
    <div style="padding:20px 0 29px 0;" class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/Informationist/enter/unchecked">预约咨询师管理</el-breadcrumb-item>
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
          <el-table-column label="序号" prop="id" width="200"></el-table-column>
          <el-table-column prop="type" label="咨询师姓名" width="200" show-overflow-tooltip></el-table-column>
          <el-table-column prop="account" label="职务" width="200" show-overflow-tooltip></el-table-column>
          <el-table-column prop="phone" label="咨询师资料" width="200">
            <template slot-scope="scope">
              <router-link :to="'/Informationist/enter/unchecked/' + scope.row.id">
                <p style="color:dodgerblue;cursor:pointer">详情</p>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="预约详情" width="140" show-overflow-tooltip>
            <template>
              <p style="color:dodgerblue;cursor:pointer" @click="address = true">查看</p>
            </template>
          </el-table-column>
          <el-table-column prop="phone" label="预约人数" width="auto"></el-table-column>
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

      <el-dialog class="address" :visible.sync="address" title="查看单位地址" width="30%" true>
        <div style="border-top:1px solid #ccc">
          <el-form :model="register" label-width="120px" ref="ruleForm" class="demo-ruleForm">
            <el-form-item label="咨询主题：" prop="gender">
              <p>{{register.gender}}</p>
            </el-form-item>
            <el-form-item label="预约时间段：" prop="img">
              <img :src="register.img" alt />
            </el-form-item>
            <el-form-item label="预约地点：" prop="phone">
              <p>{{register.phone}}</p>
            </el-form-item>
            <el-form-item label="说明：" prop="email">
              <p>{{register.email}}</p>
            </el-form-item>
          </el-form>
        </div>
      </el-dialog>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      register: {
        gender: "2019-04-15 10:00",
        phone: "计算机",
        email: "500",
        qq: "500-1000人",
        talphone: "以人为本",
        img: "ksadjkhaskjdha"
      },
      loading: false,
      derive: false,
      address: false,
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
          type: "12025",
          account: "谢伟洁",
          power: "辅导员",
          one: "教育",
          phone: "156160351941",
          open: true
        },
        {
          id: "2",
          type: "12025",
          account: "谢伟洁",
          power: "辅导员",
          one: "教育",
          phone: "156160351941",
          open: true
        },
        {
          id: "3",
          type: "12025",
          account: "谢伟洁",
          power: "辅导员",
          one: "教育",
          phone: "156160351941",
          open: true
        },
        {
          id: "4",
          type: "12025",
          account: "谢伟洁",
          power: "辅导员",
          one: "教育",
          phone: "156160351941",
          open: true
        },
        {
          id: "5",
          type: "12025",
          account: "谢伟洁",
          power: "辅导员",
          one: "教育",
          phone: "156160351941",
          open: true
        },
        {
          id: "6",
          type: "12025",
          account: "谢伟洁",
          power: "辅导员",
          one: "教育",
          phone: "156160351941",
          open: true
        },
        {
          id: "7",
          type: "12025",
          account: "谢伟洁",
          power: "辅导员",
          one: "教育",
          phone: "156160351941",
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
