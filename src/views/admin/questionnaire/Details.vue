<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/questionnaire">调查问卷设置</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.params.id? '编辑':'新建'}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <el-form :model="information" label-width="120px" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="问卷名称：" prop="name">
            <el-input type="text" v-model="information.name" placeholder="请输入问卷名称"></el-input>
          </el-form-item>
          <el-form-item label="问卷时间：" prop="time">
            <el-date-picker
              v-model="information.time"
              type="datetime"
              placeholder="请选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="问卷链接：" prop="link">
            <el-input type="text" v-model="information.link" placeholder="请输入问卷链接"></el-input>
          </el-form-item>
          <el-form-item size="large">
            <el-button size="small" class="btnBg" @click="onSubmit">提交保存</el-button>
            <el-button size="small" @click="$router.back(-1)">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      information: {
      },
      rules: {
      }
    }
  },
  created () {
    if (this.$route.params.id) {
      this.loadObject(this.$route.params.id)
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    loadObject (adminId) {
      this.information = {
        id: adminId,
        name: '模板1',
        versions: 'v1.0',
        link: '溜得滑',
        time: '2019-05-02',
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
.btnBg {
    color: #fff;
    background-color:#23C6C8;
    border: none;
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
  .information{
    width: 400px;
    height: auto;
    padding: 20px 10px;
  }
  .el-date-editor--datetime {
    width: 100%;
  }
  .form{
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
</style>
