<template>
  <el-col :span="24">
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
          <el-table-column prop="name" label="职位名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="company" label="企业名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="area" label="工作地区" show-overflow-tooltip></el-table-column>
          <el-table-column prop="payment" label="薪酬范围" width="75" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="education" label="学历要求" width="70" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="major" label="专业" width="70" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="nature" label="性质" width="70" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="id" label="详细" width="60" align="center" show-overflow-tooltip>
            <template slot-scope="scope">
              <router-link :to="'/company/position/checked/' + scope.row.id">
                <p style="color:dodgerblue;cursor:pointer">查看</p>
              </router-link>
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
          name: '这是职位名称',
          company: '这是企业名称',
          area: '广州市天河区',
          payment: '4k~5k',
          education: '本科',
          major: '不限',
          nature: '全职',
          updateTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 2,
          name: '这是职位名称',
          company: '这是企业名称',
          area: '广州市天河区',
          payment: '4k~5k',
          education: '本科',
          major: '不限',
          nature: '全职',
          updateTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 3,
          name: '这是职位名称',
          company: '这是企业名称',
          area: '广州市天河区',
          payment: '4k~5k',
          education: '本科',
          major: '不限',
          nature: '全职',
          updateTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 4,
          name: '这是职位名称',
          company: '这是企业名称',
          area: '广州市天河区',
          payment: '4k~5k',
          education: '本科',
          major: '不限',
          nature: '全职',
          updateTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 5,
          name: '这是职位名称',
          company: '这是企业名称',
          area: '广州市天河区',
          payment: '4k~5k',
          education: '本科',
          major: '不限',
          nature: '全职',
          updateTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 6,
          name: '这是职位名称',
          company: '这是企业名称',
          area: '广州市天河区',
          payment: '4k~5k',
          education: '本科',
          major: '不限',
          nature: '全职',
          updateTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 7,
          name: '这是职位名称',
          company: '这是企业名称',
          area: '广州市天河区',
          payment: '4k~5k',
          education: '本科',
          major: '不限',
          nature: '全职',
          updateTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 8,
          name: '这是职位名称',
          company: '这是企业名称',
          area: '广州市天河区',
          payment: '4k~5k',
          education: '本科',
          major: '不限',
          nature: '全职',
          updateTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 9,
          name: '这是职位名称',
          company: '这是企业名称',
          area: '广州市天河区',
          payment: '4k~5k',
          education: '本科',
          major: '不限',
          nature: '全职',
          updateTime: '2019-04-15 12:00',
          open: true
        },
        {
          id: 10,
          name: '这是职位名称',
          company: '这是企业名称',
          area: '广州市天河区',
          payment: '4k~5k',
          education: '本科',
          major: '不限',
          nature: '全职',
          updateTime: '2019-04-15 12:00',
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
</style>
