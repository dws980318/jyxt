<template>
  <div class="pass">
    <div class="pass-heared">
      <div class="heared-title">
        <i class="el-icon-warning"></i>为保证您的信息安全，请设定大小字母、数字、特殊字符三种类型组合不少8位的密码，不要用账号作为密码。
      </div>
    </div>
    <div class="dispatch-pass">
      <div class="dispatch-pass-table border bg">
        <div class="box-title border-b">基本资料</div>
        <div class="dispatch-table-content">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item class="w60" label="原密码" prop="beforepass">
              <el-input v-model="ruleForm.beforepass" placeholder="原密码"></el-input>
            </el-form-item>
            <el-form-item class="w60" label="新密码" prop="nowpass">
              <el-input
                v-model="ruleForm.nowpass"
                @focus.capture.native="changePasswordTip(true)"
                @blur.capture.native="changePasswordTip(false)"
                auto-complete="new-password"
                placeholder="新密码"
              ></el-input>
              <div style="position: absolute">
                <verifyPassWordTip :password="ruleForm.nowpass" :isShowTip="isShowTip"></verifyPassWordTip>
              </div>
              <!-- <div class="password-explain">
                <ul class="passstaus w-50 flex-around">
                  <li :class="degreeNumber === 1 ? 'passsuss':'passlow'">低</li>
                  <li :class="degreeNumber === 2 ? 'passsuss':'passlow'">中</li>
                  <li :class="degreeNumber === 3 ? 'passsuss':'passlow'">高</li>
                </ul>
                <div>大写字母、小写字母、数字、特殊字符中三种类型的组合</div>
              </div>-->
            </el-form-item>
            <el-form-item class="w60" label="确认密码" prop="confirm">
              <el-input v-model="ruleForm.confirm" placeholder="确认密码"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="upload border bg">
      <el-button type="primary" @click="open" icon="el-icon-check">提交</el-button>
    </div>
  </div>
</template>

<script>
import verifyPassWordTip from "../../../components/password";
export default {
  components: {
    verifyPassWordTip
  },
  data() {
    return {
      input: "",
      isShowTip: false,
      // degreeNumber: 0,
      labelPosition: "left",
      ruleForm: {
        beforepass: "",
        nowpass: "",
        confirm: ""
      },
      rules: {
        beforepass: [
          { required: true, message: "请输入原来密码", trigger: "blur" }
        ],
        nowpass: [
          { required: true, message: "请输入8~24位密码", trigger: "blur" }
          // { min: 8, max: 24, message: "长度在8 ~ 24个字符", trigger: "blur" }
        ],
        confirm: [{ required: true, message: "请确认密码", trigger: "change" }]
      }
    };
  },
  methods: {
    open() {
      this.$message({
        message: "成功提交",
        type: "success"
      });
    },
    changePasswordTip(isShow) {
      if (isShow) {
        this.isShowTip = true;
      } else {
        this.isShowTip = false;
      }
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
};
</script>
<style scoped>
.password-explain {
  color: #dedede;
}
.passstaus {
  margin-top: 10px;
}
.passstaus li {
  width: 160px;
  text-align: center;
  color: #fff;
  /* background-color: #dedede; */
}
.passlow {
  background-color: #dedede;
}
.passsuss {
  background-color: rgb(8, 189, 189);
}
.upload-img {
  width: 250px;
  height: 250px;
  margin: 30px auto;
  text-align: center;
}
.upload-img img {
  width: 100%;
}
.border-upload {
  width: 500px;
  text-align: left;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.heared-title {
  line-height: 60px;
}
.input-t input {
  background-color: #dedede;
}
.inner-title {
  padding-left: 10px;
  line-height: 50px;
}
.basic-content-inner {
  padding: 10px;
}
.basic-content {
  margin-top: 30px;
}
.money {
  position: relative;
}
.unit {
  position: absolute;
  right: -30px;
  top: 0;
}
.el-upload {
  border: 1px dashed transparent;
}
.w-30 {
  width: 300px;
}
.upload {
  margin: 20px 0;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
}
.pass {
  padding: 20px;
}
.flex-bet {
  display: flex;
  justify-content: space-between;
}
.flex {
  display: flex;
  width: 1000px;
}
.dispatch-table-content {
  padding: 50px 0;
}
.w-50 {
  width: 500px;
}
.pass-heared {
  width: 100%;
  height: 60px;
  color: #fff;
  padding: 0 30px;
  margin-bottom: 20px;
  background-color: rgb(8, 189, 189);
}
.small-size {
  font-size: 15px;
}
</style>
