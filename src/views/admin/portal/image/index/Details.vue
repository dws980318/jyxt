<template>
  <el-col :span="24">
    <div class="information">
      <div class="form">
        <el-form :model="information" label-width="120px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="栏目：" prop="type">
            <el-select v-model="information.type" placeholder="请选择栏目">
              <el-option v-for="(item, index) in filter" :key="index" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="标题：" prop="title">
            <el-input type="text" v-model="information.title" placeholder="请输入标题"></el-input>
          </el-form-item>
          <el-form-item label="图片：" prop="image">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="information.image" :src="information.image" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="链接地址：" prop="path">
            <el-input v-model="information.path" placeholder="请输入链接地址"></el-input>
          </el-form-item>
          <el-form-item label="排序：" prop="sort">
            <el-input v-model="information.sort" placeholder="请输入排序"></el-input>
          </el-form-item>
          <el-form-item label="状态：" prop="open">
              <el-switch v-model="information.open" active-color="#13ce66" inactive-color="#999"></el-switch>
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
      port: '',
      filter: [
        {
          id: 1,
          name: '首页'
        }
      ],
      information: {
        type: 1,
        open: true
      }
    }
  },
  created () {
    this.port = this.$route.params.port
    if (this.$route.params.id) {
      this.loadObject(this.$route.params.id)
    }
  },
  methods: {
    loadObject (portId) {
      this.information = {
        id: portId,
        type: 1,
        title: '这是首页轮播图标题',
        image: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
        path: 'http://image.zhangxinxu.com/image/blog/201204/2012-04-24_211852.png',
        sort: 3,
        open: false
      }
    },
    handleAvatarSuccess (res, file) {
      this.information.image = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    onSubmit () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .breadcrumb{
    position: relative;
    width: 100%;
    height: 45px;
    padding-top: 10px;
  }
  .breadcrumb:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #42b983;
  }
  .to_back{
    cursor: pointer;
    font-size: 14px;
    color: #0d8e52;
    line-height: 35px;
  }
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
  .el-upload {
    border: 1px dashed #000;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 270px;
    height: 180px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 270px;
    height: 180px;
    display: block;
  }
</style>
