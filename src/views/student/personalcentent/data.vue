<template>
  <div class="information">
    <div class="information-heared">
      <div class="heared-title">
        <i class="el-icon-warning"></i>请完善本账号相关信息。
      </div>
    </div>
    <div class="dispatch-information flex-bet">
      <div class="dispatch-information-table border bg">
        <div class="box-title border-b">基本信息</div>
        <div class="dispatch-table-content">
          <el-form :model="ruleForm" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item class="w80" label="账号">
              <el-input v-model="ruleForm.account"></el-input>
            </el-form-item>
            <el-form-item class="w80" label="真实姓名">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item class="w80" label="手机">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item class="w80" label="QQ">
              <el-input v-model="ruleForm.qq"></el-input>
            </el-form-item>
            <el-form-item class="w80" label="联系电话">
              <el-input v-model="ruleForm.number"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="dispatch-information-table border bg">
        <div class="box-title border-b">头像</div>
        <div class="dispatch-center-table">
          <div class="upload-img border">
            <img src="~@/common/images/company/head.png" alt />
          </div>
          <el-form :model="ruleForm" ref="ruleForm" label-width="40px" class="demo-ruleForm">
            <el-form-item>
              <el-upload
                class="upload-demo"
                action
                multiple
                list-type= "picture"
                :before-upload = "upload"
                :limit="1"
              >
                <div class="border-upload">
                  <el-button class="el-primary" size="small" type="primary">选择文件</el-button>
                </div>
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
      <div class="box-title border-b">自我简介</div>
      <div class="basic-content-inner">
        <div>
          <div>
            <div class="edit_container">
              <quill-editor
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
      <el-button type="primary" @click="submission" icon="el-icon-check">提交</el-button>
    </div>
  </div>
</template>

<script>
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
      hearimg:"",
      input: "",
      labelPosition: "left",
      ruleForm: {
        account: "",
        name: "",
        phone: "",
        qq: "",
        number: ""
        
      }
      // rules: {
      //   account: [
      //     { required: true, message: "请输入账号", trigger: "blur" },
      //   ],
      //   name: [
      //     { required: true, message: "请输入名字", trigger: "blur" },
      //   ],
      //   qq: [
      //     { required: true, message: "请输入qq", trigger: "blur" },
      //   ],
      //   phone: [
      //     { required: true, message: "请输邮件", trigger: "blur" },
      //   ],
      //   number: [
      //     { required: true, message: "请输入号码", trigger: "blur" },
      //   ],
      // }
    };
  },
  methods: {
    upload(file, fileList){
      console.log(file);
      this.hearimg = file;
      console.log(this.hearimg);
    },
    submission() {
      const fd = new FormData();
      fd.append("account",this.ruleForm.account),
      fd.append("name",this.ruleForm.name),
      fd.append("phone",this.ruleForm.phone),
      fd.append("qq",this.ruleForm.qq),
      fd.append("id",1),
      fd.append("other_Phone",this.ruleForm.number),
      fd.append("self_Introduction",this.content),
      fd.append("pluralPicture",this.hearimg),
      this.api.user(fd)
        .then(response => {
          console.log(response);
          if (res.status === 200) {
            this.$message({
              showClose: true,
              message: "这是一条成功消息",
              type: "success"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
      // this.$message({
      //   message: "成功提交",
      //   type: "success"
      // });
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
  width: 250px;
  height: 250px;
  margin: 30px auto;
  text-align: center;
}
.upload-img img {
  width: 100%;
}
.border-upload {
  width: 400px;
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
