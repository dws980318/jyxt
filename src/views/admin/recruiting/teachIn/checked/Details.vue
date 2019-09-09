<template>
  <el-col :span="24">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/recruiting/teachIn/checked">已审核列表</el-breadcrumb-item>
        <el-breadcrumb-item>查看</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <div class="form">
        <div class="el-notification__title form_title">基本信息</div>
        <el-form :model="information" label-width="100px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="宣讲会标题：" prop="title">
            <p>{{information.title}}</p>
          </el-form-item>
          <el-form-item label="宣讲企业：" prop="title">
            <p>{{information.company}}</p>
          </el-form-item>
          <el-form-item label="开始时间：" prop="title">
            <p>{{information.startTime}}</p>
          </el-form-item>
          <el-form-item label="结束时间：" prop="title">
            <p>{{information.endTime}}</p>
          </el-form-item>
          <el-form-item label="活动地点：" prop="title">
            <p>{{information.place}}</p>
          </el-form-item>
          <el-form-item label="报名人数：" prop="title">
            <p>{{information.place}}</p>
          </el-form-item>
          <el-form-item label="发布状态：" prop="open">
            <el-switch v-model="information.open" active-color="#13ce66" inactive-color="#999"></el-switch>
          </el-form-item>
        </el-form>
      </div>
      <div class="form">
        <div class="el-notification__title form_title">联系信息</div>
      </div>
      <div class="form">
        <div class="el-notification__title form_title">学生报名设置</div>
      </div>
      <div class="form">
        <div class="el-notification__title form_title">发票信息</div>
      </div>
      <div class="form">
        <div class="el-notification__title form_title">活动内容</div>
      </div>
      <div class="form">
        <div class="el-notification__title form_title">报名情况</div>
      </div>
      <div class="form">
        <el-button size="small" type="primary" @click="onSubmit">确定</el-button>
        <el-button size="small" @click="$router.back(-1)">取消</el-button>
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
      information: {}
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
        id: 1,
        title: '这是宣讲会的标题',
        company: '这是举行宣讲会公司',
        startTime: '2019-04-15 10:00',
        endTime: '2019-04-15 12:00',
        place: '这是宣讲会的地点'
      }
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
    padding-top: 20px;
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
  .form_title{
    padding: 10px 0;
  }
  .information {
    width: 880px;
    height: auto;
    padding: 0 10px 20px 10px;
  }
  .form {
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
  .el-form{
    padding: 10px 20px;
  }
</style>
