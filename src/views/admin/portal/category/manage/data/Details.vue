<template>
  <el-col :span="24">
    <div class="information">
      <div class="form">
        <el-form :model="information" label-width="100px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="栏目：" prop="type">
            <el-select v-model="information.type" placeholder="请选择栏目">
              <el-option v-for="(item, index) in filter" :key="index" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="二级栏目：" prop="secondType">
            <el-select v-model="information.secondType" placeholder="请选择栏目">
              <el-option v-for="(item, index) in filter" :key="index" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="标题：" prop="title">
            <el-input type="text" v-model="information.title" placeholder="请输入标题"></el-input>
          </el-form-item>
          <el-form-item label="发布时间">
            <el-date-picker type="date" placeholder="请选择日期" v-model="information.date" style="width: 250px"></el-date-picker>
          </el-form-item>
          <el-form-item label="排序：" prop="sort">
            <el-input v-model="information.sort" placeholder="请输入排序"></el-input>
          </el-form-item>
          <el-form-item label="附件资料" prop="upload">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <div slot="tip" class="el-upload__tip">目前仅支持pdf格式文件</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="状态：" prop="open">
            <el-radio-group v-model="information.open">
              <el-radio label="发布"></el-radio>
              <el-radio label="下架"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item size="large">
            <el-button size="small" class="btnBg" @click="onSubmit">提交保存</el-button>
            <el-button size="small" @click="$router.back(-1)">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-col>
</template>

<script>
import TinymceEditor from '@/components/tinymce-editor'
export default {
  name: 'Details',
  components: {
    TinymceEditor
  },
  data () {
    return {
      imageUrl: '',
      port: '',
      filter: [
        {
          id: 1,
          name: '学生事务'
        }
      ],
      information: {
        type: 1,
        secondType: 1,
        open: true,
      }
    }
  },
  watch: {
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
        type: '资料下载',
        secondType: 1,
        title: '这是新闻标题',
        sort: 3,
        open: false,
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
      console.log(this.information.content)
      // this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .btnBg {
    color: #fff;
    background-color: #23C6C8;
  }
  .el-select,
  .el-input {
    width: 250px;
  }
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
    width: 880px;
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
    width: 180px;
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
