<template>
  <swiper class="ms-swiper" :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <swiper-slide v-for="item in recommends" :key="item.id">
      <a :href="item.jumpurl"><img :src="item.pic"></a>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "SwiperList",
    props: ['recommends'],
    data: function () {
      return {
        notNextTick: true,
        swiperOption: {
          autoplay: 3000,
          loop: true,
          grabCursor: true,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          observeParents: true,
          preventClicks: true,
          shortSwipes: true
        }
      }
    },
    computed: {
      // 定义sweiper对象
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style type="text/less" lang="less">
  .ms-swiper {
    width: 100%;
    height: 12rem;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
