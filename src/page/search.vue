<template>
  <div class="ms-search-container">
    <ms-header :pageName="pageName" :activeIndex="activeIndex" @searchEvent="search"></ms-header>
    <ul class="ms-search-key-list">
      <li></li>
    </ul>
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
      return {
        pageName: 'search',
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
       * @param data [key, autoSearch]
       */
      search: function (data) {
        console.log(data)
      }
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  .ms-search-key-list {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
