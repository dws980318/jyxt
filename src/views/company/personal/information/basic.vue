<template>
  <div class="information">
    <div class="information-heared">
      <div>
        <i class="el-icon-warning"></i>请填写单位基本信息。
      </div>
      <div
        class="small-size"
      >注：若用人单位的“单位名称”、“证件号码”、“证件认证凭证”、“详细介绍”信息因公变更，需要修改时，已入驻学校状态将需要重新复查，修改后可告知学校相关负责人</div>
    </div>
    <div class="dispatch-information flex-bet">
      <div class="dispatch-information-table border bg">
        <div class="box-title border-b">单位信息</div>
        <div class="dispatch-table-content">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item class="w90" label="单位名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item class="w90" label="简称" prop="abbreviation">
              <el-input v-model="ruleForm.abbreviation"></el-input>
            </el-form-item>
            <el-form-item class="w90" label="成立时间" required>
              <!-- <el-input v-model="ruleForm.registrationDate"></el-input> -->
              <el-date-picker
                style="width: 100%;"
                v-model="ruleForm.registrationDate"
                type="datetime"
                placeholder="选择日期时间"
                value-format="yyyy-MM-dd HH:mm:ss"
              ></el-date-picker>
            </el-form-item>
            <el-form-item class="w90" label="单位性质" prop="nature">
              <el-input v-model="ruleForm.enterprisePropertyId"></el-input>
            </el-form-item>
            <el-form-item class="w90" label="所属行业" required>
              <el-input v-model="ruleForm.industryCodeId" class="input-with-select"></el-input>
            </el-form-item>
            <el-form-item class="w80 money" label="注册资金" required>
              <el-input v-model="ruleForm.registeredCapital" class="input-with-select">
                <el-select class="w-20" slot="prepend" v-model="ruleForm.company" placeholder="选择">
                  <el-option label="人民币" value="shanghai"></el-option>
                  <el-option label="美元" value="beijing"></el-option>
                </el-select>
              </el-input>
              <span class="unit">万</span>
            </el-form-item>
            <el-form-item class="w90" label="单位规模" required>
              <el-input v-model="ruleForm.scale" class="input-with-select"></el-input>
            </el-form-item>
            <el-form-item class="w90" label="员工人数" required>
              <el-input v-model="ruleForm.memberQuantity" class="input-with-select"></el-input>
            </el-form-item>
            <el-form-item class="w90" label="口号或标语" required>
              <el-input v-model="ruleForm.title" class="input-with-select"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="dispatch-information-table border bg">
        <div class="box-title border-b">其他信息</div>
        <div class="dispatch-table-content">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item class="w90" label="联系人" prop="contacts">
              <el-input v-model="ruleForm.contactName"></el-input>
            </el-form-item>
            <el-form-item class="w90" label="联系电话" prop="phone">
              <el-input v-model="ruleForm.contactPhone"></el-input>
              <div class="explain">
                <i class="el-icon-warning"></i> 与档案户口去向挂钩，如回生源地选生源地人社局
              </div>
            </el-form-item>
            <el-form-item class="w90" label="邮箱" prop="email">
              <el-input v-model="ruleForm.contactEmail"></el-input>
            </el-form-item>
            <el-form-item class="w90" label="传真号码" prop="passvalue">
              <el-input v-model="ruleForm.faxAddress"></el-input>
              <div class="explain">
                <i class="el-icon-warning"></i> 与档案户口去向挂钩，如回生源地选生源地人社局
              </div>
            </el-form-item>
            <el-form-item class="w90" label="其他号码" prop="othernumber">
              <el-input v-model="ruleForm.idNumber"></el-input>
            </el-form-item>
            <el-form-item class="w90" label="网址" prop="website">
              <el-input v-model="ruleForm.url"></el-input>
            </el-form-item>
            <el-form-item class="w90" label="所属地区" prop="detailed">
              <el-input v-model="ruleForm.areainfoId">
                <el-button slot="append" icon="el-icon-tickets"></el-button>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item class="w90" label="详细地址" prop="address">
              <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="basic-content bg-w border">
      <div class="box-title border-b">单位信息</div>
      <div class="basic-content-inner">
        <div>
          <div class="inner-title">标签</div>
          <el-input class="input-t" v-model="inp"></el-input>
        </div>
        <div>
          <div class="inner-title">详情介绍</div>
          <div>
            <div class="edit_container">
              <el-upload
                class="avatar-uploader"
                action="http://192.168.0.252:8080/"
                :show-file-list="false"
                :format="['jpg','jpeg','png','gif']"
                :max-size="2048"
                :on-success="handleSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
              <quill-editor
                v-model="ruleForm.information"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"
              ></quill-editor>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="upload border bg">
      <el-button type="primary" @click="open('ruleForm')" icon="el-icon-check">提交</el-button>
    </div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import quillConfig from "@/common/js/quill-config.js";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      content: "",
      editorOption: {},
      quillOption: quillConfig,
      inp: "",
      labelPosition: "left",
      ruleForm: {
        name: "",
        registrationDate: "",
        enterprisePropertyId: "",
        industryCodeId: "",
        registeredCapital: "",
        scale: "",
        memberQuantity: "",
        contactName: "",
        contactPhone: "",
        othernumber: "",
        contactEmail: "",
        areainfoId: "",
        address: "",
        title: "",
        faxAddress: "",
        url: "",
        idNumber: "",
        information: "",
        file: ""
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
    beforeAvatarUpload(file) {
      this.ruleForm.file = file;
      console.log(this.ruleForm.file);
    },
    handleSuccess(res) {
      // 获取富文本组件实例
      let quill = this.$refs.QuillEditor.quill;
      // 如果上传成功
      if (res) {
        // 获取光标所在位置
        let length = quill.getSelection().index;
        // 插入图片，res为服务器返回的图片链接地址
        quill.insertEmbed(length, "image", res);
        // 调整光标到最后
        quill.setSelection(length + 1);
      } else {
        // 提示信息，需引入Message
        Message.error("图片插入失败");
      }
    },
  //企业基本信息提交接口
    open() {
      console.log(this.ruleForm.information);
      console.log(this.ruleForm.file);
      const fd = new FormData();
      fd.append("id", localStorage.connectMark);
      fd.append("name", this.ruleForm.name);
      fd.append("registrationDate", this.ruleForm.registrationDate);
      fd.append("enterprisePropertyId", this.ruleForm.enterprisePropertyId);
      fd.append("industryCodeId", this.ruleForm.industryCodeId);
      fd.append("registeredCapital", this.ruleForm.registeredCapital);
      fd.append("scale", this.ruleForm.scale);
      fd.append("memberQuantity", this.ruleForm.memberQuantity);
      fd.append("title", this.ruleForm.title);

      fd.append("contactName", this.ruleForm.contactName);
      fd.append("contactPhone", this.ruleForm.contactPhone);
      fd.append("contactEmail", this.ruleForm.contactEmail);
      fd.append("faxAddress", this.ruleForm.faxAddress);
      fd.append("idNumber", this.ruleForm.idNumber);
      fd.append("url", this.ruleForm.url);
      fd.append("areainfoId", this.ruleForm.areainfoId);
      fd.append("address", this.ruleForm.address);
      fd.append("identificationPhoto", this.ruleForm.file);
      fd.append(
        "information",
        this.ruleForm.information.replace(/<[^>]+>/g, "")
      );

      let companyInioVO = {
        su_id: 5227143,
        coi_name: this.ruleForm.name,
        coi_abbreviation: this.ruleForm.abbreviation,
        coi_create_time: this.ruleForm.registrationDate,
        coi_nature: this.ruleForm.enterprisePropertyId,
        coi_industry: this.ruleForm.industryCodeId,
        coi_registercapital: this.ruleForm.registeredCapital,
        coi_scale: this.ruleForm.scale,
        coi_persnumber: this.ruleForm.memberQuantity,
        coi_slogan: this.ruleForm.title,

        coi_label: this.inp,
        coi_introduce: this.ruleForm.information,

        coi_contacts: this.ruleForm.contactName,
        coi_contaphone: this.ruleForm.contactPhone,
        coi_email: this.ruleForm.contactEmail,
        coi_faxnumber: this.ruleForm.faxAddress,
        coi_otherphone: this.ruleForm.idNumber,
        coi_website: this.ruleForm.url,
        coi_region: this.ruleForm.areainfoId,
        coi_address: this.ruleForm.address
      };

      this.api.updComInioByUser(companyInioVO).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.$message.success(res.inio);
          }else{
          this.$message.error(res.inio);
        }
      });
    },
    onEditorBlur() {},
    onEditorFocus() {},
    onEditorChange() {},
    detail() {
      this.api.SeeInformation().then(res => {
        console.log(res);
        this.ruleForm.name = res.data.name;
        this.ruleForm.registrationDate = res.data.registrationDate;
        this.ruleForm.enterprisePropertyId = res.data.enterprisePropertyId + "";
        this.ruleForm.industryCodeId = res.data.industryCodeId + "";
        this.ruleForm.registeredCapital = res.data.registeredCapital;
        this.ruleForm.scale = res.data.scale;
        this.ruleForm.memberQuantity = res.data.memberQuantity;
        this.ruleForm.title = res.data.title;

        this.ruleForm.contactName = res.data.contactName;
        this.ruleForm.contactPhone = res.data.contactPhone;
        this.ruleForm.contactEmail = res.data.contactEmail;
        this.ruleForm.faxAddress = res.data.faxAddress;
        this.ruleForm.idNumber = res.data.idNumber;
        this.ruleForm.url = res.data.url;
        this.ruleForm.areainfoId = res.data.areainfoId + "";
        this.ruleForm.address = res.data.address;
        this.ruleForm.information = res.data.information;
      });
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  created() {
    // this.detail();
  }
};
</script>
<style scoped>
.input-t input {
  background-color: #dedede;
}
.inner-title {
  padding-left: 10px;
  line-height: 50px;
}
.basic-content-inner {
  padding: 10px;
}
.basic-content {
  margin-top: 30px;
}
.money {
  position: relative;
}
.unit {
  position: absolute;
  right: -30px;
  top: 0;
}
.el-upload {
  border: 1px dashed transparent;
}
.w-30 {
  width: 300px;
}
.upload {
  margin: 20px 0;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
}
.information {
  padding: 20px;
}
.flex-bet {
  display: flex;
  justify-content: space-between;
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
.w-50 {
  width: 500px;
}
.information-heared {
  width: 100%;
  min-height: 60px;
  padding: 10px 30px;
  color: #fff;
  margin-bottom: 20px;
  background-color: rgb(8, 189, 189);
}
.small-size {
  font-size: 15px;
}
</style>
