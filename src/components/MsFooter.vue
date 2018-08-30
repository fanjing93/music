<template>
  <footer class="ms-footer-container">
    <div class="ms-footer-left"></div>
    <div class="ms-footer-control">
      <i class="iconfont footer-btn-play" v-html="playState ? '&#xe710;' : '&#xe6d9;'"></i>
      <i class="iconfont footer-btn-list">&#xe604;</i>
    </div>
  </footer>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    name: "MsFooter",
    data: function () {
      return {}
    },
    computed: {
      ...mapState([
        'song',
        'playerShow',
        'playlist',
        'playlistShow',
        'playState',
        'playingTime',
        'currentLyricIndex'
      ]),
      ...mapGetters([
        'getAlbumCover'
      ]),
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  .ms-footer-container {
    width: 100%;
    height: 3.5rem;
    border-top: 1px solid #f1f1f1;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    .ms-footer-left {
      flex: 1;
      height: 100%;
    }
    .ms-footer-control {
      flex-basis: 6rem;
      height: 100%;
      display: flex;
      align-items: center;
      i {
        flex: 1;
        text-align: center;
        color: #41B883;
        font-size: 2rem;
      }
    }
  }
</style>
