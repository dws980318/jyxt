<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/template">企业介绍模板管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="dataTable">
      <div class="dataTable_header">
        <el-col :span="8">
          <el-button type="success" size="mini" @click="toAdd()">新建模板</el-button>
        </el-col>
        <el-col :span="16">
          <el-col :span="12" :offset="11">
            <el-col :span="18">
              <el-input size="mini" v-model="keyword" placeholder="请输入内容"></el-input>
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
          <el-table-column prop="name" label="模板名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="versions" label="版本号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="author" label="作者" show-overflow-tooltip></el-table-column>
          <el-table-column prop="updateTime" label="更新时间" show-overflow-tooltip></el-table-column>
          <el-table-column prop="use_status" label="使用情况" show-overflow-tooltip></el-table-column>
          <el-table-column align="center" prop="open" label="使用状态" width="100">
            <template slot-scope="scope">
              <p :style="chooseColor(scope.row.open)">{{scope.row.open ? '使用中': '已下架'}}</p>
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
          name: '模板1',
          versions: 'v1.0',
          author: '溜得滑',
          updateTime: '2019-05-02',
          use_status: "100",
          open: true
        },
        {
          id: '2',
          name: '模板2',
          versions: 'v1.0',
          author: '溜得滑',
          updateTime: '2019-05-02',
          use_status: "100",
          open: true
        },
        {
          id: '3',
          name: '模板3',
          versions: 'v1.0',
          author: '溜得滑',
          updateTime: '2019-05-02',
          use_status: "100",
          open: false
        },
        {
          id: '4',
          name: '模板4',
          versions: 'v1.0',
          author: '溜得滑',
          updateTime: '2019-05-02',
          use_status: "100",
          open: true
        },
        {
          id: '5',
          name: '模板5',
          versions: 'v1.0',
          author: '溜得滑',
          updateTime: '2019-05-02',
          use_status: "100",
          open: true
        },
        {
          id: '6',
          name: '模板6',
          versions: 'v1.0',
          author: '溜得滑',
          updateTime: '2019-05-02',
          use_status: "100",
          open: false
        },
        {
          id: '7',
          name: '模板7',
          versions: 'v1.0',
          author: '溜得滑',
          updateTime: '2019-05-02',
          use_status: "100",
          open: false
        },
        {
          id: '8',
          name: '模板8',
          versions: 'v1.0',
          author: '溜得滑',
          updateTime: '2019-05-02',
          use_status: "100",
          open: false
        },
        {
          id: '9',
          name: '模板9',
          versions: 'v1.0',
          author: '溜得滑',
          updateTime: '2019-05-02',
          use_status: "100",
          open: true
        },
        {
          id: '10',
          name: '模板10',
          versions: 'v1.0',
          author: '溜得滑',
          updateTime: '2019-05-02',
          use_status: "100",
          open: true
        }
      ],
      multipleSelection: []
    }
  },
  mounted () {
  },
  watch: {
    type (newVal, oldVal) {
      console.log(newVal)
    }
  },
  methods: {
      toAdd () {
        this.$router.push('/template/add')
      },
    chooseColor (open) {
      if (open) {
        return 'color:green'
      } else {
        return 'color:orangered'
      }
    },
    // toDerive () {
    //   const openLoading = this.Loading.startLoading('正在导出...')
    //   setTimeout(() => {
    //     openLoading.close()
    //   }, 1000)
    // },
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
      this.$router.push('/template/' + adminId)
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
    position: relative;
    width: 100%;
    height: 45px;
    padding-top: 20px;
  }
  .breadcrumb:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #42b983;
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
