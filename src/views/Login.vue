<template>
  <div class="login_panel">
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">系统登录</h3>
      <el-form-item label="账号：" prop="account">
        <el-input type="text" placeholder="请输入账号" v-model="form.account" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password" />
      </el-form-item>
      <el-form-item label="验证码：" prop="kaptcha">
        <el-input
          clear="inp"
          style=" width: 50%;height: 40px;"
          type="text"
          placeholder="请输入验证码"
          v-model="form.kaptcha"
        />
        <img class="img" @click="kaptchaAction" :src="imgUrl" alt />
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked" style="color:#a0a0a0;">一周内自动登录</el-checkbox>
      </el-form-item>
      <div>
        <el-button
          class="login_btn"
          type="success"
          size="small"
          v-on:click="onSubmit('loginForm')"
        >登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
// import axios from 'axios'
// axios.defaults.withCredentials = true
export default {
  name: "Login",
  data() {
    // var checkAge = (rule, value, callback) => {
    // if (!value) {
    //   return callback(new Error("手机号不能为空"));
    // }
    // setTimeout(() => {
    //   if (value < 11) {
    //     callback(new Error("请输入11位手机号"));
    //   } else {
    //     if (!/^1[3456789]\d{9}$/.test(value)) {
    //       callback(new Error("请输入正确的手机号"));
    //     } else {
    // callback();
    //     }
    //   }
    // }, 500);
    // };
    // var validatePass = (rule, value, callback) => {
    // if (value === "") {
    //   callback(new Error("密码不能为空"));
    // }
    // setTimeout(() => {
    //   if (!/^[\w_-]{6,16}$/.test(value)) {
    //     callback(new Error("请输入6-16位数字字母密码组合"));
    //   } else {
    //     if (this.ruleForm.registersure !== "") {
    //       this.$refs.ruleForm.validateField("registersure");
    //     } else {
    // callback();
    //     }
    //   }
    // }, 500);
    // };
    // var validateCode = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("验证码不能为空"));
    //   }
    //   setTimeout(() => {
    //     if (!/^[A-Za-z\d]{4}$/.test(value)) {
    //       callback(new Error("请输入四位数的验证码"));
    //     } else {
    //       callback();
    //     }
    //   }, 500);
    // };
    return {
      form: {
        account: "",
        password: "",
        kaptcha: ""
      },
      imgUrl: "",
      checked: false,
      message: false,
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        account: [
          {
            required: true,
            message: "请输入手机号码",
            trigger: "blur"
          },
          {
            // pattern: /^1[34578]\d{9}$/,
            message: "请输入正确手机号码",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            // pattern: /^[\w_-]{6,16}$/,
            message: "请输入正确的密码",
            trigger: "blur"
          }
        ],
        kaptcha: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur"
          },
          {
            // pattern: /^[A-Za-z\d]{4}$/,
            message: "请输入正确的验证码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  watch: {
    checked(val) {
      if (val) {
        if (!this.message) {
          this.message = true;
          this.$message({
            message: "确认使用环境是否安全，公用环境下不建议记住密码",
            type: "warning"
          });
        }
      }
    }
  },
  created() {
    this.kaptchaAction();
  },
  methods: {
    kaptchaAction() {
      // this.imgUrl = this.api.kaptcha()
      // .then(res=>{
      //   console.log(res)
      // this.imgUrl = this.api.kaptcha({
      // 单独配置
      //   withCredentials: true
      // }).then(res=>{
      //  this.imgUrl = ('http://192.168.0.252:8080/kaptcha?' + (Math.floor(Math.random() * 100)));
      //  });
    },
    onSubmit(formName) {
      // 为表单绑定验证功能

      if (this.checked) {
        this.setCookie(this.form.account, this.form.password, 7);
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          // var fd = new FormData();
          // fd.append("account", this.form.account);
          // fd.append("password", this.form.password);
          // console.log(this.form.account);
          // console.log(this.form.password);
          // console.log(fd);
          // this.api
          //   .login(fd)
          //   .then(res => {
          //     console.log(res);
          //     this.Storage.setSsItem("login", true);
          //     if (res.role === 0) {
          //       this.$message.error({
          //         message: res.info
          //       });
          //     } else {
          // localStorage.setItem("connectMark", res.data.connectMark);
          // localStorage.setItem("connectMark", 1);
          this.init.addLogin(4);
          localStorage.roleId = 2;
          // this.init.addLogin(res.data.roleList[0])
          // this.$router.replace('/index')
          // this.$message.success('登录成功')
          location.href = "./index.html";
          // }
          // })
          // .catch(error => {
          //   console.log(error);
          //   this.kaptchaAction();
          // });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      //   let user = {
      //     account: this.form.username,
      //     password: this.form.password
      //   }
      // console.log(user)
      // this.api.login(user).then(res => {
      //   console.log(res);
      //   if(res.status === 200) {}
      // });
      // this.api.user(this.form).then(res => {
      //   console.log(res);
      // });
    },
    setCookie(name, pwd, exdays) {
      var exdate = new Date(); // 获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); // 保存的天数
      // 字符串拼接cookie
      document.cookie =
        "userName" + "=" + name + ";path=/;expires=" + exdate.toGMTString();
      document.cookie =
        "password" + "=" + pwd + ";path=/;expires=" + exdate.toGMTString();
    }
    // 读取cookie
    // getCookie () {
    //   if (document.cookie.length > 0) {
    //     var arr = document.cookie.split('; ') // 这里显示的格式需要切割一下自己可输出看下
    //     for (var i = 0; i < arr.length; i++) {
    //       var arr2 = arr[i].split('=') // 再次切割
    //       // 判断查找相对应的值
    //       if (arr2[0] === 'userName') {
    //         //  console.log(arr2[1])
    //         this.form.username = arr2[1] // 保存到保存数据的地方
    //       } else if (arr2[0] === 'password') {
    //         // console.log(arr2[1])
    //         this.form.password = arr2[1]
    //       }
    //     }
    //     this.checked = true
    //   }
    // },
    // // 清除cookie
    // clearCookie () {
    //   this.setCookie('', '', -1) // 修改2值都为空，天数为负1天就好了
    // }
  }
};
</script>

<style scoped>
.login_panel {
  width: 100%;
  height: 100%;
  background-image: url("../common/images/login_bg.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.login-box {
  position: relative;
  top: 200px;
  border: 1px solid #0d8e52;
  width: 450px;
  margin: auto;
  padding: 35px 35px 35px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #333;
  background: rgba(255, 255, 255, 0.7);
}
.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
.login_btn {
  position: relative;
  left: 5%;
  width: 90%;
  text-align: center;
  margin: auto;
}
.inp {
  width: 50%;
  height: 40px;
}
.img {
  height: 40px;
  width: 30%;
  line-height: 40px;
  display: inline-block;
  border: 1px solid #67c23a;
  vertical-align: middle;
  margin-left: 35px;
}
</style>
<style >
/* .el-form-item__label{
   text-align: right;
} */
</style>
