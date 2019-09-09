<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/company/info">企业信息管理</el-breadcrumb-item>
        <el-breadcrumb-item>企业信息详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <div class="el-notification__title form_title">企业注册信息</div>
        <el-form :model="register" label-width="120px" ref="ruleForm" class="demo-ruleForm">
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
        <div class="el-notification__title form_title">企业基本信息</div>
        <el-form :model="information" label-width="120px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="企业名称：" prop="name">
            <p>{{information.name}}</p>
          </el-form-item>
          <el-form-item label="简称：" prop="abbr">
            <p>{{information.abbr}}</p>
          </el-form-item>
          <el-form-item label="成立时间：" prop="creatTime">
            <p>{{information.creatTime}}</p>
          </el-form-item>
          <el-form-item label="单位性质：" prop="nature">
            <p>{{information.nature}}</p>
          </el-form-item>
          <el-form-item label="所属行业：" prop="industry">
            <p>{{information.industry}}</p>
          </el-form-item>
          <el-form-item label="注册资金：" prop="fund">
            <p>{{information.fund}}万</p>
          </el-form-item>
          <el-form-item label="单位规模：" prop="scale">
            <p>{{information.scale}}</p>
          </el-form-item>
          <el-form-item label="员工人数：" prop="people">
            <p>{{information.people}}</p>
          </el-form-item>
          <el-form-item label="口号：" prop="slogan">
            <p>{{information.slogan}}</p>
          </el-form-item>
          <el-form-item label="联系人：" prop="linkman">
            <p>{{information.linkman}}</p>
          </el-form-item>
          <el-form-item label="联系电话：" prop="linkphone">
            <p>{{information.linkphone}}</p>
          </el-form-item>
          <el-form-item label="邮箱：" prop="email">
            <p>{{information.email}}</p>
          </el-form-item>
          <el-form-item label="传真号码：" prop="fax">
            <p>{{information.fax}}</p>
          </el-form-item>
          <el-form-item label="其他号码：" prop="otherphone">
            <p>{{information.otherphone}}</p>
          </el-form-item>
          <el-form-item label="企业网站：" prop="website">
            <p>{{information.website}}</p>
          </el-form-item>
          <el-form-item label="所属地区：" prop="area">
            <p>{{information.area}}</p>
          </el-form-item>
          <el-form-item label="详细地址：" prop="address">
            <p>{{information.address}}</p>
          </el-form-item>
          <el-form-item label="单位概况：" prop="survey">
            <p>{{information.survey}}</p>
          </el-form-item>
        </el-form>
      </div>
      
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
          <el-form-item label="所属行业：" prop="company_type">
            <p>{{invoice.company_type}}</p>
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
      this.information = {
        id: 1,
        name: '广州XXXX公司',
        abbr: 'XXXX',
        creatTime: '2019-04-15 10:00',
        nature: '国企',
        industry: '计算机',
        fund: '500',
        scale: '500-1000人',
        slogan: '以人为本',
        linkman: '溜得滑',
        linkphone: '13579246810',
        email: '123456789@qq.com',
        fax: '020-12345678',
        otherphone: '8208208820',
        website: 'www.xxxx.com',
        area: '广州市天河区',
        address: '广州市天河区XXXXXXXXXXX',
        survey: '这是这个国企的简介，我也不知道介绍什么，反正就感觉很叼的样子，导致我就是想写长一点，长到多长我也不知道，反正大概可能就是长到能够换行吧',
        people: '100-499人',
      }
      this.register = {
        number: '98102045646213216545',
        creatTime: '2019-04-15 10:00',
        img: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png'
      }
      this.invoice = {
        header: '广州XXXX公司',
        identify: '946546513164',
        address: '广州XXXXXX',
        bank: '广州XX银行',
        company_type: '-',
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
