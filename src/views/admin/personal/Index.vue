<template>
  <div class="information">
    <div class="form">
      <el-form label-width="120px" class="demo-ruleForm">
        <el-form-item label="头像：" prop="nickname">
          <div class="avator">
            <div class="avator_main">
              <img :src="information.avator" alt="">
            </div>
          </div>
        </el-form-item>
        <el-form-item label="账号类型：" prop="nickname">
          <p>{{information.nickname}}</p>
        </el-form-item>
        <el-form-item label="账号：" prop="account">
          <p>{{information.account}}</p>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <p>{{information.password}}</p>
        </el-form-item>
        <el-form-item label="姓名：" prop="name">
          <p>{{information.name}}</p>
        </el-form-item>
        <el-form-item label="手机号码：" prop="phone">
          <p>{{information.phone}}</p>
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
          <p>{{information.email}}</p>
        </el-form-item>
        <el-form-item label="个人介绍：" prop="personal">
          <p>{{information.personal}}</p>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="success" @click="toChange()">编辑资料</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import userImg from '@/common/images/user.png'

export default {
  name: 'Info',
  data () {
    return {
      information: {
        avator: userImg,
        nickname: '超级管理员',
        account: 'admin',
        password: 'admin',
        name: '溜得滑',
        phone: '13579246810',
        email: '123456789@qq.com',
        personal: '这是一个很叼很叼的角色，用来管理任何东西'
      }
    }
  },
  created () {
  },
  methods: {
    toChange () {
      this.$router.push('/personal/change')
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
  .form{
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
</style>
