<template>
  <div class="information">
    <div class="form">
      <el-form :model="information" label-width="120px" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="账号：" prop="account">
          <p>{{information.account}}</p>
        </el-form-item>
        <el-form-item label="真实姓名：" prop="name">
          <el-input type="text" v-model="information.name" placeholder="请输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机：" prop="phone">
          <el-input type="text" v-model="information.phone" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="QQ：" prop="qq">
          <el-input type="text" v-model="information.qq" placeholder="请输入qq号码"></el-input>
        </el-form-item>
        <el-form-item label="联系电话：" prop="fax">
          <el-input type="text" v-model="information.fax" placeholder="请输入联系电话"></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" size="small" @click="onSubmit">确认修改</el-button>
          <el-button size="small" @click="$router.back(-1)">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Change',
  data () {
    return {
      information: {
        account: 'company',
        name: '溜得滑',
        phone: '13579246810',
        qq: '123456789',
        fax: '020-12345678'
      },
      rules: {
        name: [
          { required: true, type: 'string', message: '请输入真实姓名', trigger: 'change' }
        ],
        phone: [
          {required: true, message: '请输入手机号码', trigger: 'blur'},
          {pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号'}
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
  },
  methods: {
    onSubmit () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .information{
    width: 900px;
    height: auto;
    padding: 20px 10px;
  }
  .avator{
    width: 100%;
    height: 80px;
  }
  .avator_main{
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .avator_main img{
    width: 100%;
    height: 100%;
  }
  .avator_main button{
    margin: auto;
  }
  .form{
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
</style>
