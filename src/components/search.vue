<template>
  <div class="ms-search-container">
    <ms-header :pageName="pageName" :activeIndex="activeIndex" @input="searchEvent($event)"></ms-header>

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
        pageName:'search'
      }
    },
    components: {
      'ms-header': msHeader,
      'ms-footer': MsFooter,
    },
    methods: {
      searchEvent: function (e) {
        console.log(e);
      }
    }
  }
</script>

<style type="text/less" lang="less" scoped>

</style>
