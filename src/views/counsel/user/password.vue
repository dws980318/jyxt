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
              <el-input @input="inp" v-model="ruleForm.nowpass" placeholder="新密码"></el-input>
              <div class="password-explain">
                <ul class="passstaus w-50 flex-around">
                  <li
                    :class="{active:  degreeNumber >= 3 , normal: degreeNumber==1 || degreeNumber == 2}"
                  >低</li>
                  <li :class="{active:  degreeNumber >= 3, normal:  degreeNumber == 2}">中</li>
                  <li :class="{active:degreeNumber>=3}">高</li>
                </ul>
                <div>大写字母、小写字母、数字、特殊字符中三种类型的组合</div>
              </div>
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
export default {
  data() {
    return {
      input: "",
      labelPosition: "left",
      ruleForm: {
        beforepass: "",
        nowpass: "",
        confirm: ""
      },
      bPwd: null, //密码值和长度的验证
      degreeNumber: 0, //密码复杂度的验证
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  watch: {
    "ruleForm.nowpass"() {
      this.initPassWord();
    }
  },
  methods: {
    open() {
      this.$message({
        message: "成功提交",
        type: "success"
      });
    },
    initPassWord() {
      if (!this.ruleForm.nowpass) {
        this.bPwd = null; //没有值标签背景置灰
        this.degreeNumber = 0;
      } else {
        let objReturn = this.inp(this.ruleForm.nowpass);
        if (objReturn) {
          this.bPwd = objReturn.bPwd;
          this.degreeNumber = objReturn.degreeNumber;
        }
      }
    },
    inp(valPwd) {
      let msg = "";
      let degreeNumber = 0;
      let bPwd = false;

      if (
        this.ruleForm.nowpass == null ||
        this.ruleForm.nowpass.length < 8 ||
        this.ruleForm.nowpass.length > 24 ||
        this.ruleForm.nowpass.trim().length == ""
      ) {
        bPwd = false;
      } else {
        bPwd = true;
      }
      let arrVerify = [
        { regName: "Number", regValue: /^.*[0-9]+.*/ },
        { regName: "LowerCase", regValue: /^.*[a-z]+.*/ },
        { regName: "UpperCase", regValue: /^.*[A-Z]+.*/ },
        { regName: "SpecialCharacters", regValue: /^.*[^a-zA-Z0-9]+.*/ }
      ];
      let regNum = 0; // 记录匹配的次数
      for (let iReg = 0; iReg < arrVerify.length; iReg++) {
        if (arrVerify[iReg].regValue.test(this.ruleForm.nowpass)) {
          regNum = regNum + 1;
        }
      }
      degreeNumber = regNum;
      if (regNum <= 2) {
        msg = "密码必须包含大小写字母和数字";
      }
      let objReturn = {
        msg: msg,
        degreeNumber: degreeNumber,
        bPwd: bPwd
      };
      if (objReturn) {
        this.bPwd = objReturn.bPwd;
        this.degreeNumber = objReturn.degreeNumber;
      }
      // console.log(this.degreeNumber);
      // console.log(objReturn);
      // return objReturn;
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
.passstaus li.normal {
  background-color: red;
}
.passstaus li.active {
  background-color: rgb(8, 189, 189);
}
.password-explain {
  color: #dedede;
}
.passstaus {
  margin-top: 10px;
}
.passstaus li {
  width: 160px;
  text-align: center;
  background-color: #dedede;
  color: #fff;
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
