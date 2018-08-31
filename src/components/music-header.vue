<template>
  <header :class="pageName === 'search' ? 'search-header' : ''">
    <transition name="fade">
      <ul v-show="pageName !== 'search'" class="ms-header flex flex-justify-space-between">
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
    </transition>
    <transition name="fade">
      <router-link tag="div" to="/search" v-show="pageName === 'search' ? false : !scrolled" class="ms-header-search">
        <i class="iconfont icon-cx search-icon"></i>
        <input type="search" placeholder="搜索">
      </router-link>
    </transition>
    <transition name="fade">
      <div v-show="pageName === 'search'" class="ms-header-search">
        <div class="ms-input-search">
          <input type="search" placeholder="搜索歌曲、MV、歌词、歌手等" @input="search($event)">
          <i class="iconfont icon-chuyidong cancel-icon" @click="clearSearchKey"></i>
        </div>
        <router-link class="cancel" to="/" tag="span">取消</router-link>
      </div>
    </transition>
  </header>
</template>

<script>
  export default {
    name: "ms-header",
    props: ['activeIndex', 'pageName'],
    data: function () {
      return {
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
            this.scrolled = true;
          } else if (diffY < -10) { // 向上滚动
            this.scrolled = false;
          }
          beforeScrollY = afterScrollY;
        }, false);
      },
      search: function (e) {
        console.log(e);
      },
      clearSearchKey(){

      }
    },
    mounted: function () {
      this.handleScroll();
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
    &.search-header {
      padding: 0.3rem;
      .ms-header-search {
        margin-top: 0;
        display: flex;
        align-items: center;
        .ms-input-search{
          flex: 1;
          position: relative;
          input[type="search"] {
            width: 100%;
            text-align: left;
            padding-left: 0.8rem;
            &::-webkit-input-placeholder {
              color: rgba(255, 255, 255, 0.8);
              text-indent: 0;
            }
          }
          i.cancel-icon{
            width: auto;
            position: absolute;
            right: 0.3rem;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%);
            color: #FFFFFF;
          }
        }
        .cancel {
          flex-basis: auto;
          color: #FFFFFF;
          display: flex;
          padding: 0 0.5rem;
          font-size: 0.87rem;
          align-items: center;
          justify-content: center;
        }
      }
    }
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
      i.search-icon {
        position: absolute;
        left: 45%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
      }
      input[type="search"] {
        width: 100%;
        border: none;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        padding: 0.4rem;
        background-color: #38a675;
        color: #FFFFFF;
        text-align: center;
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
