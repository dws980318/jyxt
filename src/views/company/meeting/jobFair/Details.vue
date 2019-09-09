<template>
  <el-col :span="24">
    <div class="information">
      <div class="form">
        <div class="el-notification__title form_title">基本信息</div>
        <el-form :model="information" label-width="100px" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="见面会标题：" prop="title">
            <p>{{information.title}}</p>
          </el-form-item>
          <el-form-item label="参会企业：" prop="company">
            <p>{{information.company}}</p>
          </el-form-item>
          <el-form-item label="开始时间：" prop="startTime">
            <p>{{information.startTime}}</p>
          </el-form-item>
          <el-form-item label="结束时间：" prop="endTime">
            <p>{{information.endTime}}</p>
          </el-form-item>
          <el-form-item label="活动地点：" prop="place">
            <p>{{information.place}}</p>
          </el-form-item>
        </el-form>
      </div>
      <div class="form">
        <div class="el-notification__title form_title">企业信息</div>
      </div>
      <div class="form">
        <div class="el-notification__title form_title">回执资料</div>
      </div>
      <div class="form">
        <div class="el-notification__title form_title">发票信息</div>
      </div>
      <div class="form">
        <div class="el-notification__title form_title">活动内容</div>
      </div>
      <div class="form">
        <el-button size="small" type="primary" @click="onSubmit">立即申请</el-button>
        <el-button size="small" @click="$router.back(-1)">取消</el-button>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'Details',
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
