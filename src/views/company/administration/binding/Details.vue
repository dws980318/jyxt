<template>
  <el-col :span="24">
    <div class="information">
      <div class="form">
        <el-form :model="information" label-width="120px" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item v-if="information.id" label="id：" prop="id">
            <p>{{information.id}}</p>
          </el-form-item>
          <el-form-item label="问卷名称：" prop="name">
            <p>{{information.name}}</p>
          </el-form-item>
          <el-form-item label="开始时间：" prop="startTime">
            <p>{{information.startTime}}</p>
          </el-form-item>
          <el-form-item label="结束时间：" prop="endTime">
            <p>{{information.endTime}}</p>
          </el-form-item>
          <el-form-item label="发布人：" prop="author">
            <p>{{information.author}}</p>
          </el-form-item>
          <el-form-item label="更新时间：" prop="updateTime">
            <p>{{information.updateTime}}</p>
          </el-form-item>
          <el-form-item label="发布状态：" prop="open">
            <el-switch v-model="information.open" active-color="#13ce66" inactive-color="#999" disabled></el-switch>
          </el-form-item>
          <el-form-item size="large">
            <el-button size="small" type="success" @click="onSubmit">开始问卷</el-button>
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
      information: {
      },
      rules: {
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
  computed: {
  },
  methods: {
    loadObject (adminId) {
      this.information = {
        id: adminId,
        name: '模板1',
        startTime: '2019-05-20',
        endTime: '2019-06-10',
        author: '溜得滑',
        updateTime: '2019-05-02',
        open: true
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
