<template>
  <div class="information">
    <div class="form">
      <el-form :model="information" label-width="120px" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="头像：" prop="nickname">
          <div class="avator">
            <div class="avator_main">
              <img :src="avator" alt="">
            </div>
          </div>
        </el-form-item>
        <el-form-item prop="upload">
          <el-upload action="/fileupload" :limit="1" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <el-button type="info" size="small">上传头像</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg文件，且不超过1MB</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="账号类型：" prop="nickname">
          <p>{{information.nickname}}</p>
        </el-form-item>
        <el-form-item label="账号：" prop="account">
          <p>{{information.account}}</p>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input type="password" v-model="information.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="information.checkPass" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="information.name" placeholder="请输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号码：" prop="phone">
          <el-input v-model="information.phone" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
          <el-input v-model="information.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="个人介绍：" prop="personal">
          <el-input class="personal_info" type="textarea" v-model="information.personal" placeholder="个人介绍" resize="none"></el-input>
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
import userImg from '@/common/images/user.png'

export default {
  name: 'Change',
  data () {
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
      avator: userImg,
      information: {
        nickname: '超级管理员',
        account: 'admin',
        password: 'admin',
        checkPass: 'admin',
        name: '溜得滑',
        phone: '13579246810',
        email: '123456789@qq.com',
        personal: '这是一个很叼很叼的角色，用来管理任何东西'
      },
      rules: {
        password: [
          { required: true, validator: validatePass, trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' },
          { pattern: /^(\w){5,16}$/, message: '只能输入5-16个字母、数字、下划线' }
        ],
        checkPass: [
          { required: true, validator: checkPass, trigger: 'blur' }
        ],
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
    handleAvatarSuccess (res, file) {
      this.information.avator = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt1M = file.size / 1024 / 1024 < 1
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt1M) {
        this.$message.error('上传头像图片大小不能超过 1MB!')
      }
      return isJPG && isLt1M
    },
    onSubmit () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .information{
    width: 100%;
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
