
<template>
  <el-col :span="24">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="学生预约咨询管理" name="/Informationist/position/unchecked"></el-tab-pane>
      <el-tab-pane label="预约咨询师管理" name="/Informationist/position/checked"></el-tab-pane>
    </el-tabs>
    <router-view v-loading="loading"></router-view>
  </el-col>
</template>

<script>
export default {  
  name: 'Panel',
  data () {
    return {
      loading: false,
      activeName: '/Informationist/position/unchecked',
      historyActive: '/Informationist/position/unchecked'
    }
  },
  created () {
    if (this.$route.matched[3]) {
      this.activeName = this.$route.matched[3].path
      this.historyActive = this.$route.matched[3].path
    }
  },
  watch: {
    $route (to, from) {
      console.log(from)
      if (from.matched[2].path !== '/Informationist/position') {
        this.$router.replace({
          name: 'Refresh',
          params: {
            path: to.path
          }
        })
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      if (this.historyActive === tab.name) {
        return false
      } else {
        this.loading = true
        this.historyActive = tab.name
        this.$router.push(tab.name)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>

</style>
