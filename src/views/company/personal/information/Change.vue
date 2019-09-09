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
        <el-form-item label="企业名称：" prop="company">
          <el-input type="text" v-model="information.company" placeholder="请输入企业名称"></el-input>
        </el-form-item>
        <el-form-item label="简称：" prop="abbr">
          <el-input type="text" v-model="information.abbr" placeholder="请输入简称"></el-input>
        </el-form-item>
        <el-form-item label="成立时间：" prop="creatTime">
          <el-date-picker
            v-model="information.creatTime"
            type="date"
            placeholder="请选择成立时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="单位性质：" prop="type">
          <el-select v-model="information.type" placeholder="请选择">
            <el-option
              v-for="item in fliter.type"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属行业：" prop="industry">
          <el-input type="text" v-model="information.industry" placeholder="请输入所属行业"></el-input>
        </el-form-item>
        <el-form-item label="注册资金：" prop="register">
          <el-input type="text" v-model="information.register" placeholder="请输入注册资金，单位“万”"><template slot="append">万</template></el-input>
        </el-form-item>
        <el-form-item label="企业规模：" prop="scale">
          <el-select v-model="information.scale" placeholder="请选择">
            <el-option
              v-for="item in fliter.scale"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="员工人数：" prop="number">
          <el-select v-model="information.number" placeholder="请选择">
            <el-option
              v-for="item in fliter.number"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="口号或标语：" prop="slogan">
          <el-input type="text" v-model="information.slogan" placeholder="请输入口号或标语"></el-input>
        </el-form-item>
        <el-form-item label="联系人：" prop="linkman">
          <el-input type="text" v-model="information.linkman" placeholder="请输入联系人"></el-input>
        </el-form-item>
        <el-form-item label="联系电话：" prop="linkphone">
          <el-input type="text" v-model="information.linkphone" placeholder="请输入联系电话"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
          <el-input type="text" v-model="information.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="传真号码：" prop="fax">
          <el-input type="text" v-model="information.fax" placeholder="请输入传真号码"></el-input>
        </el-form-item>
        <el-form-item label="其他号码：" prop="other">
          <el-input type="text" v-model="information.other" placeholder="请输入其他号码"></el-input>
        </el-form-item>
        <el-form-item label="网址：" prop="website">
          <el-input type="text" v-model="information.website" placeholder="请输入网址"></el-input>
        </el-form-item>
        <el-form-item label="所属地区：" prop="area">
          <el-input type="text" v-model="information.area" placeholder="请输入所属地区"></el-input>
        </el-form-item>
        <el-form-item label="详细地址：" prop="address">
          <el-input type="text" v-model="information.address" placeholder="请输入详细地址"></el-input>
        </el-form-item>
        <el-form-item label="标签：" prop="label">
          <el-input type="text" v-model="information.label" placeholder="请输入标签"></el-input>
        </el-form-item>
        <el-form-item label="详细介绍：" prop="content">
          <tinymce-editor v-model="information.content" ref="editor"></tinymce-editor>
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
import TinymceEditor from '@/components/tinymce-editor'

export default {
  name: 'Change',
  components: {
    TinymceEditor
  },
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
      fliter: {
        type: [
          {
            value: 1,
            label: '民营'
          }, {
            value: 2,
            label: '国企'
          }, {
            value: 3,
            label: '外企'
          }, {
            value: 4,
            label: '私营'
          }
        ],
        scale: [
          {
            value: 1,
            label: '天使轮'
          }, {
            value: 2,
            label: '小型'
          }, {
            value: 3,
            label: '中型'
          }, {
            value: 4,
            label: '大型'
          }
        ],
        number: [
          {
            value: 1,
            label: '0-20人'
          }, {
            value: 2,
            label: '20-50人'
          }, {
            value: 3,
            label: '50-100人'
          }, {
            value: 4,
            label: '100-200人'
          }, {
            value: 5,
            label: '200-500人'
          }, {
            value: 6,
            label: '500人以上'
          }
        ]
      },
      avator: userImg,
      information: {
        company: '广州XXXX公司',
        abbr: 'XXXX',
        creatTime: '2016-05-20',
        type: 2,
        industry: '计算机',
        register: '500',
        scale: 3,
        number: 5,
        slogan: '这是口号',
        linkman: '溜得滑',
        linkphone: '13579246810',
        email: '123456789@qq.com',
        fax: '020-13245678',
        other: '8208208820',
        website: 'www.xxxxx123.com',
        area: '广州市天河区',
        address: '广州市天河区XXXXXXXXXXXXX',
        label: '我是国企',
        content: '这是这个公司的详细介绍'
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
