<template>
  <el-col :span="24">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="栏目发布信息统计" name="/portal/category/statistic"></el-tab-pane>
      <el-tab-pane label="栏目发布信息管理" name="/portal/category/manage"></el-tab-pane>
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
      activeName: '/portal/category/statistic',
      historyActive: '/portal/category/statistic'
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
