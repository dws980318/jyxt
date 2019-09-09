<template>
  <div class="information">
    <div class="form">
      <el-form label-width="120px" class="demo-ruleForm">
        <el-form-item label="账号：" prop="account">
          <p>{{information.account}}</p>
        </el-form-item>
        <el-form-item label="真实姓名：" prop="name">
          <p>{{information.name}}</p>
        </el-form-item>
        <el-form-item label="手机：" prop="phone">
          <p>{{information.phone}}</p>
        </el-form-item>
        <el-form-item label="QQ：" prop="qq">
          <p>{{information.qq}}</p>
        </el-form-item>
        <el-form-item label="联系电话：" prop="fax">
          <p>{{information.fax}}</p>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="success" @click="changeInfo()">编辑信息</el-button>
          <el-button size="small" type="primary" @click="changePassword()">修改密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      information: {
        account: 'company',
        name: '溜得滑',
        phone: '13579246810',
        qq: '123456789',
        fax: '020-12345678'
      }
    }
  },
  created () {
  },
  methods: {
    changeInfo () {
      this.$router.push('/account/info')
    },
    changePassword () {
      this.$router.push('/account/password')
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
