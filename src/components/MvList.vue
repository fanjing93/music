<template>
  <div class="ms-song-list">
    <part-title :partTitle="partTitle"></part-title>
    <ul class="ms-song-list-container">
      <list-item v-for="(item,index) in m_list" :key="item['mv_id']" :type="type" :dataList="item"
                 v-if="index <= 5"></list-item>
    </ul>
    <part-batch :songLen="listLen" @change="changeMv"></part-batch>
  </div>
</template>

<script>
  import PartTitle from '@/components/PartTitle';
  import ListItem from '@/components/ListItem';
  import batch from '@/components/batch';


  export default {
    name: "MvList",
    props: ['mvl'],
    data: function () {
      return {
        partTitle: '最新MV',
        type: 'mv',
        m_list: [],
        listLen: 0
      }
    },
    methods: {
      changeMv: function (index) {
        this.m_list = this.mvl.slice(index * 6, (index + 1) * 6);
      }
    },
    components: {
      'part-title': PartTitle,
      'list-item': ListItem,
      'part-batch': batch
    },
    watch: {
      m_list(newData, prevData) {
        let len = newData.length;
        let listLen = this.listLen;
        let start = listLen - len;
        if (len && len < 6) {
          this.mvl.splice(start, len);
          newData.map(item => {
            this.mvl.unshift(item);
          });
        }
      },
      mvl(newData, prevData) {
        this.listLen = newData.length;
        this.m_list = newData.slice(0, 6);
      }
    }
  }
</script>

<style type="text/less" lang="less">

</style>
