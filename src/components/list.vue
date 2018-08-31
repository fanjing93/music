<template>
  <div class="ms-mark-container">
    <div class="mark" @click="CancelClick"></div>
    <div class="ms-list-container">
      <div class="ms-list-title">
        <div class="ms-list-title-left">
          <i class="iconfont" :class="getPlayMethod.icon"></i>
          <span class="song-name" v-text="getPlayMethod.text"></span>
          <span class="song-length" v-show="playMethod !== 1">({{ playlist.length }}首)</span>
        </div>
        <ul class="ms-list-title-right">
          <li><i class="iconfont icon-xiazai000"></i></li>
          <li><i class="iconfont icon-tian-jia"></i></li>
          <li><i class="iconfont icon-shanchu4"></i></li>
        </ul>
      </div>
      <ul class="ms-list">
        <li class="ms-item">
          <div class="ms-item-song-info">目不转睛-王以太</div>
          <div class="ms-item-icon">
            <i class="iconfont icon-shanchu4"></i>
          </div>
        </li>
        <li class="ms-item-add-song">
          <i class="iconfont icon-iconfont7"></i>
          添加歌曲到队列
        </li>
      </ul>
      <div class="ms-list-bottom" @click="CancelClick">关闭</div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    name: "list",
    computed: {
      ...mapState({
        songPlaying: 'song',
        playMethod: 'playMethod',
        playlist: 'playlist',
        playlistShow: 'playlistShow',
        likedSongs: 'likedSongs'
      }),
      ...mapGetters([
        'getPlayMethod'
      ])
    },
    methods: {
      ...mapActions([
        'playerInit',
        'changePlayMethod',
        'setPlaylistShow',
        'changeSongPlay',
        'updatePlaylist',
        'setSongLiked'
      ]),
      CancelClick: function () {
        this.$emit('CancelClick',false);
      }
    },
    watch: {}
  }
</script>

<style lang="less" type="text/less" scoped>
  .ms-mark-container {
    .mark {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(189, 189, 189, 0.4);
      z-index: 2;
    }
    .ms-list-container {
      width: 100%;
      display: flex;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 3;
      flex-direction: column;
      justify-content: space-between;
      color: #333333;
      background-color: rgba(255, 255, 255, 1);
      .ms-list-children {
        width: 100%;
        display: flex;
        align-items: center;
      }
      .ms-list-title {
        .ms-list-children();
        padding: 0.8rem 1rem;
        border-bottom: 1px solid #e2e2e2;
        font-size: 1.2rem;
        &-left {
          flex: 1;
          display: flex;
          align-items: center;
          span{
            font-size: 1rem;
            &.song-name{
              margin: 0 5px;
            }
            &.song-length{
              color: #d5d5d5;
            }
          }
        }
        &-right {
          flex-basis: 6rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
      .ms-list-bottom {
        .ms-list-children();
        justify-content: center;
        padding: 0.8rem 1rem;
        border-top: 1px solid #e2e2e2;
      }
      .ms-list {
        display: flex;
        width: 100%;
        height: 20rem;
        align-items: flex-start;
        flex-direction: column;
        .ms-item {
          padding: 0.6rem 1rem;
          .ms-list-children();
          border-bottom: 1px solid #e2e2e2;
          &-song-info {
            flex: 1;
            &.active{
              color: #41B883;
            }
          }
          &-icon {
            flex-basis: auto;
            display: flex;
            align-items: center;
          }
        }
        .ms-item-add-song{
          .ms-list-children();
          padding: 0.6rem 1rem;
          font-size: 1rem;
          justify-content: center;
        }
      }
    }
  }
</style>
