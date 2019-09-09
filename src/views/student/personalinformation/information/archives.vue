<template>
  <div class="archives">
    <div class="archives-content bg">
      <div class="source-information-hear border-b">派遣信息</div>
      <div class="archives-content-table">
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <div class="flex-ar">
            <el-form-item class="w-50" label="档案接收单位">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="联系人">
              <el-input v-model="formLabelAlign.contacts"></el-input>
            </el-form-item>
          </div>
          <div class="flex-ar">
            <el-form-item class="w-50" label="档案接收地址">
              <el-input v-model="formLabelAlign.adress"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="联系电话">
              <el-input v-model="formLabelAlign.phone"></el-input>
            </el-form-item>
          </div>
          <div class="flex-ar">
            <el-form-item class="w-50" label="档案接收地区">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="寄送时间">
              <el-date-picker
                v-model="formLabelAlign.time"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期时间"
              ></el-date-picker>
              <!-- <el-input v-model="formLabelAlign.time"></el-input> -->
            </el-form-item>
          </div>
          <div class="flex-ar">
            <el-form-item class="w-50" label="邮政编码">
              <el-input v-model="formLabelAlign.code"></el-input>
            </el-form-item>
            <el-form-item class="w-50" label="交寄单号">
              <el-input v-model="formLabelAlign.number"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
    <div class="upload bg">
      <el-button type="primary" @click="archives" icon="el-icon-check">提交</el-button>
    </div>
  </div>
</template>

<script>
import "../../../../common/css/student/style.css";
export default {
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        region: "",
        number: "",
        time: "",
        code: "",
        phone: "",
        adress: "",
        contacts: ""
      }
    };
  },
  methods: {
    archives() {
      const chives = new FormData();
      chives.append("unitName", this.formLabelAlign.name);
      chives.append("unitAddress", this.formLabelAlign.adress);
      chives.append("unitRegion", this.formLabelAlign.region);
      chives.append("postcode", this.formLabelAlign.code);
      chives.append("postName", this.formLabelAlign.contacts);
      chives.append("phone", this.formLabelAlign.phone);
      chives.append("sendTime", this.formLabelAlign.time);
      chives.append("sendNum", this.formLabelAlign.number);
      this.api
        .addarchives(chives)
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
    }
  }
};
</script>

<style>
.flex-ar {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.w-50 {
  width: 500px;
}
.archives {
  padding: 20px;
}
.archives-content-table {
  width: 100%;
  padding: 30px 0;
}
.border-b {
  border-bottom: 1px solid #999;
}
.source-information-hear {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
}
</style>
