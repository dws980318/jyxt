<template>
  <el-col :span="24">
    <div style="padding:20px 0 0 0;" class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/subujest/protocol/unchecked">就业课程管理</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.params.id? '编辑':'新建'}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <el-form
          :model="information"
          label-width="120px"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="课程名称" prop="nickname">
            <el-input type="text" v-model="information.nickname" placeholder="请输入课程名称"></el-input>
          </el-form-item>
          <el-form-item label="课程类型" prop="account">
            <el-select v-model="information.account" placeholder="请选择课程类型">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="el-from-box" label="学分：" prop="password">
            <el-input class="el-inp1" type="text" v-model="information.password"></el-input>
            <el-input class="el-inp2" type="text" v-model="information.password"></el-input>
          </el-form-item>
          <el-form-item label="总课时：" prop="name">
            <el-input v-model="information.name" placeholder="请输入总课时"></el-input>
          </el-form-item>
          <el-form-item label="课程教师：" prop="phone">
            <el-input v-model="information.phone" placeholder="请输入课程教师"></el-input>
          </el-form-item>
          <el-form-item label="教师工号：" prop="qq">
            <el-input v-model="information.qq" placeholder="请输入教师工号"></el-input>
          </el-form-item>
          <el-form-item label="课程介绍：" prop="email">
            <el-input
              class="personal_info"
              type="textarea"
              v-model="information.email"
              placeholder="请输入介绍"
              resize="none"
            ></el-input>
          </el-form-item>
          <el-form-item label="其他说明" prop="fixedLine">
            <el-input
              class="personal_info"
              type="textarea"
              v-model="information.fixedLine"
              placeholder="请输入介绍"
              resize="none"
            ></el-input>
          </el-form-item>
          <el-form-item size="large">
            <el-button size="small" type="primary" @click="onSubmit('ruleForm')">提交</el-button>
            <el-button size="small" @click="$router.back(-1)">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "Details",
  data() {
    var checkFixedLine = (rule, value, callback) => {
      var isMobilePhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
      var isFixMob = /^1[34578]\d{9}$/;
      if (!value) {
        callback(
          new Error("请输入固定电话或手机号码，固定电话格式：区号-号码")
        );
      } else if (!isFixMob.test(value) && !isMobilePhone.test(value)) {
        callback(
          new Error("请输入正确电话号码或手机号码，固定电话格式：区号-号码")
        );
      } else {
        callback();
      }
    };
    return {
      information: {},
      rules: {
        nickname: [
          {
            type: "string",
            required: true,
            message: "请输入",
            trigger: "blur"
          }
        ],
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        name: [
          {
            required: true,
            type: "string",
            message: "请输入",
            trigger: "change"
          }
        ],
        phone: [
          {
            required: true,
            message: "请输入",
            trigger: "blur"
          }
        ],
        qq: [{ required: true, message: "请输入", trigger: "blur" }],
        email: [
          { required: true, message: "请输入", trigger: "blur" },
        ],
        fixedLine: [
          { required: true, validator: checkFixedLine, trigger: "blur" }
        ]
      },
      props: {
        label: "name",
        children: "children"
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  created() {
    if (this.$route.params.id) {
      this.loadObject(this.$route.params.id);
    }
  },
  mounted() {},
  computed: {},
  methods: {
    loadObject(studentId) {
      this.information = {
        id: studentId,
        nickname: "老师",
        account: "admin",
        password: "admin",
        name: "溜得滑",
        phone: "13579246810",
        qq: "123456789",
        email: "123456789@qq.com",
        fixedLine: "020-12345678",
        introduction: "这是老师个人介绍"
      };
    },
    onSubmit(formName) {
      this.$router.go(-1);
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
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
.el-select {
  width: 100%;
}
.el-from-box {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
}
.el-inp1 {
  width: 49%;
}
.el-inp2 {
  width: 50%;
}
</style>
