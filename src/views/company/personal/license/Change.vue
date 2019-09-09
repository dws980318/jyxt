<template>
  <div class="information">
    <div class="form">
      <el-form :model="information" label-width="120px" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="证件号码：" prop="identify">
          <el-input type="text" v-model="information.identify" placeholder="请输入证件号码"></el-input>
        </el-form-item>
        <el-form-item label="证件图片：" prop="nickname">
          <div class="avator">
            <div class="avator_main">
              <img :src="information.avator" alt="">
            </div>
          </div>
        </el-form-item>
        <el-form-item prop="upload">
          <el-upload action="/fileupload" :limit="1" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <el-button type="info" size="small">上传图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg文件，且不超过1MB</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="成立时间：" prop="creatTime">
          <el-date-picker
            v-model="information.creatTime"
            type="date"
            placeholder="请选择成立时间">
          </el-date-picker>
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
import userImg from '@/common/images/slide.jpg'
import Img from '@/common/images/logo.png'
import TinymceEditor from '@/components/tinymce-editor'

export default {
  name: 'Change',
  components: {
    TinymceEditor
  },
  data () {
    return {
      information: {
        avator: Img
      }
    }
  },
  computed: {
  },
  created () {
    this.information = {
      avator: userImg,
      identify: '546541321321654',
      creatTime: '2016-05-20'
    }
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
    height: auto;
  }
  .avator_main{
    width: 640px;
    height: auto;
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
