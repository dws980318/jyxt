<template>
  <el-col :span="24">
    <div class="dataTable">
      <div class="dataTable_header">
        <el-col :span="8">
          <el-button type="success" size="mini" @click="toAdd()">新建友情链接</el-button>
          <el-button type="danger" size="mini" @click="deleteSome()">批量删除</el-button>
        </el-col>
        <el-col :span="16">
          <!--          <el-col :span="7" :offset="3">-->
          <!--            <el-col :span="20" :offset="4">-->
          <!--              <el-select v-model="type" placeholder="请选择账号类型" size="mini" :clearable="true">-->
          <!--                <el-option v-for="(item, index) in filter.type" :key="index" :label="item.name" :value="item.id"></el-option>-->
          <!--              </el-select>-->
          <!--            </el-col>-->
          <!--          </el-col>-->
          <el-col :span="12" :offset="11">
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
<!--          <el-table-column prop="type" label="栏目" width="80" show-overflow-tooltip></el-table-column>-->
          <el-table-column prop="title" label="企业名称" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="image" align="center" label="企业图片">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <img class="thumbnail_big" :src="scope.row.image" alt="">
                <div slot="reference" class="name-wrapper">
                  <img class="thumbnail" :src="scope.row.image" alt="">
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="path" label="企业链接" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="sort" label="排序" width="50" show-overflow-tooltip></el-table-column>
          <el-table-column align="center" prop="open" label="状态" width="100">
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
    type (newVal, oldVal) {
      console.log(newVal)
    }
  },
  methods: {
    getPath () {
      this.list = [
        {
          id: 1,
          type: '首页',
          image: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          title: '这是企业名称',
          path: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          sort: 1,
          open: true
        },
        {
          id: 2,
          type: '首页',
          image: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          title: '这是企业名称',
          path: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          sort: 2,
          open: true
        },
        {
          id: 3,
          type: '首页',
          image: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          title: '这是企业名称',
          path: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          sort: 3,
          open: false
        },
        {
          id: 4,
          type: '首页',
          image: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          title: '这是企业名称',
          path: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          sort: 1,
          open: false
        },
        {
          id: 5,
          type: '首页',
          image: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          title: '这是企业名称',
          path: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          sort: 99,
          open: true
        },
        {
          id: 6,
          type: '首页',
          image: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          title: '这是企业名称',
          path: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          sort: 1,
          open: false
        },
        {
          id: 7,
          type: '首页',
          image: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          title: '这是企业名称',
          path: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          sort: 1,
          open: false
        },
        {
          id: 8,
          type: '首页',
          image: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          title: '这是企业名称',
          path: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          sort: 1,
          open: false
        },
        {
          id: 9,
          type: '首页',
          image: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          title: '这是企业名称',
          path: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          sort: 1,
          open: false
        },
        {
          id: 10,
          type: '首页',
          image: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          title: '这是企业名称',
          path: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
          sort: 1,
          open: false
        }
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
