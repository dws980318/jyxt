<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/subujest/protocol/unchecked">就业课程管理</el-breadcrumb-item>
        <el-breadcrumb-item>课程详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <div class="el-notification__title form_title">基本信息</div>
        <el-form :model="information" label-width="100px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="课程名称" prop="nickname">
            <p>{{information.nickname}}</p>
          </el-form-item>
          <el-form-item label="课程类型" prop="account">
            <p>{{information.account}}</p>
          </el-form-item>
          <el-form-item label="学分：" prop="password">
            <p>{{information.password}}</p>
          </el-form-item>
          <el-form-item label="总课时：" prop="name">
            <p>{{information.name}}</p>
          </el-form-item>
          <el-form-item label="课程教师：" prop="phone">
            <p>{{information.phone}}</p>
          </el-form-item>
          <el-form-item label="教师工号：" prop="qq">
            <p>{{information.qq}}</p>
          </el-form-item>
          <el-form-item label="课程介绍：" prop="email">
            <p>{{information.email}}</p>
          </el-form-item>
          <el-form-item label="其他说明" prop="fixedLine">
            <p>{{information.fixedLine}}</p>
          </el-form-item>
        </el-form>
      </div>
      <div class="form">
        <el-button size="small" @click="$router.back(-1)">返回</el-button>
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
      information: {}
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
        nickname: "大学生职业规划与创业教育",
        account: "必修课",
        password: "1.0分",
        name: "16学时（教学：8学时/实践：8学时）",
        phone: "柯婷",
        qq: "123450",
        email:
          "本课程是面向全校学生的公共基础必修课。课程主要讲授职业生涯理论，职业生涯规划概念、步骤、内容，大学生职业生涯规划的意义、特点、类型、方法等，引导大学生正确认识自己，了解职业、职业环境，合理定位，树立合理的择业目标，做好职业生涯设计，并与大学的专业学习、生活、工作结合起来，实施并反馈修改自己的职业生涯设计。课程还介绍大学生创业须具备的基本条件及如何准备创业，培养大学生创业精神，提高创业机会识别能力，为大学生成功创业提供基础指导。课程还设置了一定的实践学时，让学生通过合理使用测评工具、参加校内各类就业实践活动等方式加深对教学内容的理解掌握。课程目的是引导在校生制定一份可行的职业生涯设计，有计划地度过大学生涯，为职业发展奠定良好的基础。",
        fixedLine: "--"
      };
    }
  }
};
</script>

<style scoped>
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
