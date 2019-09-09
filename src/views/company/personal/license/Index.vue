<template>
  <div id="information">
    <div class="information bg border">
      <div class="box-title border-b">
        <div>工商注册信息</div>
      </div>
      <div class="information-content">
        <div class="form">
          <el-form label-width="120px" class="demo-ruleForm">
            <el-form-item label="证件号码：" prop="identify">
              <el-input v-model="information.identify"></el-input>
              <div class="explain">
                <div>
                  <i class="el-icon-warning"></i> 统一社会信用代码、营业执照号码或组织机构代码
                </div>
                <div>
                  <i class="el-icon-warning"></i> 不含“-”号，仅由字母和数字组成
                </div>
              </div>
            </el-form-item>
            <el-form-item label="成立时间：" prop="creatTime">
              <el-date-picker
                value-format="yyyy-MM-dd"
                v-model="information.creatTime"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <!-- <el-input v-model="information.creatTime"></el-input> -->
              <div class="explain">
                <div>
                  <i class="el-icon-warning"></i> 与证件成立日期一致
                </div>
              </div>
            </el-form-item>
            <el-form-item label="证件图片：" prop="nickname">
              <div class="avator">
                <div class="avator_main">
                  <img :src="information.avator" alt />
                </div>
              </div>
            </el-form-item>
            <el-form-item prop="upload">
              <el-upload
                action="/fileupload"
                :limit="1"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <el-button type="info" size="small">上传图片</el-button>
                <div slot="tip" class="el-upload__tip">可上传营业执照或组织机构代码证</div>
              </el-upload>
            </el-form-item>
            <el-form-item prop="upload">
              <el-upload
                action="/fileupload"
                :limit="1"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <el-input v-model="number">
                  <el-button slot="append" type="info" size="small">浏览</el-button>
                </el-input>
                <div slot="tip" class="el-upload__tip">允许的图片格式：jpg / gif / bmp / png；大小限制：2M</div>
              </el-upload>
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
import userImg from "@/common/images/slide.jpg";
import "../../../../common/css/student/style.css";
export default {
  name: "Info",
  data() {
    return {
      number: "",
      time: "",
      information: {
        avator: userImg,
        identify: "6546546516546543213",
        creatTime: "2016-05-20"
      }
    };
  },
  created() {},
  methods: {
    toChange() {
      this.$router.push("/personal/license/change");
    },
    handleAvatarSuccess(res, file) {
      this.information.avator = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt1M) {
        this.$message.error("上传头像图片大小不能超过 1MB!");
      }
      return isJPG && isLt1M;
    },
    //企业营业执照提交接口
    open() {
      let businessLicenseVO = {
        bl_creationtime: this.information.creatTime,
        // bl_img: '',
        bl_number: this.information.identify,
        coi_id: 1
      };
      this.api.insertBusinessLicense(businessLicenseVO).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.$message.success(res.inio);
        } else {
          this.$message.error(res.inio);
        }
      });
    }
  }
};
</script>

<style scoped>
.el-input-group--append .el-input__inner {
  width: 500px;
}
#information {
  margin: 20px 10px;
}
.information-content {
  width: 900px;
  height: auto;
  padding: 20px 10px;
}
.avator {
  width: 100%;
  height: auto;
}
.avator_main {
  width: 640px;
  height: auto;
}
.avator_main img {
  width: 100%;
  height: 100%;
}
.form {
  width: 100%;
  height: auto;
  padding: 10px 0;
}
</style>
