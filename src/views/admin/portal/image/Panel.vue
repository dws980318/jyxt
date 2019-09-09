<template>
  <el-col :span="24">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="首页轮播图" name="/portal/image/index"></el-tab-pane>
      <el-tab-pane label="栏目页长图" name="/portal/image/horizontal"></el-tab-pane>
      <el-tab-pane label="友情链接管理" name="/portal/image/friends"></el-tab-pane>
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
      activeName: '/portal/image/index',
      historyActive: '/portal/image/index'
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
      if (from.matched[2].path !== '/portal/image') {
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
