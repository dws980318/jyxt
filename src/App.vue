<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Storage from './utils/storage'

export default {
  name: 'App',
  beforeCreate () {
    if (Storage.getItem('hideMenu')) {
      this.$store.state.hideMenu = Storage.getItem('hideMenu')
    }
    if (Storage.getSsItem('history')) {
      this.$store.state.history = Storage.getItem('history')
    }
  }
}
</script>

<style>
  @import "./common/css/common.css";
  @import "./common/css/iconfont.css";
  #app {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0 auto;
    background: #ffffff;
  }
</style>
