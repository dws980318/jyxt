<template>
  <div class="information">
    <div class="information-content">
      <div class="form">
        <el-form label-width="120px" class="demo-ruleForm">
          <el-form-item label="发票抬头：" prop="invi_rise">
            <el-input type="text" v-model="information.invi_rise" placeholder="请输入发票抬头"></el-input>
          </el-form-item>
          <el-form-item label="纳税人识别号：" prop="invi_identi">
            <el-input type="text" v-model="information.invi_identi" placeholder="请输入纳税人识别号"></el-input>
            <div class="explain">
                <i class="el-icon-warning"></i> 根据国税总局通知，2017年7月1日起，购买人开具企业发票，还需提供公司纳税人识别号(即"税号")或统一社会信用代码，否则将不得作为税收凭证用于办理涉税业务
              </div>
          </el-form-item>
          <el-form-item label="发票注册地址：" prop="invi_address">
            <el-input type="text" v-model="information.invi_address" placeholder="请输入发票注册地址"></el-input>
            <div class="explain-r">
                <i class="el-icon-caret-top"></i> 固话格式为“区号-号码”或者“区号-号码-分机”
              </div>
          </el-form-item>
          <el-form-item label="开户银行：" prop="invi_bank">
            <el-input type="text" v-model="information.invi_bank" placeholder="请输入开户银行"></el-input>
            <div class="explain-r">
                <i class="el-icon-caret-top"></i> 注明开户的支行
              </div>
          </el-form-item>
          <el-form-item label="开户账号：" prop="invi_account">
            <el-input type="text" v-model="information.invi_account" placeholder="请输入开户账号"></el-input>
          </el-form-item>
          <el-form-item size="large">
            <!-- <el-button type="primary" size="small" @click="onSubmit">确认修改</el-button>
            <el-button size="small" @click="$router.back(-1)">取消</el-button>-->
          </el-form-item>
        </el-form>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Change",
  data() {
    return {
      information: {
        invi_rise: "广州XXXX公司",
        invi_identi: "959789SDFS4D887564SD65F4654",
        invi_bank: "广州XXXX银行",
        invi_address: "广州天河区XXXXXXXXXX",
        invi_account: "4654651321879845454631"
      }
    };
  },
  created() {
    this.getMessage();
  },
  methods: {
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
    onSubmit() {
      this.$router.go(-1);
    },
    getMessage() {
      this.$emit('getMessage', this.information)
    }
  }
};
</script>

<style scoped>
.information {
  margin: 20px;
}
.information-content {
  width: 900px;
  height: auto;
}
.avator {
  width: 100%;
  height: 80px;
}
.avator_main {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.avator_main img {
  width: 100%;
  height: 100%;
}
.avator_main button {
  margin: auto;
}
.form {
  width: 100%;
  height: auto;
  padding: 10px 0;
}
</style>
