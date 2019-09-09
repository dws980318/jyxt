<template>
  <el-col :span="24">
    <el-menu class="el-menu-vertical-demo" default-active="0" active-text-color="#f8f8f8" text-color="#f8f8f8" :unique-opened="true" :collapse="$store.state.hideMenu" @open="navOpen">
      <div v-for="(item, index) in router" :key="index">
        <el-menu-item v-if="item.meta.children === false" :index="item.path" @click="toPath(item)">
          <i class="iconfont" :class="item.meta.icon"></i>
          <span slot="title">
            {{item.name}}
          </span>
        </el-menu-item>
        <el-submenu v-else :index="item.path">
          <template slot="title">
            <i class="iconfont" :class="item.meta.icon"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(menuItem, itemIndex) in item.children" :key="itemIndex" :index="index + '-' + itemIndex" @click="toPath(menuItem)">
              {{menuItem.name}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      // router: {}
    }
  },
  computed: {
    router () {
      // const list =
      return this.$store.getters.getList[0].children
    }
  },
  methods: {
    toPath (route) {
      if (route.path === '/index') {
        this.$router.replace('/index')
        return false
      }
      let history = this.$store.state.history
      for (let i in history) {
        if (history[i].path === route.path) {
          this.$router.replace(history[i].path)
          return false
        }
      }
      // console.log(route)
      this.$store.commit('addHistory', route)
      this.$router.replace(route.path)
    },
    navOpen(path) {
      this.$router.push({path})
    }
  }
}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
  }
</style>
