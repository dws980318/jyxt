<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/account/admin">管理员账号管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="dataTable">
      <div class="dataTable_header">
        <el-col :span="8">
          <el-button type="success" size="mini" @click="toAdd()">新建管理员</el-button>
          <el-button size="mini" :plain="true" :loading="derive" @click="toDerive">导出</el-button>
        </el-col>
        <el-col :span="16">
          <el-col :span="7" :offset="3">
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
          <el-table-column type="selection" width="50"></el-table-column>
          <el-table-column label="id" prop="id" width="60"></el-table-column>
          <el-table-column prop="type" label="账号类型" width="120" show-overflow-tooltip></el-table-column>
          <el-table-column prop="account" label="账号" width="120" show-overflow-tooltip></el-table-column>
          <el-table-column prop="name" label="姓名" width="120" show-overflow-tooltip></el-table-column>
          <el-table-column prop="power" label="管理员权限" show-overflow-tooltip></el-table-column>
          <el-table-column align="center" prop="open" label="状态" width="80">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.open" active-color="#13ce66" inactive-color="#999"></el-switch>
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
            name: '超级管理员'
          },
          {
            id: 2,
            name: '首页栏目管理员'
          },
          {
            id: 3,
            name: '老师账号管理'
          },
          {
            id: 4,
            name: '企业审核'
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
          type: '超级管理员',
          account: 'admin',
          name: '溜得滑',
          power: '账号管理，企业信息管理，调查问卷',
          open: true
        },
        {
          id: '2',
          type: '首页栏目管理',
          account: 'admin123',
          name: '溜得滑',
          power: '账号管理，企业信息管理，调查问卷',
          open: true
        },
        {
          id: '3',
          type: '老师账号管理',
          account: 'admin',
          name: '溜得滑',
          power: '账号管理，企业信息管理，调查问卷',
          open: false
        },
        {
          id: '4',
          type: '企业审核',
          account: 'admin',
          name: '溜得滑',
          power: '账号管理，企业信息管理，调查问卷',
          open: true
        },
        {
          id: '5',
          type: '企业审核',
          account: 'admin',
          name: '溜得滑',
          power: '账号管理，企业信息管理，调查问卷',
          open: true
        },
        {
          id: '6',
          type: '企业审核',
          account: 'admin',
          name: '溜得滑',
          power: '账号管理，企业信息管理，调查问卷',
          open: false
        },
        {
          id: '7',
          type: '企业审核',
          account: 'admin',
          name: '溜得滑',
          power: '账号管理，企业信息管理，调查问卷',
          open: false
        },
        {
          id: '8',
          type: '企业审核',
          account: 'admin',
          name: '溜得滑',
          power: '账号管理，企业信息管理，调查问卷',
          open: false
        },
        {
          id: '9',
          type: '企业审核',
          account: 'admin',
          name: '溜得滑',
          power: '账号管理，企业信息管理，调查问卷',
          open: true
        },
        {
          id: '10',
          type: '企业审核',
          account: 'admin',
          name: '溜得滑',
          power: '账号管理，企业信息管理，调查问卷',
          open: true
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
      this.$router.push('/account/admin/add')
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
    handleEdit (index, adminId) {
      console.log(index, adminId)
      this.$router.push('/account/admin/' + adminId)
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
