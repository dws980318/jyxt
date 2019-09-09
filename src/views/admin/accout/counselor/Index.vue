<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/account/counselor">咨询师账号管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="dataTable">
      <div class="dataTable_header">
        <el-col :span="11">
          <el-button type="success" size="mini" @click="toAdd()">新建咨询师账号</el-button>
          <el-button type="info" size="mini">下载导入模板</el-button>
          <el-button type="primary" size="mini" :loading="derive" @click="toLead">导入</el-button>
          <el-button size="mini" :plain="true" :loading="derive" @click="toDerive">导出</el-button>
        </el-col>
        <el-col :span="13">
          <el-col :span="9" :offset="1">
            <el-col :span="20" :offset="4">
              <el-select v-model="type" placeholder="请选择账号类型" size="mini" :clearable="true">
                <el-option v-for="(item, index) in filter.type" :key="index" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-col>
          </el-col>
          <el-col :span="12" :offset="1">
            <el-col :span="18">
              <el-input size="mini" v-model="keyword" placeholder="请输入账号或关键词"></el-input>
            </el-col>
            <el-col :span="5" :offset="1">
              <el-button size="mini" type="success" icon="el-icon-search" @click="search">搜索</el-button>
            </el-col>
          </el-col>
        </el-col>
      </div>
      <div class="dataTable_main">
        <el-table ref="multipleTable" v-loading="loading" :data="list" :header-row-style="headerStyle" tooltip-effect="dark" size="small" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column label="id" prop="id" min-width="40"></el-table-column>
          <el-table-column prop="type" label="账号类型" show-overflow-tooltip></el-table-column>
          <el-table-column prop="account" label="账号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
          <el-table-column prop="phone" label="手机" show-overflow-tooltip></el-table-column>
          <el-table-column prop="qq" label="QQ" show-overflow-tooltip></el-table-column>
          <el-table-column prop="email" label="邮箱" show-overflow-tooltip></el-table-column>
          <el-table-column prop="fixedLine" label="电话" show-overflow-tooltip></el-table-column>
          <el-table-column prop="introduction" align="center" label="介绍" width="50">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>{{ scope.row.introduction }}</p>
                <div slot="reference" class="name-wrapper">
                  <p style="color:dodgerblue;cursor:pointer">详情</p>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="150">
            <template slot-scope="scope">
              <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="panel_pagination">
        <el-pagination style="text-align:center" background @current-change="handleCurrentChange" :page-size="15" layout="prev, pager, next, jumper" :total="10000" :pager-count="13"></el-pagination>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      loading: false,
      derive: false,
      filter: {
        type: [
          {
            id: 1,
            name: '咨询师'
          },
          {
            id: 2,
            name: '就业辅导'
          }
        ]
      },
      type: '',
      keyword: '',
      headerStyle: {
        'color': '#0d8e52'
      },
      list: [
        {
          id: '1',
          type: '咨询师',
          account: 'admin',
          name: '溜得滑',
          phone: '13579246810',
          qq: '123456789',
          email: '13579246810@qq.com',
          fixedLine: '020-45684456',
          introduction: '这是咨询师个人介绍'
        },
        {
          id: '2',
          type: '咨询师',
          account: 'admin123',
          name: '溜得滑',
          phone: '13579246810',
          qq: '123456789',
          email: '13579246810@qq.com',
          fixedLine: '020-45684456',
          introduction: '这是咨询师个人介绍'
        },
        {
          id: '3',
          type: '就业辅导',
          account: 'admin',
          name: '溜得滑',
          phone: '13579246810',
          qq: '123456789',
          email: '13579246810@qq.com',
          fixedLine: '020-45684456',
          introduction: '这是咨询师个人介绍'
        },
        {
          id: '4',
          type: '就业辅导',
          account: 'admin',
          name: '溜得滑',
          phone: '13579246810',
          qq: '123456789',
          email: '13579246810@qq.com',
          fixedLine: '020-45684456',
          introduction: '这是咨询师个人介绍'
        },
        {
          id: '5',
          type: '咨询师',
          account: 'admin',
          name: '溜得滑',
          phone: '13579246810',
          qq: '123456789',
          email: '13579246810@qq.com',
          fixedLine: '020-45684456',
          introduction: '这是咨询师个人介绍'
        },
        {
          id: '6',
          type: '咨询师',
          account: 'admin',
          name: '溜得滑',
          phone: '13579246810',
          qq: '123456789',
          email: '13579246810@qq.com',
          fixedLine: '020-45684456',
          introduction: '这是咨询师个人介绍'
        },
        {
          id: '7',
          type: '咨询师',
          account: 'admin',
          name: '溜得滑',
          phone: '13579246810',
          qq: '123456789',
          email: '13579246810@qq.com',
          fixedLine: '020-45684456',
          introduction: '这是咨询师个人介绍'
        },
        {
          id: '8',
          type: '咨询师',
          account: 'admin',
          name: '溜得滑',
          phone: '13579246810',
          qq: '123456789',
          email: '13579246810@qq.com',
          fixedLine: '020-45684456',
          introduction: '这是咨询师个人介绍'
        },
        {
          id: '9',
          type: '咨询师',
          account: 'admin',
          name: '溜得滑',
          phone: '13579246810',
          qq: '123456789',
          email: '13579246810@qq.com',
          fixedLine: '020-45684456',
          introduction: '这是咨询师个人介绍'
        },
        {
          id: '10',
          type: '咨询师',
          account: 'admin',
          name: '溜得滑',
          phone: '13579246810',
          qq: '123456789',
          email: '13579246810@qq.com',
          fixedLine: '020-45684456',
          introduction: '这是咨询师个人介绍'
        }
      ],
      multipleSelection: []
    }
  },
  watch: {
    type (newVal, oldVal) {
      console.log(newVal)
    }
  },
  methods: {
    toAdd () {
      this.$router.push('/account/counselor/add')
    },
    toLead () {
      const openLoading = this.Loading.startLoading('正在导入...')
      setTimeout(() => {
        openLoading.close()
      }, 1000)
    },
    toDerive () {
      const openLoading = this.Loading.startLoading('正在导出...')
      setTimeout(() => {
        openLoading.close()
      }, 1000)
    },
    search () {
      this.loading = true
      console.log(this.type, this.keyword)
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleEdit (index, studentId) {
      console.log(index, studentId)
      this.$router.push('/account/counselor/' + studentId)
    },
    handleDelete (index, row) {
      this.list.splice(index, 1)
    },
    handleCurrentChange (val) {
      // console.log(val)
    }
  }
}
</script>

<style scoped>
  .breadcrumb{
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #999999;
  }
  .dataTable{
    width: 100%;
    height: auto;
    padding: 10px;
  }
  .dataTable_header{
    width: 100%;
    height: 30px;
  }
  .dataTable_main{
    width: 100%;
    height: auto;
    padding: 10px 0 20px 0;
  }
</style>
