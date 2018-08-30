<template>
  <div class="ms-song-list">
    <part-title :partTitle="partTitle"></part-title>
    <ul class="ms-song-list-container">
      <list-item v-for="(item,index) in s_list" :key="item['dissid']" :type="type" :dataList="item"
                 v-if="index <= 5"></list-item>
    </ul>
    <part-batch :songLen="listLen" @change="changSong"></part-batch>
  </div>
</template>

<script>
  import PartTitle from '@/components/PartTitle';
  import ListItem from '@/components/ListItem';
  import batch from '@/components/batch';

  export default {
    name: "SongList",
    props: ['list'],
    data: function () {
      return {
        partTitle: '为你推荐歌曲',
        type: 'song',
        s_list: [],
        listLen:0
      }
    },
    methods: {
      changSong: function (index) {
        this.s_list = this.list.slice(index * 6, (index + 1) * 6);
      }
    },
    components: {
      'part-title': PartTitle,
      'list-item': ListItem,
      'part-batch': batch
    },
    watch: {
      s_list(newData,prevData) {
        let len = newData.length;
        let listLen = this.listLen;
        let start = listLen - len;
        if(len && len < 6){
          this.list.splice(start,len);
          newData.map(item=>{
            this.list.unshift(item);
          });
        }
      },
      list(newData,prevData){
        this.listLen = newData.length;
        this.s_list = newData.slice(0,6);
      }
    }
  }
</script>

<style type="text/less" lang="less">
  .ms-song-list {
    width: 100%;
    padding: 0.8rem 1rem 0 1rem;
    &-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>
