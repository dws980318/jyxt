<template>
  <!-- 核实就业信息 -->
  <div class="employment">
    <div class="employment-heared">
      <i class="el-icon-warning"></i>
      <span>请认真填写就业信息。就业情况状态如选择“待就业”或”暂不就业“，同时就业性质选择”不列入就业率统计“下属项时，其他内容可以为空。</span>
    </div>
    <div class="dispatch-employment border-tran flex-between">
      <div class="dispatch-employment-table border bg">
        <div class="source-employment-hear border-b">具体就业信息</div>
        <div class="dispatch-table-content">
          <el-form :model="ruleForm" ref="ruleForm" label-width="140px" class="demo-ruleForm">
            <el-form-item class="w-50" label="协议书编号" prop="number">
              <el-input v-model="ruleForm.number"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="就业状态" prop="state">
              <el-input v-model="ruleForm.state"></el-input>
            </el-form-item>

            <el-form-item class="w-60" label="就业性质" prop="nature">
              <el-input v-model="ruleForm.nature" class="input-with-select">
                <el-button slot="append" icon="el-icon-tickets"></el-button>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item class="w-60" label="实际就业单位全称" prop="name">
              <el-input v-model="ruleForm.name">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
              <div class="explain">
                <i class="el-icon-warning"></i> 请填写实际就业单位名称
              </div>
            </el-form-item>
            <el-form-item class="w-60" label="统一社会信用代码" prop="credit">
              <el-input v-model="ruleForm.credit" class="input-with-select">
                <el-button slot="append" icon="el-icon-tickets"></el-button>
                <el-button slot="append" icon="el-icon-search"></el-button>
                <el-button slot="append" icon="el-icon-tickets"></el-button>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
              <div class="explain">
                <i class="el-icon-warning"></i> 9位、19位、18位数字字母组成，不含“-”
              </div>
            </el-form-item>
            <el-form-item class="w-50" label="岗位全称" prop="companyname">
              <el-input v-model="ruleForm.companyname"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="实际薪酬" prop="Pay">
              <el-input v-model="ruleForm.Pay">
                <template slot="append">元/月</template>
              </el-input>
            </el-form-item>
            <el-form-item class="w-60" label="所属行业" prop="industry">
              <el-input v-model="ruleForm.industry" class="input-with-select">
                <el-button slot="append" icon="el-icon-tickets"></el-button>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item class="w-60" label="所属地区" prop="adress">
              <el-input v-model="ruleForm.adress" class="input-with-select">
                <el-button slot="append" icon="el-icon-tickets"></el-button>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item class="w-60" label="岗位类型" prop="post">
              <el-input v-model="ruleForm.post" class="input-with-select">
                <el-button slot="append" icon="el-icon-tickets"></el-button>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item class="w-50" label="工作内容类型" prop="work">
              <el-select v-model="ruleForm.work" placeholder="选择">
                <el-option label="时间一" value="shanghai"></el-option>
                <el-option label="时间二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="dispatch-employment-table">
        <div class="dispatch-right-top border bg">
          <div class="source-employment-hear border-b">单位联系信息</div>
          <div class="dispatch-table-content dispatch-left bg">
            <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
              <el-form-item class="w-50" label="单位联系人" prop="contacts">
                <el-input v-model="ruleForm.contacts"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="联系人电话" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="联系人邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item label="邮箱类型" prop="mailbox">
                <el-radio-group v-model="ruleForm.mailbox">
                  <el-radio label="联系人文件"></el-radio>
                  <el-radio label="单位公共邮件"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item class="w-50" label="单位传真" prop="fax">
                <el-input v-model="ruleForm.fax"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="详细地址" prop="detailed">
                <el-input v-model="ruleForm.detailed"></el-input>
              </el-form-item>
              <el-form-item label="上报时间">
                <el-date-picker v-model="ruleForm.time1" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间"></el-date-picker>
              </el-form-item>
              <el-form-item label="开始时间">
                <el-date-picker v-model="ruleForm.time2" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间"></el-date-picker>
              </el-form-item>
              <el-form-item label="结束时间">
                <el-date-picker v-model="ruleForm.time3" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间"></el-date-picker>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="dispatch-right-footer border bg">
          <div class="source-employment-hear border-b">就业协议书或劳动合同</div>
          <div class="contract">
            <el-form :model="ruleForm" ref="ruleForm" label-width="40px" class="demo-ruleForm">
              <el-form-item>
                <el-upload
                  class="upload-demo"
                  action
                  multiple
                  list-type="picture"
                  :before-upload="upload"
                >
                  <div class="border-upload">
                    <el-button class="el-primary" size="small" type="primary">选择文件</el-button>
                  </div>
                  <div slot="tip" class="el-upload__tip">
                    <i class="el-icon-warning"></i>大小：20M
                  </div>
                </el-upload>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-employment">
      <div class="dispatch-center-left bg border">
        <div class="source-employment-hear border-b">其他</div>
        <div class="dispatch-center-table">
          <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="专业对口情况" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="非常对口"></el-radio>
                <el-radio label="基本对口"></el-radio>
                <el-radio label="一般对口"></el-radio>
                <el-radio label="不太对口"></el-radio>
                <el-radio label="很不对口"></el-radio>
              </el-radio-group>
              <div class="explain-r">注：所学专业 与 就职单位所属行业、职（岗）位从事的工作内容有一个对口即为对口</div>
            </el-form-item>
            <el-form-item class="w-55" label="未就业原因" required>
              <el-input v-model="ruleForm.why">
                <el-button slot="append" icon="el-icon-tickets"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item class="w-55" label="说明" required>
              <el-input v-model="ruleForm.explain"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="upload border bg">
      <el-button type="primary" @click="open" icon="el-icon-check">提交</el-button>
    </div>
  </div>
</template>

<script>
import "../../../../common/css/student/style.css";
export default {
  data() {
    return {
      hearimg:"",
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
        number: "",
        state: "",
        nature: "",
        name: "",
        credit: "",
        companyname: "",
        pay: "",
        industry: "",
        adress: "",
        post: "",
        work: "",
        contacts: "",
        phone: "",
        email: "",
        mailbox: "",
        fax: "",
        detailed: "",
        time1: "",
        time2: "",
        time3: "",
        explain: "",
        why: ""
      }
    };
  },
  methods: {
    seeemploy(){
      
    },
    upload(file, fileList){
      console.log(file);
      this.hearimg = file;
      console.log(this.hearimg);
    },
    open() {
      const emp = new FormData();
      emp.append("agreementNumber", this.ruleForm.number);
      emp.append("employmentStatus", this.ruleForm.state);
      emp.append("nature", this.ruleForm.nature);
      emp.append("companyName", this.ruleForm.name);
      emp.append("socialCreditCode", this.ruleForm.name);
      // 所属行业
      // emp.append("industryCodeId",this.ruleForm);
      // emp.append("spaceId",this.ruleForm);
      emp.append("jobContentType", this.ruleForm.post);
      // 单位联系人
      emp.append("contactPerson", this.ruleForm.contacts);
      emp.append("contactPhone", this.ruleForm.phone);
      emp.append("emailType", this.ruleForm.email);
      // emp.append("contactEmail", this.ruleForm.mailbox);
      emp.append("companyFax", this.ruleForm.fax);

      emp.append("address", this.ruleForm.contacts);
      emp.append("reportTime", this.ruleForm.time1);
      emp.append("dReviewTime", this.ruleForm.time2);
      emp.append("sReviewTime", this.ruleForm.time3);
      emp.append("comment", this.ruleForm.explain);
      emp.append("professionalRelevance", this.ruleForm.why);
      emp.append("agreementContracts", this.hearimg);

      this.api
        .addemployment(emp)
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            this.$message({
              showClose: true,
              message: "这是一条成功消息",
              type: "success"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
      // this.$message({
      //   message: "成功提交",
      //   type: "success"
      // });
    },
    find() {
      console.log(111111);
      this.hide = true;
    },
    back() {
      console.log(111111);
      this.hide = false;
    }
  }
};
</script>
<style scoped>
.border-tran {
  border: 1px solid transparent;
  overflow: hidden;
}
.dispatch-left {
  padding-left: 20px !important;
}
.contract {
  padding: 30px 0 0 0;
}
.dispatch-right-footer {
  margin-top: 20px;
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
.dispatch-center-table {
  padding: 50px 0;
}
.dispatch-center-left {
  width: 49%;
}
.w-55 {
  width: 550px;
}
.w-30 {
  width: 300px;
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
.upload {
  margin: 20px 0;
  height: 80px;
  display: flex;
  justify-content: flex-end;
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
.employment {
  padding: 20px;
}
.contact-employment {
  margin: 20px 0;
}
.explain {
  font-size: 14px;
  color: #999;
}
.explain-r {
  font-size: 14px;
  color: red;
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
.dispatch-employment-table {
  width: 49%;
  /* height: 100%; */
}
.dispatch-table-content {
  overflow: hidden;
  padding: 50px 20px;
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
.employment-heared {
  width: 100%;
  height: 50px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  color: #fff;
  margin-bottom: 20px;
  background-color: rgb(8, 189, 189);
}
.source-employment {
  width: 100%;
  margin: 20px 0;
}
.source-employment-hear {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
}
</style>
