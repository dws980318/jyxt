<template>
  <el-col :span="24">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="协议书审核" name="/student/protocol/one/unchecked"></el-tab-pane>
        <el-tab-pane label="就业创业补贴审核" name="/student/protocol/two/unchecked"></el-tab-pane>
        <el-tab-pane label="项目活动审核" name="/student/protocol/three/unchecked"></el-tab-pane>
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
      activeName: '/student/protocol/one/unchecked',
      historyActive: '/student/protocol/one/unchecked'
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
      if (from.matched[2].path !== '/student/protocol') {
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
