<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/account/company">企业账号管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="dataTable">
      <div class="dataTable_header">
        <el-col :span="8">
          <el-button type="success" size="mini" @click="toAdd()">新建企业账号</el-button>
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
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column label="id" prop="id" min-width="40"></el-table-column>
          <el-table-column prop="type" label="账号类型" show-overflow-tooltip></el-table-column>
          <el-table-column prop="account" label="账号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="name" label="企业名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="property" label="企业性质" show-overflow-tooltip></el-table-column>
          <el-table-column prop="linkman" label="联系人" show-overflow-tooltip></el-table-column>
          <el-table-column prop="phone" label="联系电话" show-overflow-tooltip></el-table-column>
          <el-table-column prop="email" label="邮箱" show-overflow-tooltip></el-table-column>
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
        {
          id: '1',
          type: '企业',
          account: 'admin',
          name: '广州XXX有限公司',
          property: '民营',
          linkman: '溜得滑',
          phone: '13579246810',
          email: '13579246810@qq.com',
          introduction: '这是广州XXX有限公司的企业介绍'
        },
        {
          id: '2',
          type: '企业',
          account: 'admin123',
          name: '广州XXX有限公司',
          property: '民营',
          linkman: '溜得滑',
          phone: '13579246810',
          email: '13579246810@qq.com',
          introduction: '这是广州XXX有限公司的企业介绍'
        },
        {
          id: '3',
          type: '企业',
          account: 'admin',
          name: '广州XXX有限公司',
          property: '民营',
          linkman: '溜得滑',
          phone: '13579246810',
          email: '13579246810@qq.com',
          introduction: '这是广州XXX有限公司的企业介绍'
        },
        {
          id: '4',
          type: '企业',
          account: 'admin',
          name: '广州XXX有限公司',
          property: '民营',
          linkman: '溜得滑',
          phone: '13579246810',
          email: '13579246810@qq.com',
          introduction: '这是广州XXX有限公司的企业介绍'
        },
        {
          id: '5',
          type: '创业基地',
          account: 'admin',
          name: '广州XXX有限公司',
          property: '学校试验',
          linkman: '溜得滑',
          phone: '13579246810',
          email: '13579246810@qq.com',
          introduction: '这是广州XXX有限公司的企业介绍'
        },
        {
          id: '6',
          type: '创业基地',
          account: 'admin',
          name: '广州XXX有限公司',
          property: '学校试验',
          linkman: '溜得滑',
          phone: '13579246810',
          email: '13579246810@qq.com',
          introduction: '这是广州XXX有限公司的企业介绍'
        },
        {
          id: '7',
          type: '创业基地',
          account: 'admin',
          name: '广州XXX有限公司',
          property: '学校试验',
          linkman: '溜得滑',
          phone: '13579246810',
          email: '13579246810@qq.com',
          introduction: '这是广州XXX有限公司的企业介绍'
        },
        {
          id: '8',
          type: '企业',
          account: 'admin',
          name: '广州XXX有限公司',
          property: '国企',
          linkman: '溜得滑',
          phone: '13579246810',
          email: '13579246810@qq.com',
          introduction: '这是广州XXX有限公司的企业介绍'
        },
        {
          id: '9',
          type: '企业',
          account: 'admin',
          name: '广州XXX有限公司',
          property: '私营',
          linkman: '溜得滑',
          phone: '13579246810',
          email: '13579246810@qq.com',
          introduction: '这是广州XXX有限公司的企业介绍'
        },
        {
          id: '10',
          type: '企业',
          account: 'admin',
          name: '广州XXX有限公司',
          property: '私营',
          linkman: '溜得滑',
          phone: '13579246810',
          email: '13579246810@qq.com',
          introduction: '这是广州XXX有限公司的企业介绍'
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
      this.$router.push('/account/company/add')
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
      this.$router.push('/account/company/' + companyId)
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
