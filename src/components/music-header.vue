<template>
  <header>
    <ul class="ms-header flex flex-justify-space-between">
      <li><i class="iconfont icon-menu"></i></li>
      <li>
        <ul class="ms-header-center flex flex-align-center">
          <router-link v-bind:class="[activeIndex === 0 ? 'active' : '' ]" class="ms-header-center-item" tag="li"
                       to="/user">我的
          </router-link>
          <router-link v-bind:class="[activeIndex === 1 ? 'active' : '' ]" class="ms-header-center-item" tag="li"
                       to="/">音乐馆
          </router-link>
          <router-link v-bind:class="[activeIndex === 2 ? 'active' : '' ]" class="ms-header-center-item" tag="li"
                       to="/discover">发现
          </router-link>
        </ul>
      </li>
      <li><i class="iconfont icon-iconfont7"></i></li>
    </ul>
    <transition name="fade">
      <router-link v-show="!scrolled" tag="div" to="/search" class="ms-header-search">
        <i class="iconfont icon-cx"></i>
        <input type="search" placeholder="搜索">
      </router-link>
    </transition>
  </header>
</template>

<script>
  export default {
    name: "ms-header",
    props: ['activeIndex'],
    data: function () {
      return{
        scrolled: false
      }
    },
    methods: {
      handleScroll: function () {
        let beforeScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
          let afterScrollY = window.scrollY;
          let diffY = afterScrollY - beforeScrollY;
          if (diffY > 25) { // 向下滚动距离大于25
            this.scrolled = true
          } else if (diffY < -10) { // 向上滚动
            this.scrolled = false
          }
          beforeScrollY = afterScrollY;
        }, false);
      }
    },
    mounted: function () {
      this.handleScroll()
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: auto;
    padding: 0.8rem 1rem;
    background-color: #41B883;
    .ms-header {
      width: 100%;
      color: #FFFFFF;
      align-items: center;
      &-center {
        &-item {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }
        .active {
          font-weight: 700;
          font-size: 1.2rem;
        }
      }
    }
    .ms-header-search {
      width: 100%;
      background-color: #41B883;
      margin-top: 0.9rem;
      position: relative;
      i{
        position: absolute;
        left: 45%;
        top: 50%;
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
      }
      input[type="search"] {
        width: 100%;
        border: none;
        border-radius: 1rem;
        padding: 0.4rem;
        background-color: #38a675;
        color: #FFFFFF;
        text-align: center;
        &::-moz-placeholder{
          color: rgba(255, 255, 255, 0.8);
          text-indent: 1em;
        }
        &:-ms-input-placeholder{
          color: rgba(255, 255, 255, 0.8);
          text-indent: 1em;
        }
        &::-webkit-input-placeholder {
          color: rgba(255, 255, 255, 0.8);
          text-indent: 1em;
        }
        &::-webkit-search-cancel-button {
          display: none;
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    height: auto;
  }
  .fade-enter, .fade-leave-active {
    height: 0;
  }
</style>
