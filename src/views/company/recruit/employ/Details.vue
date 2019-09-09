<template>
  <el-col :span="24">
    <div class="information">
      <div class="form">
        <div class="el-notification__title form_title">职位信息</div>
        <el-form :model="information" label-width="100px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item label="职位名称：" prop="name">
            <p>{{information.name}}</p>
          </el-form-item>
          <el-form-item label="工作地区：" prop="area">
            <p>{{information.area}}</p>
          </el-form-item>
          <el-form-item label="薪资范围：" prop="payment">
            <p>{{information.payment}}</p>
          </el-form-item>
          <el-form-item label="学历要求：" prop="education">
            <p>{{information.education}}</p>
          </el-form-item>
          <el-form-item label="专业方向：" prop="major">
            <p>{{information.major}}</p>
          </el-form-item>
          <el-form-item label="工作性质：" prop="nature">
            <p>{{nature}}</p>
          </el-form-item>
        </el-form>
      </div>
      <div class="form">
        <div class="el-notification__title form_title">学生信息</div>
        <el-form :model="student" label-width="100px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item label="姓名：" prop="name">
            <p>{{student.name}}</p>
          </el-form-item>
          <el-form-item label="性别：" prop="sex">
            <p>{{sex}}</p>
          </el-form-item>
          <el-form-item label="出生日期：" prop="brithday">
            <p>{{student.brithday}}</p>
          </el-form-item>
          <el-form-item label="手机号码：" prop="phone">
            <p>{{student.phone}}</p>
          </el-form-item>
          <el-form-item label="邮箱：" prop="email">
            <p>{{student.email}}</p>
          </el-form-item>
          <el-form-item label="个人简介：" prop="content">
            <p>{{student.content?information.content:'什么都没写'}}</p>
          </el-form-item>
        </el-form>
      </div>
      <div class="form">
        <div class="el-notification__title form_title">应聘信息</div>
        <el-form :model="position" label-width="100px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item label="邀请状态：" prop="checked">
            <el-button size="mini" type="success" @click="handleEdit">邀请面试</el-button>
            <!-- <el-button size="mini" type="danger" @click="handleDelete">拒绝面试</el-button> -->
            <el-button size="mini" type="primary" @click="handleCollection">收藏简历</el-button>
            <el-button size="mini" type="info" @click="handleDownload">下载简历</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="form">
        <el-form :model="information" label-width="100px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item size="large">
            <el-button size="small" @click="$router.back(-1)">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      textareaSize: { minRows: 3, maxRows: 10 },
      information: {
        company: "广州XXXX公司",
        name: "XXXXX",
        area: "广州市天河区",
        payment: "5k-8k",
        education: "大专",
        major: "计算机",
        nature: 1,
        content: "123123"
      },
      student: {
        name: "溜得滑",
        sex: 1,
        brithday: "2000-12-20",
        phone: "13579246810",
        email: "123456789@qq.com",
        content: "这是学生的个人简介"
      },
      position: {
        checked: true,
        open: true,
        content: "这个人很符合要求"
      }
    };
  },
  computed: {
    nature() {
      let val = "";
      val = this.information.nature === 1 ? "全职" : val;
      val = this.information.nature === 2 ? "兼职" : val;
      return val;
    },
    sex() {
      let val = "";
      val = this.student.sex === 1 ? "男" : val;
      val = this.student.sex === 2 ? "女" : val;
      return val;
    }
  },
  created() {
    this.port = this.$route.params.port;
    if (this.$route.params.id) {
      this.loadObject(this.$route.params.id);
    }
    // if (this.$route.params.id) {
    //   this.handleEdit();
    // }
  },
  methods: {
    handleEdit() {
      let interviewInvitation = {
        si_id: this.$route.params.id,
        coi_id: 1,
        pr_id: this.$route.params.pr_id
      };
      this.api.addInterviewInvitation(interviewInvitation).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.$message.success(res.inio);
        }
      });
    },
    handleCollection() {
      let resumeCollection = {
        sr_id: this.$route.params.id,
        coi_id: 1
      };
      this.api.addResumeCollectionById(resumeCollection).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.$message.success(res.inio);
        }
      });
    },
    handleDownload() {
       let resumeDelivery	 = {
        sr_id: this.$route.params.id,
        // coi_id: 1
      };
      this.api.updResumeDeliveryByDownload(resumeDelivery	).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.$message.success(res.inio);
        }
      });
    },
    loadObject(portId) {
      this.information.id = portId;
    },
    onSubmit() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.el-notification__title {
  font-weight: 700;
  font-size: 16px;
  color: #303133;
  margin: 0;
  padding: 0px 10px 30px 10px;
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
