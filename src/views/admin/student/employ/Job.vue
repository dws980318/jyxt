<template>
  <div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/student/employ/list">学生应聘管理</el-breadcrumb-item>
        <el-breadcrumb-item>岗位详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="职位名称：" prop="job_name">
          <p>{{form.job_name}}</p>
        </el-form-item>
        <el-form-item label="人数：" prop="people">
          <p>{{form.people}}</p>
        </el-form-item>
        <el-form-item label="学历：" prop="education">
          <p>{{form.education}}</p>
        </el-form-item>
        <el-form-item label="薪资范围：" prop="pay">
          <p>{{form.pay}}</p>
        </el-form-item>
        <el-form-item label="职位诱惑：" prop="welfare">
          <p>{{form.welfare}}</p>
        </el-form-item>
        <el-form-item label="职位描述：" prop="describe">
              <div v-html="form.describe"></div>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-button class="back" @click="$router.back(-1)">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        job_name: "工艺助理工程",
        people: "不限",
        education: "本科生",
        pay: "4000~5000元",
        welfare: "五险一金,包食宿,管理规范,晋升快,技术培训",
        describe: '<ul><li>1、设计可行的产品制作方案；</li><li>2、贴近生产，对设计的工艺方案进行跟踪指导；</li><li>3、贴近生产，设计可行方便高效的工装工具；</li><li>4、负责编制、修订产品作业指导书、实时有效；</li><li>5、负责工艺培训，监督工艺文件的实施；</li><li>6、协助工程师完成项目。</li></ul>',
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
.back {
  width: 80px;
  height: 38px;
  color: #23c6c8;
  background-color: #fff;
  border: 1px solid #23c6c8;
  margin-bottom: 100px;
}
.a {
  color: #23c6c8;
}
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
.information {
  width: 880px;
  height: auto;
  padding: 0 10px 20px 10px;
}

.el-form {
  width: 1200px;
  padding: 10px 20px;
  margin-top: 40px;
}
</style>
