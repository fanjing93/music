<template>
  <audio class="audio" :src="songURL" autoplay @timeupdate="updateTime" @ended="nextSong"></audio>
</template>

<script>
  export default {
    name: "ms-audio",
    props: ['songSrc']
  }
</script>

<style lang="less" type="text/less" scoped>
  .ms-audio {
    opacity: 0;
  }
</style>
