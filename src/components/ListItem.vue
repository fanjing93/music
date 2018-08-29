<template>
  <li class="ms-list-item">
    <img :src="dataList.imgurl" alt="" width="100%" height="100px"/>
  </li>
</template>

<script>
  export default {
    name: "ListItem",
    props: ['dataList'],
    data: function () {
      return {}
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  .ms-list-item {
    width: 100% / 3;
    display: flex;
    flex-direction: column;
    padding-right: 0.7rem;
    :nth-of-type(3){
      padding-right: 0;
    }
    img {
      object-fit: cover;
    }
  }
</style>
