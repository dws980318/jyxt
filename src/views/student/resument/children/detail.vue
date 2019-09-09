<template>
  <div class="resument">
    <div class="resument-heared">
      <i class="el-icon-warning"></i>
      <span>更多精美简历</span>
      <span class="blue">face简历</span>
    </div>
    <div class="resument-steps bg border">
      <el-steps :active="1">
        <el-step title="创建简历 1" description="填写信息"></el-step>
        <el-step title="创建简历 2" description="求职意向"></el-step>
        <el-step title="创建简历 3" description="生成简历"></el-step>
      </el-steps>
    </div>
    <div class="dispatch-resument bg border">
      <div class="source-resument-hear border-b">简历信息</div>
      <div class="flex-between">
        <div class="dispatch-resument-table">
          <div class="dispatch-table-content">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item label="简历名称" prop="resumentname">
                <el-input v-model="ruleForm.resumentname"></el-input>
                <div class="explain-r">
                  <i class="el-icon-warning"></i> 简历名称不在网站显示，用于自己区分不同简历
                </div>
              </el-form-item>
              <el-form-item class="w-50" label="真实姓名" prop="name">
                <el-input v-model="ruleForm.name">
                  <el-select slot="append" class="w-20" v-model="ruleForm.time" placeholder="选择时间">
                    <el-option label="时间一" value="shanghai"></el-option>
                    <el-option label="时间二" value="beijing"></el-option>
                  </el-select>
                </el-input>
                <div class="explain">
                  <i class="el-icon-warning"></i> 显示在简历中的姓名
                </div>
              </el-form-item>
              <el-form-item label="专业" required>
                <el-input v-model="ruleForm.major" class="input-with-select">
                  <el-button slot="append" icon="el-icon-tickets"></el-button>
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </el-form-item>
              <el-form-item label="籍贯" required>
                <el-input v-model="ruleForm.native" class="input-with-select">
                  <el-button slot="append" icon="el-icon-tickets"></el-button>
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </el-form-item>
              <el-form-item label="现居住地区" required>
                <el-input v-model="ruleForm.adress" class="input-with-select">
                  <el-button slot="append" icon="el-icon-tickets"></el-button>
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </el-form-item>
              <el-form-item class="w-30" label="期望形式" prop="form">
                <el-input v-model="ruleForm.form"></el-input>
              </el-form-item>
              <el-form-item label="期望职位" required>
                <el-input v-model="ruleForm.position" class="input-with-select">
                  <el-button slot="append" icon="el-icon-tickets"></el-button>
                </el-input>
              </el-form-item>
              <el-form-item label="期望行业" required>
                <el-input v-model="ruleForm.industry" class="input-with-select">
                  <el-button slot="append" icon="el-icon-tickets"></el-button>
                </el-input>
              </el-form-item>
              <el-form-item label="期望地区" required>
                <el-input v-model="ruleForm.expectedarea" class="input-with-select">
                  <el-button slot="append" icon="el-icon-tickets"></el-button>
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </el-form-item>
              <el-form-item class="w-30" label="期望薪资" prop="money">
                <el-input v-model="ruleForm.money"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="dispatch-resument-table">
          <div class="dispatch-table-content">
            <el-form :model="ruleForm" ref="ruleForm" label-width="120px" class="demo-ruleForm">
              <el-form-item class="w-50" label="性别" prop="gender">
                <el-radio-group v-model="ruleForm.gender">
                  <el-radio label="1" value="1">男</el-radio>
                  <el-radio label="2" value="2">女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item class="w-50" label="出生年份" prop="birth">
                <el-date-picker
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.birth"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>

              <el-form-item class="w-50" label="学历" prop="education">
                <el-select v-model="ruleForm.education" placeholder="选择时间">
                  <el-option
                    v-for="item in Educations"
                    :key="item.id"
                    :label="item.educationBackground"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item class="w-50" label="婚姻状况" prop="Marriage">
                <el-select v-model="ruleForm.Marriage" placeholder="选择时间">
                  <el-option label="未婚" value="0"></el-option>
                  <el-option label="已婚" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item class="w-50" label="身高" prop="height">
                <el-input v-model="ruleForm.height">
                  <template slot="append">cm</template>
                </el-input>
              </el-form-item>
              <el-form-item class="w-50" label="工作经验" prop="work">
                <el-select v-model="ruleForm.work" placeholder="选择时间">
                  <el-option label="时间一" value="1"></el-option>
                  <el-option label="时间二" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item class="w-50" label="联系电话" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="联系QQ" prop="qq">
                <el-input v-model="ruleForm.qq"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="电子邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="接受面试邀请" prop="accept">
                <el-checkbox v-model="ruleForm.accept"></el-checkbox>
              </el-form-item>
              <el-form-item class="w-50" label="主页微博" prop="page1">
                <el-input v-model="ruleForm.page1"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="通信地址" prop="page2">
                <el-input v-model="ruleForm.page2"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div class="upload-res border bg">
      <el-button type="primary" @click="open" icon="el-icon-check">提交</el-button>
      <div class="cord">
        <el-input class="w-10" v-model="value1" placeholder="验证码"></el-input>
        <el-input class="w-10" v-model="value1" placeholder="1231313"></el-input>
        <span>看不清?点击更新</span>
      </div>
    </div>
    <!-- <div class="footer-all bg">
      <div>当前时间：2018年12月20日 10：20：31</div>
      <div>©  2015-2018 JOBSYS.CN</div>
    </div>-->
  </div>
</template>

<script>
import "../../../../common/css/student/style.css";
export default {
  data() {
    return {
      checked: true,
      value1: "",
      value2: "",
      value3: "",
      hide: false,
      imageUrl: "",
      labelPosition: "left",
      input4: "",
      input5: "",
      formLabelAlign: {
        name: "",
        number: ""
      },
      ruleForm: {
        resumentname: "",
        name: "",
        time: "",
        major: "",
        native: "",
        adress: "",
        form: "",
        position: "",
        industry: "",
        expectedarea: "",
        money: "",
        gender: "",
        birth: "",
        Marriage: "",
        education: "",
        phone: "",
        height: "",
        work: "",
        email: "",
        qq: "",
        page1: "",
        page2: "",
        accept: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      Educations: [],
      Nations: [],
      options3: []
    };
  },
  created() {
    this.getEducations();
    this.resumeInform();
  },
  methods: {
    resumeInform() {
      this.api.SeeResumeInform(this.$route.params.id).then(res => {
        console.log(res);
        this.ruleForm.resumentname = res.data.name;
        this.ruleForm.name = res.data.myName;
        this.ruleForm.major = res.data.ddsId;
        this.ruleForm.native = res.data.homePlace;
        this.ruleForm.adress = res.data.currentAddress;
        this.ruleForm.form = res.data.jobCategory;
        this.ruleForm.position = res.data.jobPosition;
        this.ruleForm.industry = res.data.hopeProfession;
        this.ruleForm.expectedarea = res.data.hopePlace;
        this.ruleForm.money = res.data.hopeEmolument;

        this.ruleForm.gender = res.data.sex;
        this.ruleForm.birth = res.data.bothDate;
        this.ruleForm.education = res.data.edId;
        this.ruleForm.Marriage = res.data.beMarried;
        if (this.ruleForm.Marriage === 0) {
          this.ruleForm.Marriage = "未婚";
        }
        this.ruleForm.height = res.data.height;
        this.ruleForm.work = res.data.workingYears;
        this.ruleForm.phone = res.data.mobilePhone;
        this.ruleForm.qq = res.data.qq;
        this.ruleForm.email = res.data.email;
        this.ruleForm.accept = res.data.acceptInvitation;
        this.ruleForm.email = res.data.email;
        this.ruleForm.page1 = res.data.bloPage;
        this.ruleForm.page2 = res.data.mailingAddress;
      });
    },
    open() {
      const fd = new FormData();
      fd.append("id", this.$route.params.id);
      fd.append("name", this.ruleForm.resumentname);
      fd.append("myName", this.ruleForm.name);
      // fd.append("ddsId", this.ruleForm.major);
      // fd.append("homePlace", this.ruleForm.native);
      // fd.append("currentAddress", this.ruleForm.adress);
      // fd.append("jobCategory", this.ruleForm.form);
      // fd.append("jobPosition", this.ruleForm.position);
      // fd.append("hopeProfession", this.ruleForm.industry);
      // fd.append("hopePlace", this.ruleForm.expectedarea);
      // fd.append("hopeEmolument", this.ruleForm.money);

      // fd.append("sex", this.ruleForm.gender);
      // fd.append("bothDate", this.ruleForm.birth);
      // fd.append("edId", this.ruleForm.education);
      // fd.append("beMarried", this.ruleForm.Marriage);
      // fd.append("height", this.ruleForm.height);
      // fd.append("workingYears", this.ruleForm.work);
      // fd.append("mobilePhone", this.ruleForm.phone);
      // fd.append("qq", this.ruleForm.qq);
      // fd.append("email", this.ruleForm.email);
      // fd.append("acceptInvitation", this.ruleForm.accept);
      // fd.append("bloPage", this.ruleForm.page1);
      // fd.append("mailingAddress", this.ruleForm.page2);
      console.log(this.ruleForm.resumentname);
      console.log(this.ruleForm.name);
      console.log(this.ruleForm.major);
      console.log(this.ruleForm.native);
      console.log(this.ruleForm.adress);
      console.log(this.ruleForm.form);
      console.log(this.ruleForm.position);
      console.log(this.ruleForm.industry);
      console.log(this.ruleForm.expectedarea);
      console.log(this.ruleForm.money);

      console.log(this.ruleForm.gender);
      console.log(this.ruleForm.birth);
      console.log(this.ruleForm.education);
      console.log(this.ruleForm.Marriage);
      console.log(this.ruleForm.height);
      console.log(this.ruleForm.work);
      console.log(this.ruleForm.phone);
      console.log(this.ruleForm.qq);
      console.log(this.ruleForm.email);
      console.log(this.ruleForm.accept);
      console.log(this.ruleForm.page1);
      console.log(this.ruleForm.page2);
      
      this.api
        .EditResumeInform(fd)
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            this.$message({
              message: "成功提交",
              type: "success"
            });
          }
        });
    },
    getEducations() {
      this.api.getEducations().then(res => {
        console.log(res);
        let newData = res.data.map(item => {
          return {
            educationBackground: item.educationBackground,
            id: item.id
          };
        });
        this.Educations = newData;
      });
    }
  }
};
</script>
<style scoped>
.margin-t,
.margin-f {
  width: 70px;
  height: 30px;
  overflow: hidden;
  border: 1px solid black;
  color: #fff;
  text-align: center;
  line-height: 30px;
  margin: 10px 0;
}
.margin-t {
  margin-top: 20px;
  background-color: orange;
}
.margin-f {
  background-color: orangered;
}
.cord {
  margin-left: 20px;
}
.resument-steps {
  padding: 30px;
  margin: 0 0 20px 0;
}
.blue {
  padding-left: 20px;
  color: dodgerblue;
  cursor: pointer;
}
.upload-btn {
  text-align: right;
}
.el-button--small {
  padding: 12px 15px;
}
.el-primary {
  border-left: 1px solid #888;
  color: #888;
  background-color: #fff;
  border-color: #fff;
  padding: 10px;
}
.upload-img {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  text-align: center;
}
.border-upload {
  width: 500px;
  text-align: left;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.el-upload {
  border: 1px dashed transparent;
}
.w-30 {
  width: 300px;
}
.w-20 {
  width: 200px;
}
.w-10 {
  width: 100px;
}
.w-60 {
  width: 600px;
}
.pad {
  padding: 0;
}
.el-input-group__append button.el-button {
  border: 1px solid #dedede;
}
.el-button + .el-button {
  margin-left: 20px;
}
.upload-res {
  margin: 20px 0;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 50px;
}
.comter {
  display: flex;
  justify-content: center;
  margin: 30px 0;
  text-align: center;
}
.imgurl {
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin: 0 auto;
}
.imgurl img {
  width: 100%;
}
.resument {
  padding: 20px;
}
.explain {
  font-size: 14px;
  color: #999;
}
.left {
  margin-left: 50px;
}
.flex-between {
  display: flex;
  justify-content: space-between;
}
.flex-around {
  display: flex;
  justify-content: space-around;
}
.flex {
  display: flex;
  width: 1000px;
}
.dispatch-resument-table {
  width: 48%;
}
.dispatch-table-content {
  padding: 50px 0;
}
.btn {
  color: dodgerblue;
  padding: 5px 10px;
}
.btn i {
  padding: 0 5px;
}
.flex-c {
  display: flex;
  justify-content: center;
  align-items: center;
}
.table-footer {
  border-top: 1px solid #999;
  width: 90%;
  margin: 0 auto;
  height: 100px;
}
.table-content {
  height: 100px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.w-50 {
  width: 500px;
}

.border {
  border: 1px solid #999;
}
.border-b {
  border-bottom: 1px solid #999;
}
.resument-heared {
  width: 100%;
  height: 50px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  color: #fff;
  margin-bottom: 20px;
  background-color: rgb(8, 189, 189);
}
.source-resument {
  width: 100%;
  margin: 20px 0;
}
.source-resument-hear {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
}
</style>
