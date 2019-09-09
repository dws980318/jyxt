<template>
  <div class="information">
    <div class="information-heared">
      <i class="el-icon-warning"></i>
      <span>请认真填写派遣信息，本模块信息与您的档案、户口去向</span>
      <el-button type="warning">下载《暂缓就业申请表》</el-button>
      <el-button type="warning">查看《就业报道证》样式</el-button>
    </div>
    <div class="dispatch-information flex-bet">
      <div class="dispatch-information-table border bg">
        <div class="source-information-hear border-b">派遣信息</div>
        <div class="dispatch-table-content">
          <el-form :model="ruleForm" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item label="派遣状态" required>
              <el-select v-model="ruleForm.state" placeholder="选择时间">
                <el-option label="是" value="0"></el-option>
                <el-option label="否" value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="派遣性质" required>
              <el-select v-model="ruleForm.nature" placeholder="选择">
                <el-option label="是" value="0"></el-option>
                <el-option label="否" value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w90 pad" label="主管单位" required>
              <el-input class="input-with-select">
                <el-select class="w-30" slot="prepend" v-model="ruleForm.company" placeholder="选择">
                  <el-option label="时间一" value="shanghai"></el-option>
                  <el-option label="时间二" value="beijing"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-tickets"></el-button>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item class="w90" label="具体派遣单位" required>
              <el-input v-model="ruleForm.region"></el-input>
              <div class="explain">
                <i class="el-icon-warning"></i> 与档案户口去向挂钩，如回生源地选生源地人社局
              </div>
            </el-form-item>
            <el-form-item class="w90 pad" label="派遣地区" required>
              <el-input class="input-with-select">
                <el-select
                  class="w-30"
                  slot="prepend"
                  v-model="ruleForm.executive"
                  placeholder="选择"
                >
                  <el-option label="时间一" value="shanghai"></el-option>
                  <el-option label="时间二" value="beijing"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-tickets"></el-button>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="dispatch-information-table border bg">
        <div class="source-information-hear border-b">其他信息</div>
        <div class="dispatch-table-content">
          <el-form :model="ruleForm" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item class="w85" label="说明" required>
              <el-input v-model="ruleForm.explain"></el-input>
            </el-form-item>
            <el-form-item class="w85" label="报到证号" required>
              <el-input v-model="ruleForm.bdnumber"></el-input>
            </el-form-item>
            <el-form-item class="w85" label="暂缓就业号" required>
              <el-input v-model="ruleForm.reprieve"></el-input>
            </el-form-item>
            <el-form-item class="w50" label="派遣时间" required>
              <el-date-picker
                v-model="ruleForm.time"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期时间"
              ></el-date-picker>
            </el-form-item>
            <el-form-item class="w80" label="学校审核时间" required>
              <el-date-picker
                v-model="ruleForm.schooltime"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期时间"
              ></el-date-picker>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="contact-information">
      <div class="dispatch-information-center flex-bet">
        <div class="dispatch-center-left bg border">
          <div class="source-information-hear border-b">档案接收信息</div>
          <div class="dispatch-center-table">
            <el-form :model="ruleForm" ref="ruleForm" label-width="140px" class="demo-ruleForm">
              <el-form-item class="w85" label="档案接收单位名称" required>
                <el-input v-model="ruleForm.componyname" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item class="w85" label="档案接收单位地址" required>
                <el-input v-model="ruleForm.componyaderess" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item class="w85" label="接收单位邮编" required>
                <el-input v-model="ruleForm.componycord" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item class="w85" label="档案接收部门" required>
                <el-input v-model="ruleForm.department" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item class="w85" label="联系电话" required>
                <el-input v-model="ruleForm.phone" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item class="w85" label="入户地址" required>
                <el-input v-model="ruleForm.startadress" :disabled="true"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="dispatch-center-left bg border">
          <div class="source-information-hear border-b">接收函</div>
          <div class="dispatch-center-table">
            <div class="upload-img">接收函</div>
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
    <div class="upload border bg">
      <el-button type="primary" @click="dispatch" icon="el-icon-check">提交</el-button>
    </div>
  </div>
</template>

<script>
import "../../../../common/css/student/style.css";
export default {
  data() {
    return {
      hearimg: [],
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
        state: "",
        nature: "",
        company: "",
        region: "",
        executive: "",
        adress: "",
        explain: "",
        bdnumber: "",
        reprieve: "",
        time: "",
        schooltime: "",
        componyname: "",
        componyaderess: "",
        componycord: "",
        startadress: "",
        department: "",
        startadress: "",
        phone: ""
      }
    };
  },
  created() {},
  methods: {
    upload(file, fileList) {
      console.log(file);
      this.hearimg = file;
      console.log(this.hearimg);
    },
    dispatch() {
      const add = new FormData();
      add.append("userId", 2);
      add.append("nature", this.ruleForm.nature);
      add.append("competentOrganizer", this.ruleForm.company);
      add.append("dispatchedOrganizer", this.ruleForm.region);
      // 地区id
      // add.append("regionId", this.ruleForm.);
      add.append("expain", this.ruleForm.explain);
      add.append("certificateNumber", this.ruleForm.bdnumber);
      add.append("deferredEmploymentNumber", this.ruleForm.reprieve);
      add.append("dispatchTime", this.ruleForm.componyname);
      add.append("appearTime", this.ruleForm.time);
      add.append("dispatchTime", this.ruleForm.schooltime);
      add.append("offerFiles", this.hearimg);
      this.api
        .adddispatch(add)
        .then(res => {
          console.log(res.status);
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
    }
  }
};
</script>
<style>
.dispatch-information-center {
  border: 1px solid transparent;
  overflow: hidden;
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
.information {
  padding: 20px;
}
.contact-information {
  margin: 20px 0;
}
.explain {
  font-size: 14px;
  color: #999;
}
.left {
  margin-left: 50px;
}
.flex-bet {
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
.dispatch-information-table {
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
.information-heared {
  width: 100%;
  height: 50px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  color: #fff;
  margin-bottom: 20px;
  background-color: rgb(8, 189, 189);
}
.source-information {
  width: 100%;
  margin: 20px 0;
}
.source-information-hear {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
}
</style>
