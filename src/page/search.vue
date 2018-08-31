<template>
  <div class="ms-search-container">
    <ms-header :pageName="pageName" :activeIndex="activeIndex" v-model="searchKey" @input="searchEvent('',true)" @keyup.enter="searchEvent('', false)"></ms-header>

    <ms-footer></ms-footer>
  </div>
</template>

<script>
  import msHeader from '@/components/music-header';
  import MsFooter from '@/components/MsFooter';

  export default {
    props: ['activeIndex'],
    name: "search",
    data() {
      return{
        pageName:'search',
        hotKeys: [], // 热门搜索
        searchHistory: [], // 历史搜索
        searchKey: '', // 当前搜索关键字
        searched: false, // 是否已搜索（false 则显示 热门搜索和搜索历史）
        singer: null, // 智能搜索得到的最佳匹配歌手
        searchResult: null // 搜索结果
      }
    },
    components: {
      'ms-header': msHeader,
      'ms-footer': MsFooter,
    },
    methods: {
      /****
       * @param key
       * @param autoSearch value：false 保存历史纪录
       */
      searchEvent: function (key = this.searchKey, autoSearch = true) {
        console.log(key);
        console.log(autoSearch);
      }
    }
  }
</script>

<style type="text/less" lang="less" scoped>

</style>
