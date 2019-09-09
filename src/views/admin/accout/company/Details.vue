<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/account/company">企业账号管理</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.params.id? '编辑':'新建'}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <el-form :model="information" label-width="120px" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="账号类型：" prop="nickname">
            <el-input type="text" v-model="information.nickname" placeholder="请输入账号类型"></el-input>
          </el-form-item>
          <el-form-item label="账号：" prop="account">
            <el-input type="text" v-model="information.account" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input type="text" v-model="information.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="企业名称：" prop="name">
            <el-input v-model="information.name" placeholder="请输入企业名称"></el-input>
          </el-form-item>
          <el-form-item label="企业性质：" prop="property">
            <el-select v-model="information.property" placeholder="请选择账号类型">
              <el-option v-for="(item, index) in filter.property" :key="index" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系人：" prop="linkman">
            <el-input v-model="information.linkman" placeholder="请输入联系人"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" prop="phone">
            <el-input v-model="information.phone" placeholder="请输入联系电话或手机，固定电话：区号-号码"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：" prop="email">
            <el-input v-model="information.email" placeholder="请输入电子邮箱"></el-input>
          </el-form-item>
          <el-form-item label="介绍：" prop="introduction">
            <el-input class="personal_info" type="textarea" v-model="information.introduction" placeholder="请输入介绍" resize="none"></el-input>
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
    var checkFixedLine = (rule, value, callback) => {
      var isMobilePhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/
      var isFixMob = /^1[34578]\d{9}$/
      if (!value) {
        callback(new Error('请输入固定电话或手机号码，固定电话格式：区号-号码'))
      } else if (!isFixMob.test(value) && !isMobilePhone.test(value)) {
        callback(new Error('请输入正确电话号码或手机号码，固定电话格式：区号-号码'))
      } else {
        callback()
      }
    }
    return {
      filter: {
        property: [
          {
            id: 1,
            name: '民营'
          },
          {
            id: 2,
            name: '国企'
          }
        ]
      },
      information: {
        property: 1
      },
      rules: {
        nickname: [
          {type: 'string', required: true, message: '请输入账号类型', trigger: 'blur'}
        ],
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          {min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur'},
          {pattern: /^(\w){5,16}$/, message: '只能输入5-16个字母、数字、下划线'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur'},
          {pattern: /^(\w){5,16}$/, message: '只能输入5-16个字母、数字、下划线'}
        ],
        name: [
          { required: true, message: '请输入企业姓名', trigger: 'blur' }
        ],
        linkman: [
          { required: true, type: 'string', message: '请输入联系人', trigger: 'change' }
        ],
        phone: [
          {required: true, validator: checkFixedLine, trigger: 'blur'}
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ]
      },
      props: {
        label: 'name',
        children: 'children'
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
  watch: {
    // property (newVal, oldVal) {
    //   console.log(newVal)
    // }
  },
  computed: {},
  methods: {
    loadObject (studentId) {
      this.information = {
        id: studentId,
        nickname: '企业',
        account: 'admin',
        password: 'admin',
        name: '广州XXX有限公司',
        property: 2,
        linkman: '溜得滑',
        phone: '020-12345678',
        email: '123456789@qq.com',
        introduction: '这是广州XXX有限公司的企业介绍'
      }
    },
    onSubmit () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .information {
    width: 600px;
    height: auto;
    padding: 20px 10px;
  }

  .form {
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
</style>
