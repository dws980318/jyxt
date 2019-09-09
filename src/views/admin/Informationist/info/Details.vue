<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/Informationist/info/">咨询师信息管理</el-breadcrumb-item>
        <el-breadcrumb-item>个人资料</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <div class="el-notification__title form_title">个人资料</div>
        <el-form :model="register" label-width="120px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item label="姓名：" prop="name">
            <p>{{register.name}}</p>
          </el-form-item>
          <el-form-item label="性别：" prop="gender">
            <p>{{register.gender}}</p>
          </el-form-item>
          <el-form-item label="头像：" prop="img">
            <img :src="register.img" alt />
          </el-form-item>
          <el-form-item label="手机：" prop="phone">
            <p>{{register.phone}}</p>
          </el-form-item>
          <el-form-item label="邮箱：" prop="email">
            <p>{{register.email}}</p>
          </el-form-item>
          <el-form-item label="QQ号：" prop="qq">
            <p>{{register.qq}}</p>
          </el-form-item>
          <el-form-item label="其他电话：" prop="talphone">
            <p>{{register.talphone}}</p>
          </el-form-item>
        </el-form>
      </div>
      <div class="form">
        <div class="el-notification__title form_title">咨询师资料</div>
        <el-form :model="information" label-width="120px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="教师职务：" prop="name">
            <p>{{information.name}}</p>
          </el-form-item>
          <el-form-item label="教师工号：" prop="abbr">
            <p>{{information.abbr}}</p>
          </el-form-item>
          <el-form-item label="教师专业：" prop="creatTime">
            <p>{{information.creatTime}}</p>
          </el-form-item>
          <el-form-item label="详情介绍：" prop="nature">
            <p>{{information.nature}}</p>
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
  name: "Details",
  data() {
    return {
      information: {},
      register: {},
      invoice: {}
    };
  },
  watch: {},
  created() {
    this.port = this.$route.params.port;
    if (this.$route.params.id) {
      this.loadObject(this.$route.params.id);
    }
  },
  methods: {
    loadObject(portId) {
      this.information = {
        id: 1,
        name: "广州XXXX公司",
        abbr: "XXXX",
        creatTime: "2019-04-15 10:00",
        nature: "国企"
      };
      this.register = {
        name: "98102045646213216545",
        gender: "2019-04-15 10:00",
        phone: "计算机",
        email: "500",
        qq: "500-1000人",
        talphone: "以人为本",
        img:
          "http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png"
      };
    },
    onSubmit() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.back {
  width: 80px;
  height: 38px;
  color: #23c6c8;
  background-color: #fff;
  border: 1px solid #23c6c8;
}
.breadcrumb {
  position: relative;
  width: 100%;
  height: 45px;
  padding-top: 20px;
}
.breadcrumb:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #42b983;
}
.form_title {
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
.el-form {
  padding: 10px 20px;
}
</style>
