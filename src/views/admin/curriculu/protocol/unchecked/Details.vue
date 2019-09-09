<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/recruiting/teachIn/unchecked">待审核列表</el-breadcrumb-item>
        <el-breadcrumb-item>查看</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <div class="el-notification__title form_title">基本信息</div>
        <el-form :model="information" label-width="100px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="协议书编号：" prop="number">
            <p>{{information.number}}</p>
          </el-form-item>
          <el-form-item label="申请人：" prop="proposer">
            <p>{{information.proposer}}</p>
          </el-form-item>
          <el-form-item label="申请类型：" prop="type">
            <p>{{information.type}}</p>
          </el-form-item>
          <el-form-item label="企业名称：" prop="application">
            <p>{{information.application}}</p>
          </el-form-item>
          <el-form-item label="申请时间：" prop="applyTime">
            <p>{{information.applyTime}}</p>
          </el-form-item>
          <el-form-item label="审核状态：" prop="open">
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
        number: '2019001',
        proposer: '溜得滑',
        type: '首次申请',
        application: '广州XXXX公司',
        applyTime: '2019-04-15 12:00',
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
