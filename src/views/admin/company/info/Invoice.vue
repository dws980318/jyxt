<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/company/info">企业信息管理</el-breadcrumb-item>
        <el-breadcrumb-item>发票信息详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <div class="el-notification__title form_title">企业发票信息</div>
        <el-form :model="invoice" label-width="120px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item label="发票抬头：" prop="header">
            <p>{{invoice.header}}</p>
          </el-form-item>
          <el-form-item label="纳税人识别号：" prop="identify">
            <p>{{invoice.identify}}</p>
          </el-form-item>
          <el-form-item label="发票注册地址：" prop="address">
            <p>{{invoice.address}}</p>
          </el-form-item>
          <el-form-item label="开户银行：" prop="bank">
            <p>{{invoice.bank}}</p>
          </el-form-item>
          <el-form-item label="开户账号：" prop="account">
            <p>{{invoice.account}}</p>
          </el-form-item>
        </el-form>
      </div>
      <div class="form">
        <el-button class="back" size="small" @click="$router.back(-1)">返回</el-button>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      information: {},
      register: {},
      invoice: {}
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
      this.invoice = {
        header: '广州XXXX公司',
        identify: '946546513164',
        address: '广州XXXXXX',
        bank: '广州XX银行',
        account: '465453123164684654'
      }
    },
    onSubmit () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .back {
    width: 80px;
      height: 38px;
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
