<template>
  <div class="information">
    <div class="form">
      <el-form label-width="120px" class="demo-ruleForm">
        <el-form-item label="企业logo：" prop="nickname">
          <div class="avator">
            <div class="avator_main">
              <img :src="information.avator" alt="">
            </div>
          </div>
        </el-form-item>
        <el-form-item label="企业名称：" prop="company">
          <p>{{information.company}}</p>
        </el-form-item>
        <el-form-item label="简称：" prop="abbr">
          <p>{{information.abbr}}</p>
        </el-form-item>
        <el-form-item label="成立时间：" prop="creatTime">
          <p>{{information.creatTime}}</p>
        </el-form-item>
        <el-form-item label="单位性质：" prop="type">
          <p>{{information.type}}</p>
        </el-form-item>
        <el-form-item label="所属行业：" prop="industry">
          <p>{{information.industry}}</p>
        </el-form-item>
        <el-form-item label="注册资金：" prop="register">
          <p>{{information.register}}万</p>
        </el-form-item>
        <el-form-item label="企业规模：" prop="scale">
          <p>{{information.scale}}</p>
        </el-form-item>
        <el-form-item label="员工人数：" prop="number">
          <p>{{information.number}}</p>
        </el-form-item>
        <el-form-item label="口号或标语：" prop="slogan">
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
        <el-form-item label="其他号码：" prop="other">
          <p>{{information.other}}</p>
        </el-form-item>
        <el-form-item label="网址：" prop="website">
          <p>{{information.website}}</p>
        </el-form-item>
        <el-form-item label="所属地区：" prop="area">
          <p>{{information.area}}</p>
        </el-form-item>
        <el-form-item label="详细地址：" prop="address">
          <p>{{information.address}}</p>
        </el-form-item>
        <el-form-item label="标签：" prop="label">
          <p>{{information.label}}</p>
        </el-form-item>
        <el-form-item label="详细介绍：" prop="content">
          <div v-html="information.content"></div>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="success" @click="toChange()">编辑</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import userImg from '@/common/images/user.png'

export default {
  name: 'Info',
  data () {
    return {
      information: {
        avator: userImg,
        company: '广州XXXX公司',
        abbr: 'XXXX',
        creatTime: '2016-05-20',
        type: '国企',
        industry: '计算机',
        register: '500',
        scale: '小型',
        number: '200-500',
        slogan: '这是口号',
        linkman: '溜得滑',
        linkphone: '13579246810',
        email: '123456789@qq.com',
        fax: '020-13245678',
        other: '8208208820',
        website: 'www.xxxxx123.com',
        area: '广州市天河区',
        address: '广州市天河区XXXXXXXXXXXXX',
        label: '我是国企',
        content: '这是这个公司的详细介绍'
      }
    }
  },
  created () {
  },
  methods: {
    toChange () {
      this.$router.push('/personal/information/change')
    }
  }
}
</script>

<style scoped>
  .information{
    width: 100%;
    height: auto;
    padding: 20px 10px;
  }
  .avator{
    width: 100%;
    height: 80px;
  }
  .avator_main{
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .avator_main img{
    width: 100%;
    height: 100%;
  }
  .form{
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
</style>
