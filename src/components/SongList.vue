<template>
  <div class="ms-song-list">
    <part-title :partTitle="partTitle"></part-title>
    <ul class="ms-song-list-container">
      <list-item v-for="(item,index) in list" :key="item.dissid" :dataList="item" v-if="index <= 5"></list-item>
    </ul>
  </div>
</template>

<script>
  import PartTitle from '@/components/PartTitle';
  import ListItem from '@/components/ListItem';

  export default {
    name: "SongList",
    props:['list'],
    data: function () {
      return{
        partTitle: '为你推荐歌曲'
      }
    },
    components: {
      'part-title': PartTitle,
      'list-item': ListItem
    }
  }
</script>

<style type="text/less" lang="less">
  .ms-song-list{
    width: 100%;
    padding: 0.8rem 1rem;
    &-container{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
