<template>
  <div class="information">
    <div class="form">
      <el-form :model="information" label-width="120px" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="原始密码：" prop="oldPass">
          <el-input type="password" v-model="information.oldPass" placeholder="请输入原始密码" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" prop="password">
          <el-input type="password" v-model="information.password" placeholder="请输入新密码" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPass">
          <el-input type="password" v-model="information.checkPass" placeholder="请再次输入新密码" auto-complete="off"></el-input>
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
    var oldPass = (rule, value, callback) => {
      console.log(value === '')
      if (value === '') {
        callback(new Error('请输入原始密码'))
      } else if (value !== 'company') {
        callback(new Error('原始密码输入错误，请重新输入'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.information.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.information.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      information: {
        oldPass: '',
        password: '',
        checkPass: ''
      },
      rules: {
        oldPass: [
          { required: true, validator: oldPass, trigger: 'blur' },
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' },
          { pattern: /^(\w){5,16}$/, message: '只能输入5-16个字母、数字、下划线' }
        ],
        checkPass: [
          { required: true, validator: checkPass, trigger: 'change' }
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
