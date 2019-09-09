<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/company/info">协议书审核<i class="el-icon-arrow-right">已审核</i></el-breadcrumb-item>
        <el-breadcrumb-item>申请信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <el-form :model="information" label-width="120px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="协议书编号：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="申请类型：" prop="name">
            <p>{{information.name}}</p>
          </el-form-item>
          <el-form-item label="申请原因：" prop="abbr">
            <p>{{information.abbr}}</p>
          </el-form-item>
          <el-form-item label="单位全称：" prop="creatTime">
            <p>{{information.creatTime}}</p>
          </el-form-item>
          <el-form-item label="获得途径：" prop="nature">
            <p>{{information.nature}}</p>
          </el-form-item>
          <el-form-item label="所属地区：" prop="industry">
            <p>{{information.industry}}</p>
          </el-form-item>
          <el-form-item label="单位联系人：" prop="fund">
            <p>{{information.fund}}万</p>
          </el-form-item>
          <el-form-item label="联系电话：" prop="scale">
            <p>{{information.scale}}</p>
          </el-form-item>
          <el-form-item label="联系邮箱：" prop="people">
            <p>{{information.people}}</p>
          </el-form-item>
          <el-form-item label="聘用岗位名称：" prop="slogan">
            <p>{{information.slogan}}元/月</p>
          </el-form-item>
          <el-form-item label="专业对口：" prop="linkman">
            <p>{{information.linkman}}</p>
          </el-form-item>
          <el-form-item label="单位传真：" prop="linkphone">
            <p>{{information.linkphone}}</p>
          </el-form-item>
          <el-form-item label="其他说明：" prop="email">
            <p>{{information.email}}</p>
          </el-form-item>
          <el-form-item label="录聘通知书：" prop="fax">
            <p>{{information.fax}}</p>
          </el-form-item>
          <el-form-item label="解约证明：" prop="otherphone">
            <p>{{information.otherphone}}</p>
          </el-form-item>
          <div style="width:1000px;border-top:1px solid #ccc">
            <div style="width:50%;height:160px;" class="toCheck">
              <p>
                <span>审核协议书：</span>
                <el-radio v-model="radio" label="1">通过</el-radio>
                <el-radio v-model="radio" label="2">不通过</el-radio>
              </p>
              <p>
                <span>原因备注：</span>
                <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input>
              </p>
            </div>
          </div>
        </el-form>
      </div>

      <div class="form">
        <el-button class="back" size="small" @click="$router.back(-1)">返回</el-button>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      information: {},
      register: {},
      invoice: {}
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
        id: 1,
        name: "广州XXXX公司",
        abbr: "XXXX",
        creatTime: "2019-04-15 10:00",
        nature: "国企",
        industry: "计算机",
        fund: "500",
        scale: "500-1000人",
        slogan: "以人为本",
        linkman: "溜得滑",
        linkphone: "13579246810",
        email: "123456789@qq.com",
        fax: "020-12345678",
        otherphone: "8208208820",
        website: "www.xxxx.com",
        area: "广州市天河区",
        address: "广州市天河区XXXXXXXXXXX",
        survey:
          "这是这个国企的简介，我也不知道介绍什么，反正就感觉很叼的样子，导致我就是想写长一点，长到多长我也不知道，反正大概可能就是长到能够换行吧",
        people: "100-499人"
      };
      this.register = {
        number: "98102045646213216545",
        creatTime: "2019-04-15 10:00",
        img:
          "http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png"
      };
      this.invoice = {
        header: "广州XXXX公司",
        identify: "946546513164",
        address: "广州XXXXXX",
        bank: "广州XX银行",
        company_type: "-",
        account: "465453123164684654"
      };
    },
    onSubmit() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.back {
  width: 80px;
  height: 38px;
  color: #23c6c8;
  background-color: #fff;
  border: 1px solid #23c6c8;
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
.toCheck p span {
  width: 100px;
  font-size: 14px;
}
</style>
<style>
.toCheck .el-dialog__title {
  font-size: 16px;
}
.toCheck .el-dialog__body {
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 20px;
}
.toCheck p {
  margin-top: 20px;
  display: flex;
  height: 28px;
  line-height: 28px;
}
.toCheck p .el-radio {
  line-height: 26px;
}
.toCheck .el-button:nth-of-type(1) {
  color: #23c6c8;
  border: 1px solid #23c6c8;
}
</style>
