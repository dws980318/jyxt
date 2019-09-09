<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/company/info">企业信息管理</el-breadcrumb-item>
        <el-breadcrumb-item>注册信息详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <div class="el-notification__title form_title">企业注册信息</div>
        <el-form :model="register" label-width="120px" ref="ruleForm" class="demo-ruleForm">
            <el-form-item label="单位名称：" prop="name">
                <p>{{register.name}}</p>
            </el-form-item>
            <el-form-item label="证件号码：" prop="number">
                <p>{{register.number}}</p>
            </el-form-item>
            <el-form-item label="成立时间：" prop="creatTime">
                <p>{{register.creatTime}}</p>
            </el-form-item>
            <el-form-item label="证件图片：" prop="img">
              <img :src="register.img" alt="">
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
      this.register = {
        name: '广州XXXX公司',
        number: '98102045646213216545',
        creatTime: '2019-04-15 10:00',
        img: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png'
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
