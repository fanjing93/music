<template>
  <div class="container">
    <ms-header :activeIndex="activeIndex"></ms-header>
    <div class="content">
      <swiper-list :recommends="recommends"></swiper-list>
      <menu-list></menu-list>
      <song-list :list="songlist"></song-list>
      <mv-list></mv-list>
    </div>
  </div>
</template>

<script>
  import msHeader from '@/components/music-header';
  import SwiperList from '@/components/SwiperList';
  import MenuList from '@/components/MenuList';
  import SongList from '@/components/SongList';
  import MvList from '@/components/MvList';
  import API from '@/config/api';
  import {mapActions} from 'vuex';

  export default {
    name: "my-music",
    data: function () {
      return {
        activeIndex: 1,
        recommends: [],
        songlist: [],
        mvlist: []
      }
    },
    components: {
      'ms-header': msHeader,
      'swiper-list': SwiperList,
      'menu-list': MenuList,
      'song-list': SongList,
      'mv-list': MvList
    },
    methods: {
      ...mapActions([
        'stateInit'
      ])
    },
    mounted: function () {
      // 状态初始化
      this.stateInit();
      // 请求首页数据
      this.$http.jsonp(API.URL_RRCOM, {
        params: {
          tpl: 'v12',
          rnd: 0
        },
        jsonp: 'jsonpCallback'
      }).then((response) => {
        console.log(response.data.data);
        this.recommends = response.data.data.focus;
        this.songlist = response.data.data['hotdiss'].list;
        this.mvlist = response.data.data['shoubomv'].all.slice(0, 4);
      }).catch(function (response) {
        console.log(response)
      })
    }
  }
</script>

<style type="text/less" lang="less">
  .content{
    padding-top: 90px;
  }
</style>
