<template>
  <el-col :span="24">
    <div class="dataTable">
      <div class="dataTable_header">
        <el-col :span="16">
          <el-col :span="7">
            <el-select v-model="type" placeholder="请选择一级栏目" size="mini" :clearable="true">
              <el-option v-for="(item, index) in filter.type" :key="index" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-col>
          <el-col :span="7" :offset="1">
            <el-select v-model="type" placeholder="请选择二级栏目" size="mini" :clearable="true">
              <el-option v-for="(item, index) in filter.type" :key="index" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-col>
          <el-col :span="2" :offset="1">
            <el-col :span="5" :offset="1">
              <el-button size="mini" type="success" icon="el-icon-search" @click="search">搜索</el-button>
            </el-col>
          </el-col>
        </el-col>
      </div>
      <div class="dataTable_main">
        <el-table ref="multipleTable" v-loading="loading" :data="list" :header-row-style="headerStyle" tooltip-effect="dark" size="small" style="width: 100%">
          <el-table-column label="id" prop="id" width="80"></el-table-column>
          <el-table-column prop="type" label="一级栏目" show-overflow-tooltip></el-table-column>
          <el-table-column prop="secondType" label="二级栏目" show-overflow-tooltip></el-table-column>
          <el-table-column prop="release" label="发布数量" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="soldOut" label="下架数量" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column align="center" label="详情" width="120">
            <template slot-scope="scope">
              <el-button size="mini" type="primary">查看</el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="120">
            <template slot-scope="scope">
              <el-button size="mini" type="success">新增</el-button>
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
            name: '企业'
          },
          {
            id: 2,
            name: '创业基地'
          }
        ]
      },
      type: '',
      keyword: '',
      headerStyle: {
        'color': '#0d8e52'
      },
      list: [
      ],
      multipleSelection: []
    }
  },
  created () {
    this.getPath()
  },
  watch: {
    '$route': 'getPath',
    type (newVal, oldVal) {
      console.log(newVal)
    }
  },
  methods: {
    getPath () {
      this.list = [
        {
          id: 1,
          type: '就业新闻',
          secondType: '省内新闻',
          release: 998,
          soldOut: 1
        },
        {
          id: 2,
          type: '就业新闻',
          secondType: '省内新闻',
          release: 998,
          soldOut: 1
        },
        {
          id: 3,
          type: '就业新闻',
          secondType: '省内新闻',
          release: 998,
          soldOut: 1
        },
        {
          id: 4,
          type: '就业新闻',
          secondType: '省内新闻',
          release: 998,
          soldOut: 1
        },
        {
          id: 5,
          type: '就业新闻',
          secondType: '省内新闻',
          release: 998,
          soldOut: 1
        },
        {
          id: 6,
          type: '就业新闻',
          secondType: '省内新闻',
          release: 998,
          soldOut: 1
        },
        {
          id: 7,
          type: '就业新闻',
          secondType: '省内新闻',
          release: 998,
          soldOut: 1
        },
        {
          id: 8,
          type: '就业新闻',
          secondType: '省内新闻',
          release: 998,
          soldOut: 1
        },
        {
          id: 9,
          type: '就业新闻',
          secondType: '省内新闻',
          release: 998,
          soldOut: 1
        },
        {
          id: 10,
          type: '就业新闻',
          secondType: '省内新闻',
          release: 998,
          soldOut: 1
        },
      ]
    },
    toAdd () {
      this.$router.push(this.$route.path + '/add')
    },
    deleteSome () {
      if (this.multipleSelection.length <= 0) {
        return false
      } else {
        for (let i in this.multipleSelection) {
          for (let j in this.list) {
            if (this.list[j] === this.multipleSelection[i]) {
              this.list.splice(j, 1)
            }
          }
        }
      }
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
      this.$router.push(this.$route.path + '/' + companyId)
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
    width: 120px;
    height: auto;
  }
  .thumbnail_big{
    width: 360px;
    height: auto;
  }
</style>
