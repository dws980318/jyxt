<template>
  <el-col :span="24">
    <div class="information">
      <div class="form">
        <el-form :model="information" label-width="100px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="企业名称：" prop="company">
            <!-- <p>{{information.company}}</p> -->
            <el-input v-model="information.company" placeholder="请输入企业名称"></el-input>
          </el-form-item>
          <el-form-item label="职位名称：" prop="name">
            <el-input v-model="information.name" placeholder="请输入职位名称"></el-input>
          </el-form-item>
          <el-form-item label="工作地区：" prop="area">
            <el-input v-model="information.area" placeholder="请输入工作地区"></el-input>
          </el-form-item>
          <el-form-item label="薪资范围：" prop="payment">
            <el-input type="text" v-model="information.payment" placeholder="请输入薪资范围"></el-input>
          </el-form-item>
          <el-form-item label="学历要求：" prop="education">
            <el-input v-model="information.education" placeholder="请输入学历要求"></el-input>
          </el-form-item>
          <el-form-item label="专业方向：" prop="major">
            <el-input v-model="information.major" placeholder="请输入专业方向"></el-input>
          </el-form-item>
          <el-form-item label="工作性质：" prop="nature">
            <el-select v-model="information.nature" placeholder="请选择工作性质">
              <el-option v-for="item in filter" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="职位详情：" prop="content">
            <tinymce-editor v-model="information.content" ref="editor"></tinymce-editor>
          </el-form-item>
          <el-form-item size="large">
            <el-button size="small" type="primary" @click="onSubmit('ruleForm')">提交</el-button>
            <el-button size="small" @click="$router.back(-1)">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-col>
</template>

<script>
import TinymceEditor from "@/components/tinymce-editor";
export default {
  name: "Details",
  components: {
    TinymceEditor
  },
  data() {
    return {
      filter: [
        {
          id: 1,
          name: "就业讲堂"
        }
      ],
      information: {
        company: "",
        name: "",
        area: "",
        payment: "",
        education: "",
        major: "",
        nature: "",
        content: ""
      }
    };
  },
  watch: {},
  created() {
    if (this.$route.params.id) {
      this.handleEdit();
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.information.image = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    onSubmit(formName) {
      //修改职位接口
      if (this.$route.params.id) {
        let positionRecruit = {
          id: this.$route.params.id,
          pr_name: this.information.name,
          pr_salary: this.information.payment,
          pr_education: this.information.education,
          pr_describe: this.information.nature,
          pr_welfare: this.information.major,
          coi_id: 4002
        };
        this.api.updPositionRecruitById(positionRecruit).then(res => {
          console.log(res);
          if (res.code === 200) {
            this.$message({
              message: res.inio,
              type: "success"
            });
            this.$router.push({ path: "/recruit/position" });
          }
        });
      } else {
        //发布新职位接口
        let positionRecruit = {
          pr_name: this.information.name,
          pr_salary: this.information.payment,
          pr_education: this.information.education,
          pr_describe: this.information.nature,
          pr_welfare: this.information.major
        };
        this.api.insertPositionRecruit(positionRecruit).then(res => {
          console.log(res);
          if (res.code === 200) {
            this.$message.success(res.inio);
            this.$refs[formName].resetFields();
            this.$router.push({ path: "/recruit/position" });
          }
        });
      }
    },
    handleEdit() {
      let positionRecruit = {
        id: this.$route.params.id
      };
      this.api.selePositionRecruitById(positionRecruit).then(res => {
        console.log(res);
        if (res.code === 200) {
          (this.information.company = res.data.pr_amount),
            (this.information.name = res.data.pr_name),
            (this.information.area = res.data.areainfoId),
            (this.information.payment = res.data.pr_salary),
            (this.information.education = res.data.pr_education),
            (this.information.major = res.data.pr_welfare),
            (this.information.nature = Number(res.data.pr_describe));
          this.information.content = res.data.pr_welfare;
        }
      });
    }
  }
};
</script>

<style scoped>
.breadcrumb {
  position: relative;
  width: 100%;
  height: 45px;
  padding-top: 10px;
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
.to_back {
  cursor: pointer;
  font-size: 14px;
  color: #0d8e52;
  line-height: 35px;
}
.information {
  width: 880px;
  height: auto;
  padding: 20px 10px;
}
.form {
  width: 100%;
  height: auto;
  padding: 10px 0;
}
.el-upload {
  border: 1px dashed #000;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 270px;
  height: 180px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 270px;
  height: 180px;
  display: block;
}
</style>
