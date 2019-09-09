<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/account/admin">管理员账号管理</el-breadcrumb-item>
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
          <el-form-item label="姓名：" prop="name">
            <el-input v-model="information.name" placeholder="请输入真实姓名"></el-input>
          </el-form-item>
          <el-form-item label="权限：" prop="power">
            <el-col :span="24">
              <el-tree ref="tree" :data="powerList" node-key="id" :default-checked-keys="information.power" show-checkbox default-checked-all :props="props" @check-change="handleCheckChange"></el-tree>
            </el-col>
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
      powerList: [
        {
          id: 1,
          name: '账号管理',
          children: [
            {
              id: '1-1',
              name: '企业账号管理'
            },
            {
              id: '1-2',
              name: '学生账号管理'
            },
            {
              id: '1-3',
              name: '企业账号管理'
            },
            {
              id: '1-4',
              name: '老师账号管理'
            },
            {
              id: '1-5',
              name: '咨询师账号管理'
            }
          ]
        },
        {
          id: 2,
          name: '门户信息管理',
          children: [
            {
              id: '2-1',
              name: '图片管理'
            },
            {
              id: '2-2',
              name: '栏目信息发布管理'
            },
            {
              id: '2-3',
              name: '活动日历管理'
            }
          ]
        },
        {
          id: 3,
          name: '企业管理',
          children: [
            {
              id: '3-1',
              name: '企业信息管理'
            },
            {
              id: '3-2',
              name: '在线职位招聘管理'
            },
            {
              id: '3-3',
              name: '企业入驻管理'
            },
            {
              id: '3-4',
              name: '企业介绍模板管理'
            }
          ]
        },
        {
          id: 4,
          name: '招聘宣讲管理',
          children: [
            {
              id: '4-1',
              name: '宣讲会管理'
            },
            {
              id: '4-2',
              name: '供需见面会管理'
            },
            {
              id: '4-3',
              name: '就业活动管理'
            }
          ]
        },
        {
          id: 5,
          name: '学生管理',
          children: [
            {
              id: '5-1',
              name: '学生信息管理'
            },
            {
              id: '5-2',
              name: '学生应聘管理'
            },
            {
              id: '5-3',
              name: '学生简历管理'
            },
            {
              id: '5-4',
              name: '学生事务审核管理'
            }
          ]
        },
        {
          id: 6,
          name: '咨询师管理',
          children: [
            {
              id: '6-1',
              name: '咨询师信息管理'
            },
            {
              id: '6-2',
              name: '预约咨询管理'
            }
          ]
        },
        {
          id: 7,
          name: '课程管理',
          children: [
            {
              id: '7-1',
              name: '就业课程'
            },
            {
              id: '7-2',
              name: '老师信息管理'
            }
          ]
        },
        {
          id: 8,
          name: '职业评测管理'
        },
        {
          id: 9,
          name: '项目活动管理'
        },
        {
          id: 10,
          name: '调查问卷设置'
        }
      ],
      information: {
        power: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      },
      rules: {
        nickname: [
          { type: 'string', required: true, message: '请输入账号类型', trigger: 'blur' }
        ],
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' },
          { pattern: /^(\w){5,16}$/, message: '只能输入5-16个字母、数字、下划线' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' },
          { pattern: /^(\w){5,16}$/, message: '只能输入5-16个字母、数字、下划线' }
        ],
        name: [
          { type: 'string', message: '请输入真实姓名', trigger: 'change' }
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
    console.log(this.$refs.tree.getCheckedKeys())
  },
  computed: {
  },
  methods: {
    handleCheckChange (data) {
      console.log(this.$refs.tree.getCheckedKeys())
    },
    loadObject (adminId) {
      this.information = {
        id: adminId,
        nickname: '超级管理员',
        account: 'admin',
        password: 'admin',
        checkPass: 'admin',
        name: '溜得滑',
        power: [1, 2, 3, 4]
      }
    },
    onSubmit () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
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
