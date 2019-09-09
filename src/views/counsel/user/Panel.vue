<template>
  <div class="portal_panel">
    <router-view></router-view>
  </div>
</template>

<script>
import "../../../common/css/student/style.css";
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  watch: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
  .portal_panel{
    width: 100%;
    height: auto;
  }
</style>
