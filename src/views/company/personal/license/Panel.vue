<template>
  <div class="personal_panel">
    <div class="person_container">
      <div class="alert_panel">
        <el-alert
          style="width: 100%"
          title="营业执照或机构代码证只作为网站核实贵单位真实性的材料，不在任何页面显示，也不会以任何形式公布您的执照信息！"
          :description="'① 提交认证信息后，可以入驻学校，获得更多就业功能权限； \n ② 通过认证后可增加信息的可信度，显示标识为 已认证企业；'"
          type="info"
          show-icon>
        </el-alert>
        <el-alert
          style="width: 100%"
          title="请填写单位营业执照或机构代码证，并上传图片。"
          type="info"
          show-icon>
        </el-alert>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panal',
  data () {
    return {
      activeIndex: 0,
      structure: [
        {
          name: '营业执照',
          path: '/personal/license'
        },
        {
          name: '修改',
          path: '/personal/license/change'
        }
      ]
    }
  },
  watch: {
    '$route': 'getPath'
  },
  methods: {
    getPath () {
      for (let i in this.structure) {
        if (this.structure[i].path === this.$route.path) {
          this.activeIndex = i
        }
      }
    }
  }
}
</script>

<style scoped>
.el-alert--info {
    background-color: #23c6c8;
    color: #fff;
}
  .personal_panel{
    width: 100%;
    margin: 10px;
    height: auto;
  }
  .breadcrumb{
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #999999;
  }
  .person_container{
    /*width: 600px;*/
    width: 100%;
    height: auto;
  }
  .alert_panel{
    width: calc(100% - 20px);
    height: auto;
    margin: auto;
  }
  .el-alert{
    margin: 10px auto;
  }
</style>
