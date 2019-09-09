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
          <el-table-column label="id" prop="id" width="100"></el-table-column>
          <el-table-column prop="name" label="企业名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="id" label="企业信息" align="center" show-overflow-tooltip>
            <template slot-scope="scope">
              <router-link :to="'/company/enter/unchecked/' + scope.row.id">
                <p style="color:#23C6C8;cursor:pointer">查看</p>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="updateTime" label="提交时间" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column prop="updateTime" label="审核时间" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column label="审核状态" align="center">
            <template slot-scope="scope">
              <p :style="chooseColor(scope.row.open)">{{scope.row.open ? '已通过': '不通过'}}</p>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="open" label="状态" width="200">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.open" active-color="#13ce66" inactive-color="#999"></el-switch>
              <span>{{scope.row.open ? '已发布': '已下架'}}</span>
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
            name: '已通过'
          },
          {
            open: false,
            name: '不通过'
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
          updateTime: '2018-12-25',
          checkTime: '2018-12-25',
          open: true
        },
        {
          id: 2,
          name: '这是企业名字',
          updateTime: '2018-12-25',
          checkTime: '2018-12-25',
          open: true
        },
        {
          id: 3,
          name: '这是企业名字',
          updateTime: '2018-12-25',
          checkTime: '2018-12-25',
          open: false
        },
        {
          id: 4,
          name: '这是企业名字',
          updateTime: '2018-12-25',
          checkTime: '2018-12-25',
          open: true
        },
        {
          id: 5,
          name: '这是企业名字',
          updateTime: '2018-12-25',
          checkTime: '2018-12-25',
          open: false
        },
        {
          id: 6,
          name: '这是企业名字',
          updateTime: '2018-12-25',
          checkTime: '2018-12-25',
          open: true
        },
        {
          id: 7,
          name: '这是企业名字',
          updateTime: '2018-12-25',
          checkTime: '2018-12-25',
          open: false
        },
        {
          id: 8,
          name: '这是企业名字',
          updateTime: '2018-12-25',
          checkTime: '2018-12-25',
          open: false
        },
        {
          id: 9,
          name: '这是企业名字',
          updateTime: '2018-12-25',
          checkTime: '2018-12-25',
          open: true
        },
        {
          id: 10,
          name: '这是企业名字',
          updateTime: '2018-12-25',
          checkTime: '2018-12-25',
          open: false
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
    chooseColor (open) {
      if (open) {
        return 'color:green'
      } else {
        return 'color:orangered'
      }
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
