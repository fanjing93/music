<template>
  <ms-header :activeIndex="2"></ms-header>
</template>

<script>
  import msHeader from '@/components/music-header';

  export default {
    name: "discover",
    components: {
      'ms-header': msHeader
    }
  }
</script>

<style type="text/less" lang="less" scoped>

</style>
