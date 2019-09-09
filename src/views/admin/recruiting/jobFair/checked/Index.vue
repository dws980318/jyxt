<template>
  <el-col :span="24">
    <div class="dataTable">
      <div class="dataTable_header">
        <el-col :span="8">
          <el-button type="success" size="mini" @click="somePass()">推荐置顶</el-button>
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
          <el-table-column prop="title" label="见面会标题" show-overflow-tooltip></el-table-column>
          <el-table-column prop="company" label="参会企业" show-overflow-tooltip></el-table-column>
          <el-table-column prop="startTime" label="活动开始时间" show-overflow-tooltip></el-table-column>
          <el-table-column prop="endTime" label="活动结束时间" show-overflow-tooltip></el-table-column>
          <el-table-column prop="place" label="活动地点" show-overflow-tooltip></el-table-column>
          <el-table-column prop="id" label="详细" width="60" align="center" show-overflow-tooltip>
            <template slot-scope="scope">
              <router-link :to="'/recruiting/jobFair/checked/' + scope.row.id">
                <p style="color:dodgerblue;cursor:pointer">查看</p>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="open" label="状态" width="100">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.open" active-color="#13ce66" inactive-color="#999"></el-switch>
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
          title: '这是宣讲会的标题',
          company: '这是举行宣讲会公司',
          startTime: '2019-04-15 10:00',
          endTime: '2019-04-15 12:00',
          place: '这是宣讲会的地点',
          apply: 511,
          open: true
        },
        {
          id: 2,
          title: '这是宣讲会的标题',
          company: '这是举行宣讲会公司',
          startTime: '2019-04-15 10:00',
          endTime: '2019-04-15 12:00',
          place: '这是宣讲会的地点',
          apply: 511,
          open: true
        },
        {
          id: 3,
          title: '这是宣讲会的标题',
          company: '这是举行宣讲会公司',
          startTime: '2019-04-15 10:00',
          endTime: '2019-04-15 12:00',
          place: '这是宣讲会的地点',
          apply: 511,
          open: true
        },
        {
          id: 4,
          title: '这是宣讲会的标题',
          company: '这是举行宣讲会公司',
          startTime: '2019-04-15 10:00',
          endTime: '2019-04-15 12:00',
          place: '这是宣讲会的地点',
          apply: 511,
          open: true
        },
        {
          id: 5,
          title: '这是宣讲会的标题',
          company: '这是举行宣讲会公司',
          startTime: '2019-04-15 10:00',
          endTime: '2019-04-15 12:00',
          place: '这是宣讲会的地点',
          apply: 511,
          open: false
        },
        {
          id: 6,
          title: '这是宣讲会的标题',
          company: '这是举行宣讲会公司',
          startTime: '2019-04-15 10:00',
          endTime: '2019-04-15 12:00',
          place: '这是宣讲会的地点',
          apply: 511,
          open: false
        },
        {
          id: 7,
          title: '这是宣讲会的标题',
          company: '这是举行宣讲会公司',
          startTime: '2019-04-15 10:00',
          endTime: '2019-04-15 12:00',
          place: '这是宣讲会的地点',
          apply: 511,
          open: false
        },
        {
          id: 8,
          title: '这是宣讲会的标题',
          company: '这是举行宣讲会公司',
          startTime: '2019-04-15 10:00',
          endTime: '2019-04-15 12:00',
          place: '这是宣讲会的地点',
          apply: 511,
          open: true
        },
        {
          id: 9,
          title: '这是宣讲会的标题',
          company: '这是举行宣讲会公司',
          startTime: '2019-04-15 10:00',
          endTime: '2019-04-15 12:00',
          place: '这是宣讲会的地点',
          apply: 511,
          open: false
        },
        {
          id: 10,
          title: '这是宣讲会的标题',
          company: '这是举行宣讲会公司',
          startTime: '2019-04-15 10:00',
          endTime: '2019-04-15 12:00',
          place: '这是宣讲会的地点',
          apply: 511,
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
