<template>
<div class="index">
  <router-view></router-view>
</div>
</template>
<script>
import "../../common/css/student/style.css";
export default {
  name: "Index",
  data() {
    return {};
  },
};
</script>

<style scoped>
  .index {
    margin: 20px;
  }
</style>
