<template>
  <li class="ms-list-item">
    <div class="ms-list-item-img">
      <img :src="type === 'song' ? dataList.imgurl : dataList.picurl" alt=""/>
      <div class="ms-list-item-img-tip">
        <span class="icon">
          <i v-if="type === 'song'" class="iconfont">&#xe6a8;</i>
          <i v-else class="iconfont font-size-1-2 margin-right-0">&#xe6df;</i>
          {{ dataList.listennum | playAmount }}
        </span>
        <span v-if="type === 'song'" class="icon"><i class="iconfont margin-right-0">&#xe62b;</i></span>
      </div>
    </div>
    <div v-if="type === 'song'" class="ms-list-item-info">
      <span class="text-ellipsis-2">{{ dataList.dissname }}</span>
    </div>
    <div v-else class="ms-list-item-info">
      <span class="text-ellipsis">{{ dataList.mvtitle }}</span>
      <span class="text-ellipsis singer-name">{{ dataList.singer_name }}</span>
    </div>
  </li>
</template>

<script>
  export default {
    name: "ListItem",
    props: ['dataList','type'],
    data: function () {
      return {}
    },
    filters: {
      playAmount: function (amount) {
        return parseInt(amount / 10000) + '万';
      }
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  .ms-list-item {
    width: 31%;
    display: flex;
    padding-top: 0.5rem;
    flex-direction: column;
    &-img{
      width: 100%;
      height: 100px;
      position: relative;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      &-tip{
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 5px;
        font-size: 0.5rem;
        color: #FFFFFF;
        .icon{
          display: flex;
          align-items: center;
        }
        i{
          font-size: 0.5rem;
          margin-right: 2px;
        }
        .font-size-1-2{
          font-size: 1.2rem;
        }
        .margin-right-0{
          margin-right: 0;
        }
      }
    }
    &-info{
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: center;
      padding: 0.5rem 0;
      font-size: 0.6rem;
      flex-direction: column;
      .singer-name{
        color: #999999;
      }
      span{
        width: 100%;
      }
    }
  }
</style>
