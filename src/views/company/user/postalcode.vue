<template>
  <div id="complaint">
    <div class="information-heared">
      <div class="heared-title">
        <i class="el-icon-warning"></i>您的邮箱已经通过认证。您可以修改邮箱，修改后需重新认证。 “发送激活邮件” 后登录邮箱进行认证。
      </div>
    </div>
    <div class="complaint bg border">
      <div class="box-title border-b flex-bt">
        <div>验证激活邮件</div>
      </div>
      <div class="complaint-content">
          <div class="complaint-title-content">
            <ul>
              <li>邮箱认证成功后，您可以享有以下服务：</li>
              <li>邮箱账户登录： 可直接使用邮箱登录。</li>
              <li>重要事件提醒： 进行投递简历等操作时，可及时收到邮箱提醒。</li>
              <li>找回账号密码： 忘记密码时，可使用邮箱找回密码。</li>
            </ul>
          </div>
          <div class="preservation">
             <el-form
            :model="ruleForm"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item class="w50" label="邮箱" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            </el-form>
            <div class="submit-button flex-center">
              <el-button type="success">保存并发送激活邮件</el-button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        email:""
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
#complaint {
  margin: 20px;
}
.submit-button {
  margin: 20px;
}
.preservation {
  padding: 30px;
}
.information-heared {
  width: 100%;
  height: 60px;
  color: #fff;
  padding: 0 30px;
  margin-bottom: 20px;
  background-color: rgb(8, 189, 189);
}
.heared-title {
  line-height: 60px;
}
.text-size {
  font-size: 15px;
}
.foot-title {
  color: red;
  line-height: 50px;
}
.flex-c {
  display: flex;
  align-items: center;
}
.padding {
  padding: 30px 0;
}
.mar-left {
  margin-left: 10px;
}
.line {
  line-height: 30px;
}
.complaint-title-content {
  display: flex;
  align-items: center;
  min-height: 80px;
  margin: 0 30px;
  padding: 20px;
  background-color: #e8f6fc;
  border-left: 5px solid #57b5e3;
  overflow: hidden;
}
.complaint-title-content li {
  line-height: 40px;
}
.complaint-content-title {
  min-height: 50px;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #999;
}
.complaint-heared {
  width: 100%;
  min-height: 50px;
  display: flex;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 14px;
  background-color: rgb(8, 189, 189);
}
.w-title {
  width: 20%;
}
.w-foot {
  width: 60%;
}
.block {
  height: 100px;
  display: flex;
  align-items: center;
}
.flex-bt {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-tabs__nav-scroll {
  border-bottom: 1px solid #999;
}
.complaint-content {
  padding: 20px;
}
</style>
