<template>
  <div class="ms-batch-container">
    <button @click="changSong">换一批</button>
  </div>
</template>

<script>
  export default {
    name: "batch",
    props:['songLen'],
    data: function () {
      return{
        index:1
      }
    },
    methods:{
      changSong: function () {
        if(Math.floor(this.songLen / 6) < this.index ){
          this.index = 1;
        }
        this.$emit('change',this.index++)
      }
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  .ms-batch-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    button{
      background-color: transparent;
      border: 1px solid #d5d5d5;
      text-align: center;
      font-size: 1rem;
      padding: 0.1rem 0.7rem;
    }
  }
</style>
