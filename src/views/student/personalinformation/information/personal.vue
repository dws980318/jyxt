<template>
  <div class="essential">
    <div class="essential-heared">
      <i class="el-icon-warning"></i>
      <span>请完善个人资料</span>
    </div>
    <div class="source-essential border bg">
      <div class="source-essential-hear border-b">生源信息</div>
      <div class="source-essential-table">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <div class="table-content">
            <el-form-item class="w-50" label="姓　名">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="学　号">
            <el-input v-model="formLabelAlign.number"></el-input>
            </el-form-item>
          </div>
          <div v-show="hide" class="table-hide">
            <div class="table-content">
              <el-form-item class="w-50" label="身份证号">
                <el-input v-model="formLabelAlign.idcord"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="性　别">
                <el-input v-model="formLabelAlign.gender"></el-input>
              </el-form-item>
            </div>
            <div class="table-content">
              <el-form-item class="w-50" label="考生号">
                <el-input v-model="formLabelAlign.candnumber"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="入学时间">
                <el-input v-model="formLabelAlign.enrollment "></el-input>
              </el-form-item>
            </div>
            <div class="table-content">
              <el-form-item class="w-50" label="毕业年份">
                <el-input v-model="formLabelAlign.gradyear"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="定向单位">
                <el-input v-model="formLabelAlign.company"></el-input>
              </el-form-item>
            </div>
            <div class="table-content">
              <el-form-item class="w-50" label="毕业时间">
                <el-input v-model="formLabelAlign.cradtime"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="学　制">
                <el-input v-model="formLabelAlign.system"></el-input>
              </el-form-item>
            </div>
            <div class="table-content">
              <el-form-item class="w-50" label="培养方式">
                <el-input v-model="formLabelAlign.culture"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="学　历">
                <el-input v-model="formLabelAlign.education"></el-input>
              </el-form-item>
            </div>
            <div class="table-content">
              <el-form-item class="w-50" label="校　区">
                <el-input v-model="formLabelAlign.campus"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="学　院">
                <el-input v-model="formLabelAlign.college"></el-input>
              </el-form-item>
            </div>
            <div class="table-content">
              <el-form-item class="w-50" label="系　别">
                <el-input v-model="formLabelAlign.tie"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="专业名称">
                <el-input v-model="formLabelAlign.proaname"></el-input>
              </el-form-item>
            </div>
            <div class="table-content">
              <el-form-item class="w-50" label="专业方向">
                <el-input v-model="formLabelAlign.prodirection"></el-input>
              </el-form-item>
              <el-form-item class="w-50" label="班　级">
                <el-input v-model="formLabelAlign.class"></el-input>
              </el-form-item>
            </div>
          </div>
          <div class="table-footer flex-c">
            <div @click="find" class="btn" v-if="!hide">
              展开更多
              <i class="el-icon-arrow-down"></i>
            </div>
            <div @click="back" class="btn" v-else>
              隐藏
              <i class="el-icon-arrow-up"></i>
            </div>
          </div>
        </el-form>
      </div>
    </div>
    <div class="personal-essential border bg">
      <div class="source-essential-hear border-b">个人信息</div>
      <div class="personal-essential-table">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item class="w-60" label="出生日期">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                value-format="yyyy-MM-dd"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-form-item>
          <el-form-item class="w-60" label="生源地区" prop="birth">
            <el-input v-model="ruleForm.birth">
              <el-button slot="append" icon="el-icon-tickets"></el-button>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <div class="explain">
              <i class="el-icon-warning"></i> 一般为入学时户口所在地
            </div>
          </el-form-item>
          <div class="flex-around">
            <el-form-item label="政治面貌" prop="establish">
              <el-select v-model="ruleForm.establish" placeholder="选择时间">
                <el-option label="时间一" value="shanghai"></el-option>
                <el-option label="时间二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w-50" label="身高" prop="height">
              <el-input v-model="ruleForm.height">
                <el-button slot="append">CM</el-button>
              </el-input>
            </el-form-item>
          </div>
          <div class="flex-around">
            <el-form-item label="民族" prop="nation">
              <el-select v-model="ruleForm.nation" placeholder="选择">
                <el-option label="时间一" value="shanghai"></el-option>
                <el-option label="时间二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="w-50" label="体重" prop="weight">
              <el-input v-model="ruleForm.weight">
                <el-button slot="append">KG</el-button>
              </el-input>
            </el-form-item>
          </div>
          <el-form-item label="婚姻状况" prop="marriage">
            <el-select v-model="ruleForm.marriage" placeholder="选择">
              <el-option label="未婚" value="0"></el-option>
              <el-option label="已婚" value="1"></el-option>
              <el-option label="离异" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="经济状况" prop="economics">
            <el-select v-model="ruleForm.economics" placeholder="选择">
              <el-option label="一般" value="0"></el-option>
              <el-option label="很好" value="1"></el-option>
              <el-option label="比较好" value="2"></el-option>
              <el-option label="非常好" value="3"></el-option>
              <el-option label="困难" value="4"></el-option>
              <el-option label="比较困难" value="5"></el-option>
              <el-option label="非常困难" value="6"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="户口是否在校" prop="residence">
            <el-radio-group v-model="ruleForm.residence">
              <el-radio label="是" value="0"></el-radio>
              <el-radio label="否" value="1"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item class="w-60" label="户口地区" prop="region">
            <el-input v-model="ruleForm.region">
              <el-button slot="append" icon="el-icon-tickets"></el-button>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item class="w-60" label="户口地址" prop="adress">
            <el-input v-model="ruleForm.adress"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="contact-essential border bg">
      <div class="source-essential-hear border-b">联系信息</div>
      <div class="personal-essential-table">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
        >
          <div class="flex-around">
            <el-form-item class="w-51" label="手机" prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item class="w-51" label="邮箱" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
          </div>
          <div class="flex-around">
            <el-form-item class="w-51" label="QQ号" prop="qq">
              <el-input v-model="ruleForm.qq"></el-input>
            </el-form-item>
            <el-form-item class="w-51" label="家庭电话" prop="homephone">
              <el-input v-model="ruleForm.homephone"></el-input>
              <div class="explain">
                <i class="el-icon-warning"></i> 固定电话，格式：区号-电话号或手机号
              </div>
            </el-form-item>
          </div>
          <div class="flex-around">
            <el-form-item class="w-51" label="家庭住址" prop="homeadress">
              <el-input v-model="ruleForm.homeadress"></el-input>
            </el-form-item>
            <el-form-item class="w-51" label="邮编" prop="zipcode">
              <el-input v-model="ruleForm.zipcode"></el-input>
            </el-form-item>
          </div>
          <div class="flex-around">
            <el-form-item class="w-51" label="宿舍号" prop="dormitory">
              <el-input v-model="ruleForm.dormitory"></el-input>
            </el-form-item>
            <el-form-item class="w-51" label="宿舍电话" prop="dormitoryphone">
              <el-input v-model="ruleForm.dormitoryphone"></el-input>
            </el-form-item>
          </div>
          <div class="flex-around">
            <el-form-item class="w-51" label="联系方式1" prop="phone1">
              <el-input v-model="ruleForm.phone1"></el-input>
            </el-form-item>
            <el-form-item class="w-51" label="联系方式2" prop="phone2">
              <el-input v-model="ruleForm.phone2"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
    <div class="footer-imformation">
      <div class="footer-imformation-left border bg">
        <div class="footer-imformation-title border-b">
          <p>上传图片</p>
          <i class="el-icon-arrow-up"></i>
        </div>
        <div>
          <div class="imgurl border">
            <img width="100%" :src="imageUrl" alt />
          </div>
          <div class="comter">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
              list-type="picture"
              :before-upload="upload"
              :on-success="handleAvatarSuccess"
              :show-file-list="false"
            >
              <el-button size="small" type="primary">选择文件</el-button>
              <div slot="tip" class="el-upload__tip">
                <i class="el-icon-warning"></i>允许的图片格式：jpg / gif / bmp / png
              </div>
            </el-upload>
          </div>
        </div>
      </div>
      <div class="footer-imformation-right border bg">
        <div class="footer-imformation-title border-b">
          <p>介绍</p>
          <i class="el-icon-arrow-up"></i>
        </div>
        <div class="edit_container">
          <quill-editor
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"
          ></quill-editor>
        </div>
      </div>
    </div>
    <div class="upload border bg">
      <el-button type="primary" @click="modify" icon="el-icon-check">提交</el-button>
    </div>
    <!-- <div class="footer-all bg">
      <div>当前时间：2018年12月20日 10：20：31</div>
      <div>©  2015-2018 JOBSYS.CN</div>
    </div>-->
  </div>
</template>

<script>
import "../../../../common/css/student/style.css";
import { quillEditor } from "vue-quill-editor"; // 调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      id: "",
      hearimg: "",
      imgurl: "",
      content: "",
      editorOption: {},
      value1: "",
      hide: false,
      imageUrl: "",
      labelPosition: "left",
      input4: "",
      formLabelAlign: {
        name: "",
        number: "",
        idcord: "",
        gender: "",
        candnumber: "",
        enrollment: "",
        gradyear: "",
        company: "",
        major: "",
        faculty: "",
        cradtime: "",
        system: "",
        culture: "",
        education: "",
        campus: "",
        college: "",
        tie: "",
        proaname: "",
        prodirection: "",
        class: ""
      },
      ruleForm: {
        date1: "",
        birth: "",
        establish: "",
        nation: "",
        marriage: "",
        economics: "",
        residence: "0",
        weight: "",
        height: "",
        region: "",
        adress: "",
        phone: "",
        email: "",
        qq: "",
        homephone: "",
        homeadress: "",
        zipcode: "",
        dormitory: "",
        dormitoryphone: "",
        phone1: "",
        phone2: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "blur" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "blur"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "blur"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "blur" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  created() {
    this.imformation();
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(file);
    },
    upload(file, fileList) {
      console.log(file);
      this.hearimg = file;
      console.log(this.hearimg);
    },
    modify() {
      let student = new FormData();
      student.append("id", this.id),
        student.append("name", this.formLabelAlign.name),
        student.append("studentNumber", this.formLabelAlign.number),
        student.append("enrollmentTime", this.formLabelAlign.enrollment),
        student.append("idCard", this.formLabelAlign.idcord),
        student.append("departmentName", this.formLabelAlign.faculty),
        student.append("campusName", this.formLabelAlign.major),
        student.append("dateOfBirth", this.ruleForm.date1),
        student.append("householdaddress", this.ruleForm.birth),
        student.append("politicsStatus", this.ruleForm.establish),
        student.append("nation", this.ruleForm.nation),
        student.append("maritalStatus", this.ruleForm.marriage),
        student.append("inTheSchool", this.ruleForm.residence),
        student.append("height", this.ruleForm.height),
        student.append("weight", this.ruleForm.weight),
        student.append("householdaddress", this.ruleForm.region),
        student.append("residence", this.ruleForm.adress),
        // student.append("phone", this.ruleForm.phone),
        // student.append("qq", this.ruleForm.qq),
        student.append("financialSituation", this.ruleForm.economics),
        student.append("homeTelephone", this.ruleForm.homephone),
        student.append("homeSite", this.ruleForm.homeadress),
        student.append("postcode", this.ruleForm.zipcode),
        student.append("email", this.ruleForm.email),
        student.append("dormNum", this.ruleForm.dormitory),
        student.append("dormPhone", this.ruleForm.dormitoryphone),
        student.append("other1", this.ruleForm.phone1),
        student.append("other2", this.ruleForm.phone2),
        student.append("pluralPicture", this.hearimg),
        this.api
          .student(student)
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
    },
    // 查看个人信息
    imformation() {
      this.api
        .information(1)
        .then(res => {
          console.log(res.data);
          const data = res.data;
          this.id = data.id;
          this.formLabelAlign.name = data.name;
          this.formLabelAlign.number = data.studentNumber;
          this.formLabelAlign.enrollment = data.enrollmentTime;
          this.formLabelAlign.idcord = data.idCard;
          this.formLabelAlign.faculty = data.departmentName;
          this.formLabelAlign.major = data.campusName;
          this.ruleForm.date1 = data.dateOfBirth;
          this.ruleForm.birth = data.householdaddress;
          // 政治面貌
          this.ruleForm.establish = data.politicsStatus;
          this.ruleForm.nation = data.nation;
          this.ruleForm.marriage = data.maritalStatus;
          this.ruleForm.economics = data.financialSituation;
          this.ruleForm.residence = data.inTheSchool;
          this.ruleForm.height = data.height;
          this.ruleForm.weight = data.weight;

          this.ruleForm.region = data.householdaddress;
          this.ruleForm.adress = data.residence;
          this.ruleForm.phone = data.phone;
          this.ruleForm.qq = data.qq;
          // 家庭电话
          this.ruleForm.homephone = data.homeTelephone;
          this.ruleForm.homeadress = data.homeSite;
          this.ruleForm.zipcode = data.postcode;
          this.ruleForm.email = data.postcode;
          // 宿舍号
          this.ruleForm.dormitory = data.postcode;
          this.ruleForm.dormitoryphone = data.dormPhone;
          this.ruleForm.phone1 = data.other1;
          this.ruleForm.phone2 = data.other2;
          // 头像
          this.imageUrl = data.pictureHead;
          this.content = data.introduce;
        })
        .catch(err => {
          console.log(erro.data);
        });
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    find() {
      this.hide = true;
    },
    back() {
      this.hide = false;
    },
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {} // 内容改变事件
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
};
</script>
<style scoped>
.essential {
  padding: 20px;
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
  margin: 20px auto;
}
.imgurl img {
  width: 100%;
  height: 100%;
}
.footer-imformation {
  display: flex;
  justify-content: space-between;
}
.footer-imformation-title {
  display: flex;
  padding: 0 30px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-imformation-left {
  width: 45%;
  min-height: 400px;
}
.footer-imformation-right {
  width: 53%;
  min-height: 300px;
}
.contact-essential {
  margin: 20px 0;
}
.explain {
  font-size: 14px;
  color: #999;
}
.left {
  margin-left: 50px;
}
.flex-around {
  display: flex;
  justify-content: space-between;
}
.flex {
  display: flex;
  width: 1000px;
}
.personal-essential-table {
  width: 90%;
  margin: 20px auto;
}
.btn {
  color: dodgerblue;
  padding: 5px 10px;
  cursor: pointer;
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
  height: 40px;
  width: 1200px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.w-50 {
  width: 500px;
  margin-bottom: 0;
}
.w-51 {
  width: 500px;
}
.w-60 {
  width: 600px;
}
.border-r {
  border: 1px solid red;
}
.border {
  border: 1px solid #999;
}
.border-b {
  border-bottom: 1px solid #999;
}
.essential-heared {
  width: 100%;
  height: 50px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: rgb(8, 189, 189);
}
.source-essential {
  width: 100%;
  margin: 20px 0;
}
.source-essential-hear {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
}
</style>
