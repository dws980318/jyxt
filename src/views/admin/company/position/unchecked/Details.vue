<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/recruiting/teachIn/unchecked">在线职位招聘管理</el-breadcrumb-item>
        <el-breadcrumb-item>职位详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <div class="el-notification__title form_title">基本信息</div>
        <el-form :model="information" label-width="100px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="职位名称：" prop="name">
            <p>{{information.name}}</p>
          </el-form-item>
          <el-form-item label="企业名称：" prop="company">
            <p>{{information.company}}</p>
          </el-form-item>
          <el-form-item label="工作地区：" prop="area">
            <p>{{information.area}}</p>
          </el-form-item>
          <el-form-item label="薪酬范围：" prop="payment">
            <p>{{information.payment}}</p>
          </el-form-item>
          <el-form-item label="学历要求：" prop="education">
            <p>{{information.education}}</p>
          </el-form-item>
          <el-form-item label="专业方向：" prop="major">
            <p>{{information.major}}</p>
          </el-form-item>
          <el-form-item label="工作性质：" prop="nature">
            <p>{{information.nature}}</p>
          </el-form-item>
          <el-form-item label="更新时间：" prop="updateTime">
            <p>{{information.updateTime}}</p>
          </el-form-item>
          <el-form-item label="职位详情：" prop="content">
            <div v-html="information.content"></div>
          </el-form-item>
          <el-form-item label="审核发布：" prop="open">
            <el-switch v-model="information.open" active-color="#13ce66" inactive-color="#999"></el-switch>
          </el-form-item>
        </el-form>
      </div>
      <div class="form">
        <el-button size="small" type="primary" @click="$router.back(-1)">返回</el-button>
      </div>
    </div>
  </el-col>
</template>

<script>
import TinymceEditor from '@/components/tinymce-editor'
export default {
  name: 'Details',
  components: {
    TinymceEditor
  },
  data () {
    return {
      information: {}
    }
  },
  watch: {
  },
  created () {
    this.port = this.$route.params.port
    if (this.$route.params.id) {
      this.loadObject(this.$route.params.id)
    }
  },
  methods: {
    loadObject (portId) {
      this.information = {
        id: 1,
        name: '这是职位名称',
        company: '这是企业名称',
        area: '广州市天河区',
        payment: '4k~5k',
        education: '本科',
        major: '不限',
        nature: '全职',
        updateTime: '2019-04-15 12:00',
        content: '这是职位的介绍',
        open: true
      }
    },
    onSubmit () {
      this.$router.go(-1)
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
  .form_title{
    padding: 10px 0;
  }
  .information {
    width: 880px;
    height: auto;
    padding: 0 10px 20px 10px;
  }
  .form {
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
  .el-form{
    padding: 10px 20px;
  }
</style>
