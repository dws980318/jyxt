<template>
  <div class="information">
    <div class="information-heared">
      <div class="heared-title">
        <i class="el-icon-warning"></i>请完善本账号相关信息。
      </div>
    </div>
    <div class="dispatch-information flex-bet">
      <div class="dispatch-information-table">
        <div class="border-b bg border">
          <div class="box-title border-b">基本信息</div>
          <div class="dispatch-table-content">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="120px"
              class="demo-ruleForm"
            >
             <el-form-item class="w80" label="账号" prop="account">
                <el-input disabled v-model="ruleForm.account"></el-input>
              </el-form-item>
              <el-form-item class="w80" label="真实姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item class="w80" label="手机" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
              </el-form-item>
              <el-form-item class="w80" label="邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item class="w80" label="QQ" prop="qq">
                <el-input v-model="ruleForm.qq"></el-input>
              </el-form-item>
              <el-form-item class="w80" label="联系电话" prop="number">
                <el-input v-model="ruleForm.number"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div style="margin-top:20px;" class="bg border">
          <div class="box-title border-b">咨询师资料</div>
          <div class="dispatch-table-content">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item class="w80" label="教室职务">
                <el-input v-model="ruleForm.ci_field"></el-input>
              </el-form-item>
              <el-form-item class="w80" label="擅长领域">
                <el-input v-model="ruleForm.ci_post"></el-input>
              </el-form-item>
              <el-form-item class="w80" label="详情介绍">
                <el-input type="textarea" rows="5" v-model="ruleForm.ci_introduce"></el-input>
              </el-form-item>
              
            </el-form>
          </div>
        </div>
      </div>

      <div class="dispatch-information-table border bg">
        <div class="box-title border-b">头像</div>
        <div class="dispatch-center-table">
          <div class="upload-img border">
            <img :src="logurl" alt />
          </div>
          <el-form style="margin-top: 40px;" label-width="40px" class="demo-ruleForm">
            <el-form-item>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
                :limit="1"
                v-model="logurl"
                :before-upload="handleUpload"
                :on-success="handleSuccess"
                :on-exceed="handleExceed"
                :on-remove="handleRemove"
              >
                <!-- <div class="border-upload"> -->
                <el-button class="el-primary" size="small" type="primary">选择文件</el-button>
                <!-- </div> -->
                <div slot="tip" class="el-upload__tip">
                  <i class="el-icon-warning"></i>允许的图片格式：jpg / gif / bmp / png
                </div>
              </el-upload>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="basic-content bg-w border">
      <div class="box-title border-b">个人介绍</div>
      <div class="basic-content-inner">
        <div>
          <div>
            <div class="edit_container">
              <quill-editor
                @blur="onEditorBlur($event)"
                v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
              ></quill-editor>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="upload border bg">
      <el-button type="primary" @click="open('ruleForm')" icon="el-icon-check">提交</el-button>
    </div>
  </div>
</template>

<script>
import imgUrl from "@/common/images/company/head.png";
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      content: "",
      editorOption: {
        /* quill options */
      },
      input: "",
      logurl: imgUrl,
      labelPosition: "left",
      ruleForm: {
        account: "",
        qq: "",
        name: "",
        phone: "",
        number: "",
        ci_field: "",
        ci_post: "",
        ci_introduce: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入真实姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }]
      }
    };
  },
  created() {
    this.seleUser();
  },
  methods: {
    open(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.content);
          let a = "";
          if (!this.content) {
            a = this.content;
          } else {
            a = this.content.replace(/<[^>]+>/g, "");
          }
          let consultationInioVO = {
            su_id: 34,
            account: this.ruleForm.account,
            realname: this.ruleForm.name,
            phonenumber: this.ruleForm.phone,
            ci_qq: this.ruleForm.qq,
            phonenumber: this.ruleForm.number,
            ci_field: this.ruleForm.ci_field,
            ci_post: this.ruleForm.ci_post,
            ci_introduce: this.ruleForm.ci_introduce,
            logurl: this.logurl,
            userconent: a
          };
          this.api.updConsultationInioBySuId(consultationInioVO).then(res => {
            console.log(res);
            if (res.code === 200) {
              this.$message({
                message: res.inio,
                type: "success"
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onEditorBlur(quill) {
      console.log("editor ready!", quill);
    },
    handleUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isLt2M) {
        this.$message.error("上传文件大小不能超过 10MB!");
      }
      return isLt2M;
    },
    handleRemove(file) {
      console.log(file);
      this.logurl = imgUrl;
    },
    handleSuccess(response, file) {
      console.log(file);
      console.log(response);
      this.logurl = URL.createObjectURL(file.raw);
    },
    handleExceed() {
      this.$message.error("最多只能上传一张图片");
    },
    seleUser() {
      let consultationInioVO = {
        su_id: 34
      };
      this.api.seleConsultationAccountByUserId(consultationInioVO).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.ruleForm.account = res.data.account;
          this.ruleForm.name = res.data.realname;
          this.ruleForm.phone = res.data.phonenumber;
          this.ruleForm.qq = res.data.ci_qq;
          this.ruleForm.email = res.data.email;
          this.ruleForm.number = res.data.phonenumber;
          this.ruleForm.ci_field = res.data.ci_field;
          this.ruleForm.ci_post = res.data.ci_post;
          this.ruleForm.ci_introduce = res.data.ci_introduce;
          if (res.data.logurl === 2) {
            this.logurl = res.data.logurl;
          } else {
            this.logurl = imgUrl;
          }
          this.content = res.data.userconent;
        }
      });
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
.upload-img {
  width: 400px;
  height: 400px;
  margin: 30px auto;
  text-align: center;
  border-radius: 4px;
  box-sizing: border-box;
}
.upload-img img {
  width: 99%;
  height: 100%;
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
.information {
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
.dispatch-information-table {
  width: 49%;
  display: flex;
  flex-direction: column;
}
.dispatch-table-content {
  padding: 50px 0;
}
.w-50 {
  width: 500px;
}
.information-heared {
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
