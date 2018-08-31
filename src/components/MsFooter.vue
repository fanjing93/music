<template>
  <div class="ms-con-bottom">
    <list v-show="playlistShow" @CancelClick="setPlaylistShow"></list>
    <footer class="ms-footer-container">
      <div class="ms-footer-left">
        <div v-show="!playlist.length" class="ms-footer-static">QQ音乐 听我想听的音乐</div>
        <div v-show="playlist.length" class="ms-footer-song-play">
          <img src="https://y.gtimg.cn/music/photo_new/T002R500x500M000000CuHsv0PKkON.jpg"
               :class="playState ? 'animation-state-running' : 'animation-state-paused'" alt="">
          <div class="ms-song-lyric">
            <div class="song-name">目不转睛</div>
            <div class="song-lyric">目不转睛 (Live) - 王以太</div>
          </div>
        </div>
      </div>
      <div class="ms-footer-control" :class="!playlist.length ? 'no-song' : ''">
        <i class="iconfont footer-btn-play" :class="playState ? 'icon-zanting1' : 'icon-bofang'" @click.stop="playlist.length ? play : ''"></i>
        <i class="iconfont footer-btn-list icon-liebiao" @click.stop="playlist.length ? setPlaylistShow(true) : ''"></i>
      </div>
    </footer>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex';
  import list from '@/components/list';

  export default {
    name: "MsFooter",
    data: function () {
      return {}
    },
    components:{
      'list': list
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
    },
    methods: {
      ...mapActions([
        'changeSongPlay',
        'play',
        'updateLyricIndex',
        'setPlayerShow',
        'setPlaylistShow'
      ])
    },
    watch: {
      playState(newVal, oldVal) {
        // console.log(newVal);
      }
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
      padding: 0 1rem;
      .ms-footer-song-play,
      .ms-footer-static {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        font-size: 0.95rem;
        img {
          width: 2.6rem;
          height: 2.6rem;
          object-fit: cover;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          -webkit-animation: img-rotate 5s linear infinite;
          -o-animation: img-rotate 5s linear infinite;
          animation: img-rotate 5s linear infinite;
          &.animation-state-running {
            animation-play-state: running;
          }
          &.animation-state-paused {
            animation-play-state: paused;
          }
        }
      }
      .ms-song-lyric {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
      }
    }
    .ms-footer-control {
      flex-basis: 6rem;
      height: 100%;
      display: flex;
      align-items: center;
      &.no-song i {
        color: #e2e2e2;
      }
      i {
        flex: 1;
        text-align: center;
        color: #41B883;
        font-size: 2rem;
      }
    }
  }

  @-webkit-keyframes img-rotate {
    from {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-o-keyframes img-rotate {
    from {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-moz-keyframes img-rotate {
    from {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes img-rotate {
    from {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
