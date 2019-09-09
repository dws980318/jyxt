<template>
  <div class="subsidy">
    <div class="subsidy-heared">
      <i class="el-icon-warning"></i>
      <span>
        求职创业补助申请时间：
        <span></span>至
        <span></span>
      </span>
    </div>
    <div class="subsidy-title bg border">
      <div class="source-subsidy-hear border-b">申请进展</div>
      <div class="subsidy-title-table">
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <div class="flex-ar">
            <el-form-item class="w-50" label="审核状态">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="申请时间">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </div>
          <div class="flex-ar">
            <el-form-item class="w-50" label="协议书编号">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="审核时间">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
    <div class="subsidy-title bg border">
      <div class="source-subsidy-hear border-b">基本信息</div>
      <div class="subsidy-title-table">
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <div class="flex-ar">
            <el-form-item class="w-50" label="姓名">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="性别">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </div>
          <div class="flex-ar">
            <el-form-item class="w-50" label="学号">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="民族">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </div>
          <div class="flex-ar">
            <el-form-item class="w-50" label="身份证号">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="身份证号">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
    <el-form :model="ruleForm" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <div class="dispatch-subsidy">
        <div class="dispatch-subsidy-table border bg">
          <div class="source-subsidy-hear border-b">申请资料项目</div>
          <div class="dispatch-table-content">
            <el-form-item class="w-50" label="户口性质" prop="region">
              <el-select v-model="ruleForm.region" placeholder="选择">
                <el-option label="城市" value="city"></el-option>
                <el-option label="农村" value="village"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="户口所在地区" prop="anmeldenPlace">
              <el-input v-model="ruleForm.anmeldenPlace"></el-input>
            </el-form-item>
            <el-form-item label="户口详细地址" prop="anmeldenAddress">
              <el-input v-model="ruleForm.anmeldenAddress"></el-input>
            </el-form-item>
            <el-form-item label="家庭地址" prop="homeAddress">
              <el-input v-model="ruleForm.homeAddress" class="input-with-select">
                <el-button slot="append" icon="el-icon-tickets"></el-button>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item class="w-50" label="支撑证件" prop="certificateType">
              <el-select v-model="ruleForm.certificateType" placeholder="选择">
                <el-option label="城乡低保证" value="support"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="证件代码" prop="certificateId">
              <el-input v-model="ruleForm.certificateId"></el-input>
            </el-form-item>
            <el-form-item label="核发证件单位" prop="certificateOrganizer">
              <el-input v-model="ruleForm.certificateOrganizer"></el-input>
            </el-form-item>
            <el-form-item label="是否国家贷款" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="贷款合同编码" prop="loanAgreementId">
              <el-input v-model="ruleForm.loanAgreementId"></el-input>
              <div class="explain-r">
                <i class="el-icon-warning"></i> 建议用学校下放的银行卡
              </div>
            </el-form-item>
            <el-form-item label="银行账号" prop="bankNumber">
              <el-input v-model="ruleForm.bankNumber"></el-input>
              <div class="explain-r">
                <i class="el-icon-warning"></i> 如有多次申请贷款，可填写任一年的贷款码
              </div>
            </el-form-item>
            <el-form-item label="开户行名称" prop="bankName">
              <el-input v-model="ruleForm.bankName"></el-input>
              <div class="explain-r">
                <i class="el-icon-warning"></i> 如：中国银行股份有限公司广州分行
              </div>
            </el-form-item>
            <el-form-item class="w-60" label="联系电话" prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item class="w-60" label="联系邮箱" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="其他说明" prop="comment">
              <el-input v-model="ruleForm.comment"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <div class="contact-subsidy">
        <div class="dispatch-subsidy-center">
          <div class="bg border">
            <div class="source-subsidy-hear border-b">附件材料</div>
            <div class="dispatch-center-table">
              <el-form-item>
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple
                  :limit="3"
                >
                  <div class="border-upload">
                    <el-button class="el-primary" size="small" type="primary">选择文件</el-button>
                  </div>
                  <div slot="tip" class="el-upload__tip">
                    <i class="el-icon-warning"></i>文件 5m：doc/docx/zip/rar
                  </div>
                </el-upload>
              </el-form-item>
            </div>
          </div>
        </div>
      </div>
      <div class="upload border bg">
        <el-button type="primary" @click="onSubmit('ruleForm')" icon="el-icon-check">提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import "../../../common/css/student/style.css";
export default {
  data() {
    return {
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
        name: "",
        region: "",
        anmeldenPlace: "",
        anmeldenAddress: "",
        homeAddress: "",
        certificateType: "",
        certificateId: "",
        certificateOrganizer: "",
        resource: "",
        loanAgreementId: "",
        bankNumber: "",
        bankName: "",
        phone: "",
        email: "",
        comment: ""
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
      }
    };
  },
  methods: {
    onSubmit(formName) {
      const fd = new FormData();
      fd.append("anmeldenPlace", this.ruleForm.anmeldenPlace);
      fd.append("anmeldenAddress", this.ruleForm.anmeldenAddress);
      fd.append("homeAddress", this.ruleForm.homeAddress);
      fd.append("certificateType", this.ruleForm.certificateType);
      fd.append("certificateOrganizer", this.ruleForm.certificateOrganizer);
      fd.append("certificateId", this.ruleForm.certificateId);
      fd.append("loanAgreementId", this.ruleForm.loanAgreementId);
      fd.append("bankNumber", this.ruleForm.bankNumber);
      fd.append("bankName", this.ruleForm.bankName);
      fd.append("phone", this.ruleForm.phone);
      fd.append("email", this.ruleForm.email);
      fd.append("comment", this.ruleForm.comment);
      // console.log(this.ruleForm.anmeldenPlace);
      // console.log(this.ruleForm.anmeldenAddress);
      // console.log(this.ruleForm.homeAddress);
      // console.log(this.ruleForm.certificateType);
      // console.log(this.ruleForm.certificateOrganizer);
      this.$refs[formName].resetFields();
      this.api.subsidy(fd).then(res => {
        console.log(res);
        if (res.status == 200) {
          this.$message({
            message: "提交成功",
            type: "success"
          });
        } else {
          this.$message({
            message: "提交失败",
            type: "error"
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.subsidy-padding {
  padding: 30px 10px;
}
.explain-r {
  font-size: 14px;
  color: red;
}
.subsidy-title {
  margin-bottom: 30px;
}
.subsidy-title-table {
  padding: 30px;
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
.border-upload {
  width: 800px;
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
.subsidy {
  padding: 20px;
}
.contact-subsidy {
  margin: 20px 0;
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
.flex-bet {
  display: flex;
}
.flex-around {
  display: flex;
  justify-content: space-around;
}
.flex-ar {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.flex {
  display: flex;
  width: 1000px;
}
.dispatch-table-content {
  padding: 50px 30px 50px 10px;
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
.source-subsidy {
  width: 100%;
  margin: 20px 0;
}
.source-subsidy-hear {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  border-bottom: 1px solid #999;
}
.subsidy-heared {
  width: 100%;
  height: 50px;
  padding: 0 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: rgb(8, 189, 189);
}
</style>
