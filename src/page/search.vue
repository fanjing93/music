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
      <ul class="ms-list-tab">
        <li>单曲</li>
        <li>视频</li>
        <li>专辑</li>
        <li>歌单</li>
        <li>歌手</li>
        <li>用户</li>
      </ul>
      <!--搜索结果-->
      <ul class="ms-search-result-list">
        <li class="ms-search-result-list-item" @click="" v-for="songlist in searchResultList" :key="songlist['docid']">
          <span v-text="songlist.name"></span>
          <span class="search-singer" v-text="songlist.singer"></span>
        </li>
      </ul>
    </div>
    <ms-footer></ms-footer>
  </div>
</template>

<script>
  import msHeader from '@/components/music-header';
  import MsFooter from '@/components/MsFooter';
  import API from '@/config/api';
  import {mapState, mapActions} from 'vuex';

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
        searchResult: null, // 搜索结果
        searchResultList: []
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
          this.searchHistory.unshift(data.key);
          localStorage.searchHistory = JSON.stringify(this.searchHistory)
        }
        this.searchFun({key: data.key});
      },
      /****
       * 智能搜索
       * @param params
       */
      searchFun: function (params) {
        this.$http.jsonp(API.URL_SEARCH_SMARTBOX, {
          params: params,
          jsonp: 'jsonpCallback'
        }).then(res => {
          // 在这里只取song
          this.searchResult = res.data && res.data.data ? res.data.data.song : [];
          this.searchResultList = this.searchResult['itemlist'];
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  .clearFix(){
    *zoom: 1;
    &:before,
    &:after{
      display:table;
      content: "";
    }
    &:after {
      clear: both;
    }
  }
  .ms-search-result{
    padding-top: 2.43rem;
  }

  .ms-search-result-list,
  .ms-search-key-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      padding: 0.6rem 1rem;
      border-bottom: 1px solid #e2e2e2;
    }
  }

  .ms-search-key-list {
    &-item {

    }
  }

  .ms-search-result-list {
    &-item {
      .search-singer{
        color: #B4B4B4;
        font-size: 0.8rem
      }
    }
  }

  .ms-list-tab{
    overflow: auto;
    width: 100%;
    display: -webkit-box;
    flex-wrap: nowrap;
    border-bottom: 1px solid #e2e2e2;
    li{
      padding: 0.5rem 1.27rem;
      text-align: center;
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
