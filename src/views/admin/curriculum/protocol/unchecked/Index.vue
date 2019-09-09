<template>
  <el-col :span="24">
    <div class="dataTable">
      <div class="dataTable_header">
        <el-col :span="8">
          <el-button type="success" size="mini" @click="somePass()">通过</el-button>
          <el-button type="danger" size="mini" @click="someBack()">退改</el-button>
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
        <el-table ref="multipleTable" v-loading="loading" :data="list" :header-row-style="headerStyle" tooltip-effect="dark" size="small" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50"></el-table-column>
          <el-table-column label="id" prop="id" width="60"></el-table-column>
          <el-table-column prop="number" label="协议书编号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="proposer" label="申请人" show-overflow-tooltip></el-table-column>
          <el-table-column prop="type" label="申请类型" show-overflow-tooltip></el-table-column>
          <el-table-column prop="application" label="企业名称" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="applyTime" label="申请时间" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="id" label="详细" width="60" align="center" show-overflow-tooltip>
            <template slot-scope="scope">
              <router-link :to="'/student/protocol/unchecked/' + scope.row.id">
                <p style="color:dodgerblue;cursor:pointer">查看</p>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="150">
            <template slot-scope="scope">
              <el-button size="mini" type="success" @click="toPass(scope.$index, scope.row.id)">通过</el-button>
              <el-button size="mini" type="danger" @click="toBack(scope.$index, scope.row.id)">退改</el-button>
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
          number: '2019001',
          proposer: '溜得滑',
          type: '首次申请',
          application: '广州XXXX公司',
          applyTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 2,
          number: '2019001',
          proposer: '溜得滑',
          type: '首次申请',
          application: '广州XXXX公司',
          applyTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 3,
          number: '2019001',
          proposer: '溜得滑',
          type: '首次申请',
          application: '广州XXXX公司',
          applyTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 4,
          number: '2019001',
          proposer: '溜得滑',
          type: '首次申请',
          application: '广州XXXX公司',
          applyTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 5,
          number: '2019001',
          proposer: '溜得滑',
          type: '首次申请',
          application: '广州XXXX公司',
          applyTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 6,
          number: '2019001',
          proposer: '溜得滑',
          type: '首次申请',
          application: '广州XXXX公司',
          applyTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 7,
          number: '2019001',
          proposer: '溜得滑',
          type: '首次申请',
          application: '广州XXXX公司',
          applyTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 8,
          number: '2019001',
          proposer: '溜得滑',
          type: '首次申请',
          application: '广州XXXX公司',
          applyTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 9,
          number: '2019001',
          proposer: '溜得滑',
          type: '首次申请',
          application: '广州XXXX公司',
          applyTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 10,
          number: '2019001',
          proposer: '溜得滑',
          type: '首次申请',
          application: '广州XXXX公司',
          applyTime: '2019-04-15 12:00',
          open: true
        }
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
  .thumbnail{
    width: 180px;
    height: auto;
  }
  .thumbnail_big{
    width: 360px;
    height: auto;
  }
</style>
