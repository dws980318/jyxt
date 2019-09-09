<template>
  <div id="resume">
    <div class="personal-resume bg">
      <div class="resume-title border-b flex-b">
        <div>个人简历</div>
      </div>
      <div class="resume-table">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item class="w-60" label="标题">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-date-picker
              v-model="form.startTime"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-date-picker
              v-model="form.endTime"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="选择日期时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="履历内容">
            <template>
              <div class="edit_container">
                <quill-editor
                  v-model="content"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @change="onEditorChange($event)"
                ></quill-editor>
              </div>
            </template>
          </el-form-item>
          <el-form-item label="附件">
            <el-upload class="upload-demo" action multiple :before-upload="upload" :limit="3">
              <div class="border">
                <el-button size="small" type="primary">选择文件</el-button>
              </div>
              <div slot="tip" class="el-upload__tip">
                <i class="el-icon-warning"></i>大小：20M
              </div>
            </el-upload>
          </el-form-item>
        </el-form>
        <div class="upload-btn">
          <el-button type="success" @click="addresume" class="el-icon-check">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../../common/css/student/style.css";
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
      file: "",
      content: "",
      editorOption: {
        /* quill options */
      },
      desc: "",
      value1: "",
      value2: "",
      form: {
        name: "",
        startTime: "",
        endTime: ""
      },
      input: "",
      input5: ""
    };
  },
  created() {
    if (this.$route.params.id) {
      this.watch();
    }
  },
  methods: {
    watch() {
      this.api
        .watch(this.$route.params.id)
        .then(res => {
          console.log(res);
          const data = res.data;
          this.form.name = data.title;
          this.form.startTime = data.createTime;
          this.form.endTime = data.endTime;
          this.content = data.content;
        })
        .catch(err => {
          console.log(err);
        });
    },
    upload(file, fileList) {
      console.log(file);
      this.file = file;
      console.log(this.hearimg);
    },
    addresume() {
      if (this.$route.params.id) {
        let edit = new FormData();
        edit.append("id", this.$route.params.id),
          edit.append("title", this.form.name),
          edit.append("startTime", this.form.startTime),
          edit.append("endTime", this.form.endTime),
          edit.append("content", this.content),
          edit.append("recordFile", this.file),
          this.api
            .edit(edit)
            .then(res => {
              console.log(res);
              if (res.status === 200) {
                this.$message({
                  message: "恭喜你，这是一条成功消息",
                  type: "success"
                });
                this.$router.go(-1);
              }
            })
            .catch(err => {
              console.log(err);
            });
      } else {
        let resume = new FormData();
        resume.append("userid", 2),
          resume.append("title", this.form.name),
          resume.append("startTime", this.form.startTime),
          resume.append("endTime", this.form.endTime),
          resume.append("content", this.content),
          resume.append("recordFile", this.file),
          this.api
            .addresume(resume)
            .then(res => {
              console.log(res);
              if (res.status === 200) {
                this.$message({
                  message: "恭喜你，这是一条成功消息",
                  type: "success"
                });
                this.$router.go(-1);
              }
            })
            .catch(err => {
              console.log(err);
            });
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    find() {
      this.hide = true;
    },
    back() {
      this.hide = false;
    },
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {} // 内容改变事件
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
};
</script>

<style scoped>
.resume-table {
  padding-top: 30px;
}
.upload-btn {
  text-align: right;
}
.el-button--small {
  padding: 12px 15px;
}
.el-button--primary {
  border-left: 1px solid #888;
  color: #888;
  background-color: #fff;
  border-color: #fff;
  padding: 10px;
}
.el-upload {
  border: 1px dashed transparent;
}
.border {
  width: 500px;
  text-align: left;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.footer-all {
  position: absolute;
  bottom: 0;
  width: 97%;
  margin: 0 auto;
  height: 50px;
  margin-top: 30px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.w-100 {
  width: 1000px;
}
.w-60 {
  width: 800px;
}
.w-50 {
  width: 500px;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 300px;
}
.block {
  width: 600px;
  margin: 30px auto;
  text-align: center;
}
.resumelist-content {
  padding: 20px 10px;
}
.resume-table {
  width: 95%;
  margin: 0 auto;
}
.resumelist {
  margin-top: 20px;
  display: flex;
}
.resumelist li {
  width: 20%;
  line-height: 40px;
}
.w-30 {
  width: 300px;
}
.border-b {
  border-bottom: 1px solid #999;
}
.flex-b {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.personal-resume {
  margin: 30px 0;
  padding: 20px;
  border: 1px solid #999;
}
.resume-title {
  width: 100%;
  height: 50px;
  padding: 0 30px;
}
#resume {
  padding: 20px 20px 0 20px;
}
.information-heared {
  display: flex;
}
</style>
