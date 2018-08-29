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
    name: "MvList",
    data: function () {
      return{
        partTitle: 'MV'
      }
    },
    components: {
      'part-title': PartTitle,
      'list-item': ListItem
    }
  }
</script>

<style type="text/less" lang="less">

</style>
