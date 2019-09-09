<template>
  <div class="agreement">
    <div class="agreement-title bg border">
      <div class="source-agreement-hear border-b">申请进展</div>
      <div class="agreement-title-table">
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <div class="flex-ar">
            <el-form-item class="w-50" label="审核状态">
              <el-input v-model="formLabelAlign.state"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="申请时间">
              <el-input v-model="formLabelAlign.time"></el-input>
            </el-form-item>
          </div>
          <div class="flex-ar">
            <el-form-item class="w-50" label="协议书编号">
              <el-input v-model="formLabelAlign.number"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="审核时间">
              <el-input v-model="formLabelAlign.time2"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <div class="dispatch-agreement flex-betw">
        <div class="dispatch-agreement-table border bg">
          <div class="source-agreement-hear border-b">申请必填项目</div>
          <div class="dispatch-table-content ml">
            <el-form-item class="w-50" label="申请类型" prop="types">
              <el-input v-model="ruleForm.types"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="申请原因说明" prop="reason">
              <el-input type="textarea" v-model="ruleForm.reason"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="新用单位全职" prop="newname">
              <el-input v-model="ruleForm.newname"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="获得途径" prop="channel">
              <el-input v-model="ruleForm.channel" class="input-with-select">
                <el-button slot="append" icon="el-icon-tickets"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item class="w-50" label="所属地区" prop="adress">
              <el-input v-model="ruleForm.adress" class="input-with-select">
                <el-button slot="append" icon="el-icon-tickets"></el-button>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item class="w-50" label="单位联系人" prop="linkman">
              <el-input v-model="ruleForm.linkman"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="联系电话" prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="联系邮箱" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="dispatch-agreement-table2">
          <div class="dispatch-table-content2 border bg">
            <div class="source-agreement-hear border-b">选填项目</div>
            <div class="agreement-padding">
              <el-form-item class="w-55" label="聘用岗位名称" prop="positionName">
                <el-input v-model="ruleForm.positionName"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="实际薪酬" prop="money">
                <el-input v-model="ruleForm.money">
                  <template slot="append">元/月</template>
                </el-input>
              </el-form-item>
              <el-form-item label="专业对口情况" prop="major">
                <el-radio-group v-model="ruleForm.major">
                  <el-radio label="非常对口"></el-radio>
                  <el-radio label="基本对口"></el-radio>
                  <el-radio label="一般对口"></el-radio>
                  <el-radio label="不太对口"></el-radio>
                  <el-radio label="很不对口"></el-radio>
                </el-radio-group>
                <div class="explain-r">注：所学专业 与 就职单位所属行业、职（岗）位从事的工作内容有一个对口即为对口</div>
              </el-form-item>
              <el-form-item class="w-55" label="未就业原因">
                <el-input v-model="ruleForm.unemployed">
                  <el-button slot="append" icon="el-icon-tickets"></el-button>
                </el-input>
              </el-form-item>
              <el-form-item class="w-55" label="说明"  prop="explain">
                <el-input type="textarea" v-model="ruleForm.explain"></el-input>
              </el-form-item>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-agreement">
        <div class="dispatch-agreement-center flex-betw">
          <div class="dispatch-center-left bg border">
            <div class="source-agreement-hear border-b">录聘用通知书</div>
            <div class="dispatch-center-table position">
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
                    <i class="el-icon-warning"></i>允许图片格式：JPG/bmg/gif/png
                  </div>
                </el-upload>
              </el-form-item>
            </div>
          </div>
          <div class="dispatch-center-left bg border">
            <div class="source-agreement-hear border-b">解约证明或其他材料</div>
            <div class="dispatch-center-table position">
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
                    <i class="el-icon-warning"></i>允许图片格式：JPG/bmg/gif/png
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
    <!-- <div class="footer-all bg">
      <div>当前时间：2018年12月20日 10：20：31</div>
      <div>©  2015-2018 JOBSYS.CN</div>
    </div>-->
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
        state: "",
        time1: "",
        time2: "",
        number: ""
      },
      ruleForm: {
        reason: "",
        type: "",
        newname: "",
        name: "",
        channel: "",
        adress: "",
        region: "",
        date1: "",
        date2: "",
        positioname: "",
        money: "",
        major: "",
        unemployed: "",
        explain: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
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
      fd.append("type", this.ruleForm.types);
      fd.append("reason", this.ruleForm.reason);
      fd.append("employer", this.ruleForm.newname);
      fd.append("pathwayId", this.ruleForm.channel);
      fd.append("linkman", this.ruleForm.linkman);
      fd.append("phone", this.ruleForm.phone);
      fd.append("email", this.ruleForm.email);
      fd.append("positionName", this.ruleForm.positionName);
      fd.append("emolument", this.ruleForm.money);
      fd.append("comment", this.ruleForm.explain);
      this.$refs[formName].resetFields();
      this.api.agreement(fd).then(res => {
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
      }).catch(error=>{
        console.log(error)
      })
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
.agreement-padding {
  padding: 30px 20px;
}
.explain-r {
  font-size: 14px;
  color: red;
}
.agreement-title {
  margin-bottom: 30px;
}
.agreement-title-table {
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
.dispatch-table-content2 {
  height: 500px;
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
.position {
  margin-left: -40px;
}
.dispatch-center-left {
  width: 49%;
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
.el-main {
  background-color: #e4e4e4;
  padding: 0 !important;
  position: relative;
}
.bg {
  background-color: #fff;
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
.agreement {
  padding: 20px;
}
.contact-agreement {
  margin: 20px 0;
}
.explain {
  font-size: 14px;
  color: #999;
}
.left {
  margin-left: 50px;
}
.flex-betw {
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
.ml {
  margin-left: 20px;
}
.dispatch-agreement-table {
  width: 49%;
}
.dispatch-agreement-table2 {
  width: 49%;
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
.source-agreement {
  width: 100%;
  margin: 20px 0;
}
.source-agreement-hear {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  border-bottom: 1px solid #999;
}
.el-radio {
  margin-right: 19px;
}
</style>
