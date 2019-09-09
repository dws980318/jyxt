<template>
  <el-col :span="24">
    <div class="information">
      <div style="margin-top:15px;">
        <div class="span">
          <span class="btn" @click="$router.back(-1)">
            <i class="fa fa-angle-double-left"></i>
            返回列表
          </span>
        </div>
        <div class="title">
          <h5>我要提问</h5>
        </div>
        <div class="form">
          <div style="width: 60%;margin: 0 auto;">
            <el-form
              :model="information"
              label-width="120px"
              :rules="rules"
              ref="ruleForm"
              class="demo-ruleForm"
            >
              <el-form-item label="问题标题：" prop="payment">
                <el-input type="text" v-model="information.payment" placeholder="请输入问题标题"></el-input>
              </el-form-item>
              <el-form-item label="问题内容：" prop="payment">
                <el-input
                  rows="10"
                  style="  width: 80%;margin-left: 20px;"
                  type="textarea"
                  v-model="information.content"
                  placeholder="请输入问题内容"
                ></el-input>
              </el-form-item>
              <el-form-item style="margin-left:20px;">
                <el-button size="small" type="primary" @click="onSubmit('ruleForm')">提交</el-button>
                <el-button size="small" @click="$router.push({ path: '/survey/proposal/list' })">取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      information: {
        payment: "",
        content: ""
      },
      rules: {}
    };
  },
  created() {
  },
  methods: {
    onSubmit() {
      let proposalFeedback = {
        pf_content: this.information.content,
        pf_usertype: 'Q',
        su_id: 5,
        pf_title: this.information.payment
      };
      this.api.addProposalFeedback(proposalFeedback).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.$message.success(res.inio);
          this.$router.push({ path: "/survey/proposal/list" });
        }
      });
    }
  }
};
</script>

<style scoped>
.information {
  width: 100%;
  height: auto;
  padding: 20px;
}
.information .span {
  position: fixed;
  z-index: 100;
  top: 64px;
  right: 20px;
  width: 100px;
  height: 30px;
}
.information .span span {
  background-color: #f8ac59;
  border-color: #f8ac59;
  color: #ffffff;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}
/* .fa-angle-double-left:before {
    content: "\f100";
} */
.btn {
  width: 100px;
  height: 30px;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.title {
  background-color: #ffffff;
  border-color: #e7eaec;
  -webkit-border-image: none;
  -o-border-image: none;
  border-image: none;
  border-style: solid solid none;
  border-width: 4px 0px 0;
  color: inherit;
  margin-bottom: 0;
  padding: 14px 15px 7px;
  min-height: 48px;
}
.title h5 {
  display: inline-block;
  font-size: 14px;
  margin: 0 0 7px;
  padding: 0;
  text-overflow: ellipsis;
}
.form {
  background-color: #ffffff;
  color: inherit;
  padding: 15px 20px 20px 20px;
  border-color: #e7eaec;
  -webkit-border-image: none;
  -o-border-image: none;
  border-image: none;
  border-style: solid solid none;
  border-width: 1px 0px;
}
.el-input {
  width: 80%;
  margin-left: 20px;
}
</style>
