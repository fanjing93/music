<template>
  <div class="container">
    <ms-header :activeIndex="activeIndex"></ms-header>
    <div class="content">
      <swiper-list :recommends="recommends"></swiper-list>
      <menu-list></menu-list>
      <song-list :list="songlist"></song-list>
      <mv-list :mvl="mvlist"></mv-list>
    </div>
    <ms-footer></ms-footer>
  </div>
</template>

<script>
  import msHeader from '@/components/music-header';
  import SwiperList from '@/components/SwiperList';
  import MenuList from '@/components/MenuList';
  import SongList from '@/components/SongList';
  import MvList from '@/components/MvList';
  import MsFooter from '@/components/MsFooter';
  import search from '@/page/search';
  import API from '@/config/api';
  import {mapState, mapActions} from 'vuex';

  export default {
    name: "my-music",
    data: function () {
      return {
        activeIndex: 1,
        recommends: [],
        songlist: [],
        mvlist: [],
      }
    },
    computed: {
      ...mapState({
        searchPage: 'searchPage'
      })
    },
    components: {
      'ms-header': msHeader,
      'swiper-list': SwiperList,
      'menu-list': MenuList,
      'song-list': SongList,
      'mv-list': MvList,
      'ms-footer': MsFooter,
      'ms-search': search
    },
    methods: {
      ...mapActions([
        'stateInit',
        'searchSong'
      ]),
      queryIndexData() {
        this.$http.jsonp(API.URL_RRCOM, {
          params: {
            tpl: 'v12',
            rnd: 0
          },
          jsonp: 'jsonpCallback'
        }).then(response => {
          // console.log(response.data.data);
          this.recommends = response.data.data.focus;
          this.songlist = response.data.data['hotdiss'].list;
          this.mvlist = response.data.data['shoubomv'].all;
        }).catch(function (response) {
          console.log(response)
        })
      }
    },
    beforeCreate() {
      console.log('beforeCreate');
    },
    created() {
      console.log('created');

    },
    beforeMount() {
      console.log('beforeMount');

    },
    mounted() {
      console.log('mounted');
      // 状态初始化
      this.stateInit();
      // 请求首页数据
      this.queryIndexData();
    },
    beforeUpdate() {
      console.log('beforeUpdate');

    },
    updated() {
      console.log('updated');

    },
    beforeDestroy() {
      console.log('beforeDestroy');

    },
    destroyed(){
      console.log('destroyed');

    }
  }
</script>

<style type="text/less" lang="less">
  .content {
    padding-top: 5.96rem;
    padding-bottom: 3.5rem;
  }

  .ms-search {
    width: 100%;
    height: 100%;
  }
</style>
