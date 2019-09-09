<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/template">企业介绍模板管理</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.params.id? '编辑':'新建'}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <el-form :model="information" label-width="120px" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="模板名称：" prop="name">
            <el-input type="text" v-model="information.nickname" placeholder="请输入模板名称"></el-input>
          </el-form-item>
          <el-form-item label="版本号：" prop="versions">
            <el-input type="text" v-model="information.account" placeholder="请输入版本号"></el-input>
          </el-form-item>
          <el-form-item label="作者：" prop="author">
            <el-input type="text" v-model="information.password" placeholder="请输入作者"></el-input>
          </el-form-item>
          <el-form-item label="审核情况：" prop="open">
            <el-switch v-model="information.open" active-color="#13ce66" inactive-color="#999"></el-switch>
          </el-form-item>
          <el-form-item size="large">
            <el-button size="small" type="primary" @click="onSubmit">提交</el-button>
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
        author: '溜得滑',
        updateTime: '2019-05-02',
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
    width: 600px;
    height: auto;
    padding: 20px 10px;
  }
  .form{
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
</style>
