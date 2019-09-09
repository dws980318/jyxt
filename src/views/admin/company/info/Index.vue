<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/company/info">企业信息管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="dataTable">
      <div class="dataTable_header">
        <el-col :span="8">
          <el-button size="mini" :plain="true" :loading="derive" @click="toDerive">导出</el-button>
        </el-col>
        <el-col :span="16">
          <el-col :span="7" :offset="3">
            <el-col :span="20" :offset="4">
              <el-select v-model="type" placeholder="请选择发布状态" size="mini" :clearable="true">
                <el-option v-for="(item, index) in filter.type" :key="index" :label="item.name" :value="item.open"></el-option>
              </el-select>
            </el-col>
          </el-col>
          <el-col :span="12" :offset="1">
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
        <el-table ref="multipleTable" v-loading="loading" :data="list" :header-row-style="headerStyle" tooltip-effect="dark" size="small" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50"></el-table-column>
          <el-table-column label="id" prop="id" width="60"></el-table-column>
          <el-table-column prop="name" label="企业名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="register" label="注册信息" show-overflow-tooltip>
            <template slot-scope="scope">
              <router-link :to="'/company/info/register/' + scope.row.id">
                <p style="color:#23C6C8;cursor:pointer">查看</p>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="information" label="基本信息" show-overflow-tooltip>
            <template slot-scope="scope">
              <router-link :to="'/company/info/information/' + scope.row.id">
                <p style="color:#23C6C8;cursor:pointer">查看</p>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="单位地址" show-overflow-tooltip>
            <template slot-scope="">
                <p style="color:#23C6C8;cursor:pointer" @click="address = true">查看</p>
            </template>
          </el-table-column>
          <el-table-column prop="invoice" label="发票信息" show-overflow-tooltip width="100">
            <template slot-scope="scope">
              <router-link :to="'/company/info/invoice/' + scope.row.id">
                <p style="color:#23C6C8;cursor:pointer">查看</p>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="settled" label="入驻情况" width="150"></el-table-column>
          <el-table-column align="center" label="操作" width="200">
            <template slot-scope="scope">
              <el-button size="mini" class="btnBg" @click="handleEdit(scope.$index, scope.row.id)">详情</el-button>
              <el-button size="mini" class="btnBg2" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="panel_pagination">
        <el-pagination style="text-align:center" background @current-change="handleCurrentChange" :page-size="15" layout="prev, pager, next, jumper" :total="10000" :pager-count="13"></el-pagination>
      </div>

      <el-dialog
      class="address"
      :visible.sync="address"
      title="查看单位地址"
      width="30%"
      true
    >
      <div style="height:100px;border-top:1px solid #ccc">
        <h2>广州市黄埔区东旋路36号</h2>
      </div>
    </el-dialog>
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
      address: false,
      filter: {
        type: [
          {
            open: true,
            name: '已发布'
          },
          {
            open: false,
            name: '已下架'
          }
        ]
      },
      type: '',
      keyword: '',
      headerStyle: {
        'color': '#0d8e52'
      },
      list: [],
      multipleSelection: []
    }
  },
  created () {
    this.getPath()
  },
  watch: {
    type (newVal, oldVal) {
      console.log(newVal)
    }
  },
  methods: {
    getPath () {
      this.list = [
        {
          id: 1,
          name: '这是企业名字',
          settled: '已入驻'
        },
        {
          id: 2,
          name: '这是企业名字',
          settled: '已入驻'
        },
        {
          id: 3,
          name: '这是企业名字',
          settled: '已入驻'
        },
        {
          id: 4,
          name: '这是企业名字',
          settled: '已入驻'
        },
        {
          id: 5,
          name: '这是企业名字',
          settled: '已入驻'
        },
      ]
    },
    somePass () {
      const openLoading = this.Loading.startLoading('正在操作...')
      setTimeout(() => {
        openLoading.close()
      }, 1000)
    },
    someBack () {
      const openLoading = this.Loading.startLoading('正在操作...')
      setTimeout(() => {
        openLoading.close()
      }, 1000)
      // console.log(this.multipleSelection)
    },
    toPass () {
      const openLoading = this.Loading.startLoading('正在操作...')
      setTimeout(() => {
        openLoading.close()
      }, 1000)
    },
    toBack () {
      const openLoading = this.Loading.startLoading('正在操作...')
      setTimeout(() => {
        openLoading.close()
      }, 1000)
      // console.log(this.multipleSelection)
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
    handleEdit (index, companyId) {
      console.log(index, companyId)
      this.$router.push('/company/info/' + companyId)
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
  a{
    text-decoration: none;
  }
  .btnBg {
    color: #fff;
    background-color:#23C6C8;
    border: none;
  }
  .btnBg2 {
    color: #6b6b6b;
    background-color: #e4e4e4;
    border: none;
  }
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
    padding: 20px 10px;
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
