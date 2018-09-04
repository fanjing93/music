<template>
  <div class="ms-search-container">
    <ms-header :pageName="pageName" :activeIndex="activeIndex" @searchEvent="search"></ms-header>
    <div v-if="!searched" class="ms-search-key">
      <!--搜索列表-->
      <ul class="ms-search-key-list">
        <li class="ms-search-key-list-item"></li>
      </ul>
      <!--热门搜索-->
      <ul class="ms-hot-search-key">
        <li class="ms-hot-search-key-item"></li>
      </ul>
      <!--搜索历史-->
      <ul class="ms-history-search-key">
        <li class="ms-history-search-key-item"></li>
      </ul>
    </div>
    <div v-else class="ms-search-result">
      <!--搜索结果-->
      <ul class="ms-search-result-list">
        <li class="ms-search-result-list-item"></li>
      </ul>
    </div>
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
        this.searchKey = data.key;
        if (this.searchKey && !data.autoSearch) {
          this.searched = true;
        }
      }
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  .ms-search-result-list,
  .ms-search-key-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-item {
      display: flex;
      width: 100%;
      align-items: center;
      padding: 0.6rem 1rem;
      border-bottom: 1px solid #e2e2e2;
    }
  }

  .ms-search-key-list{
    &-item{

    }
  }

  .ms-search-result-list {
    &-item {

    }
  }

  .ms-history-search-key,
  .ms-hot-search-key {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    &-item {
      padding: 0.3rem;
      display: flex;
      align-items: center;
    }
  }

  .ms-history-search-key {

  }

  .ms-hot-search-key {

  }
</style>
