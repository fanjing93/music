<template>
  <div class="ms-part-title">
    <p v-text="partTitle"></p>
    <i class="iconfont">&#xe602;</i>
  </div>
</template>

<script>
  export default {
    name: "PartTitle",
    props: ['partTitle']
  }
</script>

<style type="text/less" lang="less" scoped>
  .ms-part-title {
    width: 100%;
    display: flex;
    align-items: center;
    p{
      font-size: 1.2rem;
      flex: 1;
      text-align: center;
    }
    i{
      flex-basis: 1.3rem;
      justify-self: flex-end;
    }
  }
</style>
