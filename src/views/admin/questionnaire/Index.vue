<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/questionnaire">调查问卷设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="dataTable">
      <div class="dataTable_header">
        <el-col :span="8">
          <el-button class="btnBg" size="mini" @click="toAdd()">新建模板</el-button>
        </el-col>
        <el-col :span="16">
          <el-col :span="12" :offset="11">
            <el-col :span="18">
              <el-input size="mini" v-model="keyword" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="5" :offset="1">
              <el-button size="mini" class="btnBg3" icon="el-icon-search" @click="search">查询</el-button>
            </el-col>
          </el-col>
        </el-col>
      </div>
      <div class="dataTable_main">
        <el-table ref="multipleTable" v-loading="loading" :data="list" :header-row-style="headerStyle" tooltip-effect="dark" size="small" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column label="id" prop="id" width="60"></el-table-column>
          <el-table-column prop="name" label="调查问卷名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="time" label="问卷时间" show-overflow-tooltip></el-table-column>
          <el-table-column prop="link" label="问卷链接" show-overflow-tooltip></el-table-column>
          <el-table-column prop="feedbackCompany" label="反馈企业" show-overflow-tooltip width="150"></el-table-column>
          <el-table-column prop="feedbackStu" label="反馈学生" show-overflow-tooltip width="150"></el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope" >
              <el-button size="mini" class="btnBg2" @click="deletes=true">删除</el-button>
              <el-dialog
                class="deletes"
                :visible.sync="deletes"
                title="删除问卷"
                width="30%"
                true
              >
                <div style="height:80px;border-top:1px solid #ccc">
                  <h4>确定删除当前问卷吗？</h4>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button class="btnBg3" @click="deletes = false">取 消</el-button>
                  <el-button class="btnBg" @click="handleDelete(scope.$index, scope.row)">确 定</el-button>
                </span>
              </el-dialog>
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
      deletes:false,
      type: '',
      keyword: '',
      headerStyle: {
        'color': '#0d8e52'
      },
      list: [
        {
          id: '1',
          name: '调查问卷1',
          time: '2019.3.25-2019.3.28',
          link: 'www.zhiyeceping.com',
          feedbackCompany: '100',
          feedbackStu: '20',
        },
        {
          id: '2',
          name: '调查问卷1',
          time: '2019.3.25-2019.3.28',
          link: 'www.zhiyeceping.com',
          feedbackCompany: '100',
          feedbackStu: '20',
        },
        {
          id: '3',
          name: '调查问卷1',
          time: '2019.3.25-2019.3.28',
          link: 'www.zhiyeceping.com',
          feedbackCompany: '100',
          feedbackStu: '20',
        },
        {
          id: '4',
          name: '调查问卷1',
          time: '2019.3.25-2019.3.28',
          link: 'www.zhiyeceping.com',
          feedbackCompany: '100',
          feedbackStu: '20',
        },
        {
          id: '5',
          name: '调查问卷1',
          time: '2019.3.25-2019.3.28',
          link: 'www.zhiyeceping.com',
          feedbackCompany: '100',
          feedbackStu: '20',
        },
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
      this.$router.push('/questionnaire/add')
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
      this.$router.push('/questionnaire/' + adminId)
    },
    handleDelete (index, row) {
      this.list.splice(index, 1)
      this.deletes = false;
    },
    handleCurrentChange (val) {
      // console.log(val)
    }
  }
}
</script>

<style scoped>
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
  .btnBg3 {
      color: #23C6C8;
      background-color: #fff;
      border: 1px solid #23c6c8;
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
<style>
  .dataTable_main .deletes .el-dialog__title {
    font-size: 14px;
  }
  .dataTable_main .deletes .el-dialog__body {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-bottom: 20px;
  }
  .dataTable_main .deletes h4 {
    font-size: 14px;
    font-weight: normal;
    margin-top: 20px;
  }
  
</style>