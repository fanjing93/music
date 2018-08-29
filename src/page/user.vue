<template>
  <ms-header :activeIndex="0"></ms-header>
</template>

<script>
  import msHeader from '@/components/music-header';

  export default {
    name: "user",
    components: {
      'ms-header': msHeader
    }
  }
</script>

<style type="text/less" lang="less" scoped>

</style>
