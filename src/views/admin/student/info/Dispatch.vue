<template>
  <div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/student/info/list">学生信息管理</el-breadcrumb-item>
        <el-breadcrumb-item>派遣信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="el-notification__title form_title">具体派遣信息</div>
      <el-form ref="form" :model="form" label-width="120px">
        <div>
          <el-form-item label="派遣状态：" prop="dispatch_status">
            <p>{{form.dispatch_status}}</p>
          </el-form-item>
          <el-form-item label="派遣性质：" prop="dispatch_type">
            <p>{{form.dispatch_type}}</p>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="主管单位：" prop="competent">
            <p>{{form.competent}}</p>
          </el-form-item>
          <el-form-item label="具体派遣单位：" prop="dispatch_company">
            <p>{{form.dispatch_company}}</p>
          </el-form-item>
        </div>
        <el-form-item label="派遣地区：" prop="dispatch_area">
          <p>{{form.dispatch_area}}</p>
        </el-form-item>
      </el-form>

      <div class="el-notification__title form_title">档案接收信息</div>
      <el-form ref="form" :model="form" label-width="140px">
        <div>
          <el-form-item label="档案接收单位名称：" prop="file_receive_company">
            <p>{{form.file_receive_company}}</p>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="档案接收单位地址：" prop="file_receive_address">
            <p>{{form.file_receive_address}}</p>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="接收单位邮编：" prop="file_receive_postal">
            <p>{{form.file_receive_postal}}</p>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="档案接收部门：" prop="file_receive_department">
            <p>{{form.file_receive_department}}</p>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="联系电话：" prop="contact_number">
            <p>{{form.contact_number}}</p>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="入户地址：" prop="registered_address">
            <p>{{form.registered_address}}</p>
          </el-form-item>
        </div>
      </el-form>

      <div class="el-notification__title form_title">其他信息</div>
      <el-form ref="form" :model="form" label-width="120px">
        <div>
          <el-form-item label="说明：" prop="explain">
            <p>{{form.explain}}</p>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="报到证号：" prop="register_number">
            <p>{{form.register_number}}</p>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="暂缓就业号：" prop="job_number">
            <p>{{form.job_number}}</p>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="派遣时间：" prop="dispatch_time">
            <p>{{form.dispatch_time}}</p>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="学校审核时间：" prop="checked_time">
            <p>{{form.checked_time}}</p>
          </el-form-item>
        </div>
      </el-form>

      <div class="el-notification__title form_title">接收函</div>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="文件：" prop="file">
          <a href="#" class="a">标题.zip</a>
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
        dispatch_status: "确定派遣回生源地",
        dispatch_type: "正常派遣",
        competent: "中共广东省委组织部",
        dispatch_company: "-",
        dispatch_area: "广州市天河区",
        file_receive_company: "-",
        file_receive_address: "-",
        file_receive_postal: "-",
        file_receive_department: "-",
        contact_number: "-",
        registered_address: "-",
        explain: "-",
        register_number: "-",
        job_number: "-",
        dispatch_time: "-",
        checked_time: "-",
        file: ""
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
.form_title {
  padding: 5px 10px;
  width: 1200px;
  margin: 20px 0;
  background-color: #f2f2f2;
}
.information {
  width: 880px;
  height: auto;
  padding: 0 10px 20px 10px;
}

.el-form {
  width: 1200px;
  padding: 10px 20px;
}
.big_one {
  width: 1200px;
}
.el-form-item {
  display: inline-block;
  margin-right: 120px;
}
.information .el-input {
  width: 300px;
}
.information p {
  width: 250px;
}
</style>
