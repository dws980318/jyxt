<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/recruiting/teachIn/unchecked">项目活动审核 / 待审核</el-breadcrumb-item>
        <el-breadcrumb-item>申请信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <div class="el-notification__title form_title">申请信息</div>
        <el-form :model="information" label-width="120px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="户口性质：" prop="number">
            <p>{{information.number}}</p>
          </el-form-item>
          <el-form-item label="项目名称：" prop="proposer">
            <p>{{information.proposer}}</p>
          </el-form-item>
          <el-form-item label="项目类别：" prop="type">
            <p>{{information.type}}</p>
          </el-form-item>
          <el-form-item label="项目介绍：" prop="application">
            <p>{{information.application}}</p>
          </el-form-item>
          <el-form-item label="指导老师：" prop="applyTime">
            <p>{{information.applyTime}}</p>
          </el-form-item>
           <el-form-item label="报名形式：" prop="applyTime">
            <p>{{information.applyTime}}</p>
          </el-form-item>
           <el-form-item label="团队名称：" prop="applyTime">
            <p>{{information.applyTime}}</p>
          </el-form-item>
           <el-form-item label="团队成立时间：" prop="applyTime">
            <p>{{information.applyTime}}</p>
          </el-form-item>
          <el-form-item label="团队介绍：" prop="applyTime">
            <p>{{information.applyTime}}</p>
          </el-form-item>
          <el-form-item label="附件材料：" prop="applyTime">
            <p>{{information.applyTime}}</p>
          </el-form-item>
        </el-form>
      </div>



      <div class="toCheck" style="width:30%;height:160px;border-top:1px solid #ccc">
          <p>
            <span>审核入驻：</span>
              <el-radio v-model="radio" label="1">通过</el-radio>
              <el-radio v-model="radio" label="2">不通过</el-radio>
          </p>
          <p>
            <span>原因备注：</span>
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
          </p>
      </div>


      <div class="form">
        <el-button size="small" class="back" @click="$router.back(-1)">返回</el-button>
      </div>
    </div>
  </el-col>
</template>

<script>
import TinymceEditor from '@/components/tinymce-editor'
export default {
  name: 'Details',
  components: {
    TinymceEditor
  },
  data () {
    return {
      information: {},
      radio: '',
      textarea: '',
    }
  },
  watch: {
  },
  created () {
    this.port = this.$route.params.port
    if (this.$route.params.id) {
      this.loadObject(this.$route.params.id)
    }
  },
  methods: {
    loadObject (portId) {
      this.information = {
        id: 1,
        number: '2019001',
        proposer: '溜得滑',
        type: '首次申请',
        application: '广州XXXX公司',
        applyTime: '2019-04-15 12:00',
        open: true
      }
    },
    onSubmit () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.back {
    width: 80px;
      height: 38px;
      color: #23C6C8;
      background-color: #fff;
      border: 1px solid #23c6c8;
  }
  .breadcrumb{
    position: relative;
    width: 100%;
    height: 45px;
    padding-top: 20px;
  }
  .breadcrumb:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #42b983;
  }
  .form_title{
    padding: 10px 0;
  }
  .information {
    width: 880px;
    height: auto;
    padding: 0 10px 20px 10px;
  }
  .form {
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
  .el-form{
    padding: 10px 20px;
  }
  .toCheck p span {
    width: 100px;
    font-size: 14px;
  }
</style>
<style>
  .toCheck .el-dialog__title {
    font-size: 16px;
  }
  .toCheck .el-dialog__body {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-bottom: 20px;
  }
  .toCheck p {
    margin-top: 20px;
    display: flex;
    height: 28px;
    line-height: 28px;
  }
  .toCheck p .el-radio {
    line-height: 26px;
  }
  .toCheck .el-button:nth-of-type(1){
    color: #23C6C8;
    border: 1px solid #23c6c8;
  }
</style>