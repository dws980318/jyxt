<template>
  <div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/student/info/list">学生信息管理</el-breadcrumb-item>
        <el-breadcrumb-item>档案信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="el-notification__title form_title">具体就业信息</div>
      <el-form ref="form" :model="form" label-width="140px">
        <el-form-item label="协议书编号：" prop="protocol_number">
          <p>{{form.protocol_number}}</p>
        </el-form-item>
        <el-form-item label="就业状态：" prop="job_status">
          <p>{{form.job_status}}</p>
        </el-form-item>
        <el-form-item label="就业性质：" prop="job_type">
          <p>{{form.job_type}}</p>
        </el-form-item>
        <el-form-item label="实际就业单位全称：" prop="company_name">
          <p>{{form.company_name}}</p>
        </el-form-item>
        <el-form-item label="统一社会信用代码：" prop="social_code">
          <p>{{form.social_code}}</p>
        </el-form-item>
        <el-form-item label="岗位名称：" prop="job_name">
          <p>{{form.job_name}}</p>
        </el-form-item>
        <el-form-item label="实际薪酬：" prop="payment">
          <p>{{form.payment}}</p>
        </el-form-item>
        <el-form-item label="所属行业：" prop="trade_type">
          <p>{{form.trade_type}}</p>
        </el-form-item>
        <el-form-item label="所属地区：" prop="trade_area">
          <p>{{form.trade_area}}</p>
        </el-form-item>
        <el-form-item label="岗位类型：" prop="post_type">
          <p>{{form.post_type}}</p>
        </el-form-item>
        <el-form-item label="工作内容类型：" prop="content_type">
          <p>{{form.content_type}}</p>
        </el-form-item>
      </el-form>

      <div class="el-notification__title form_title">单位联系信息</div>
      <el-form ref="form" :model="form" label-width="140px">
        <el-form-item label="单位联系人：" prop="contacts">
          <p>{{form.contacts}}</p>
        </el-form-item>
        <el-form-item label="联系人电话：" prop="contacts_number">
          <p>{{form.contacts_number}}</p>
        </el-form-item>
        <el-form-item label="联系人邮箱：" prop="contacts_email">
          <p>{{form.contacts_email}}</p>
        </el-form-item>
        <el-form-item label="邮箱类型：" prop="email_type">
          <p>{{form.email_type}}</p>
        </el-form-item>
        <el-form-item label="单位传真：" prop="fax">
          <p>{{form.fax}}</p>
        </el-form-item>
        <el-form-item label="详细地址：" prop="address">
          <p>{{form.address}}</p>
        </el-form-item>
        <el-form-item label="上报时间：" prop="upload_time">
          <p>{{form.upload_time}}</p>
        </el-form-item>
        <el-form-item label="院系审核时间：" prop="checked_time">
          <p>{{form.checked_time}}</p>
        </el-form-item>
        <el-form-item label="学校审核时间：" prop="school_checked_time">
          <p>{{form.school_checked_time}}</p>
        </el-form-item>
      </el-form>

      <div class="el-notification__title form_title">其他信息</div>
      <el-form ref="form" :model="form" label-width="140px">
        <el-form-item label="专业相关度：" prop="pertinence">
          <p>{{form.pertinence}}</p>
        </el-form-item>
        <el-form-item label="未就业原因：" prop="reason">
          <p>{{form.reason}}</p>
        </el-form-item>
        <el-form-item label="说　明：" prop="explain">
          <p>{{form.explain}}</p>
        </el-form-item>
      </el-form>

      <div class="el-notification__title form_title">就业协议书或劳动合同</div>
      <el-form ref="form" :model="form" label-width="140px">
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
        protocol_number: "确定派遣回生源地",
        job_status: "-",
        job_type: "-",
        company_name: "-",
        social_code: "-",
        job_name: "-",
        payment: "-",
        trade_type: "-",
        trade_area: "-",
        post_type: "-",
        content_type: "-",
        contacts: "-",
        contacts_number: "-",
        contacts_email: "-",
        email_type: "-",
        fax: "-",
        address: "-",
        upload_time: "-",
        checked_time: "-",
        school_checked_time: "-",
        pertinence: "-",
        reason: "-",
        explain: "-"
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
.information .el-input {
  width: 300px;
}
.information p {
  width: 250px;
}
</style>
