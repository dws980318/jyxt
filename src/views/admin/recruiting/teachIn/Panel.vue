<template>
  <el-col :span="24">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="待审核" name="/recruiting/teachIn/unchecked"></el-tab-pane>
      <el-tab-pane label="已审核" name="/recruiting/teachIn/checked"></el-tab-pane>
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
      activeName: '/recruiting/teachIn/unchecked',
      historyActive: '/recruiting/teachIn/unchecked'
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
