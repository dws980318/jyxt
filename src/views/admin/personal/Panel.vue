<template>
  <div class="personal_panel">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item, index) in structure" v-if="index <= activeIndex" :key="index" :to="item.path">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="person_container">
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
          name: '基本资料',
          path: '/personal'
        },
        {
          name: '修改',
          path: '/personal/change'
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
  .personal_panel{
    width: 100%;
    height: auto;
    padding-top: 20px;
  }
  .breadcrumb{
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #999999;
  }
  .person_container{
    width: 600px;
    height: auto;
  }
</style>
