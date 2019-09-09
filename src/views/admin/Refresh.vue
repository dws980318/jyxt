<template>
  <div></div>
</template>

<script>
export default {
  name: 'Refresh',
  created () {
    console.log(this.$route)
    this.$router.replace(this.$route.params.path)
  }
}
</script>

<style scoped>

</style>
