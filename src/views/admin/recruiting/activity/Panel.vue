<template>
  <el-col :span="24">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="就业活动信息管理" name="/recruiting/activity/info"></el-tab-pane>
      <el-tab-pane label="报名情况统计" name="/recruiting/activity/count"></el-tab-pane>
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
      activeName: '/recruiting/activity/info',
      historyActive: '/recruiting/activity/info'
    }
  },
  created () {
    if (this.$route.matched[3]) {
      this.activeName = this.$route.matched[3].path
      this.historyActive = this.$route.matched[3].path
    }
  },
  watch: {
    '$route': 'getPath'
  },
  methods: {
    getPath () {
      if (this.$route.matched[3]) {
        this.activeName = this.$route.matched[3].path
        this.historyActive = this.$route.matched[3].path
      }
    },
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
