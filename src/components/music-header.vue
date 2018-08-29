<template>
  <header>
    <ul class="ms-header flex flex-justify-space-between">
      <li><i class="btn-left-menu iconfont">&#xe60b;</i></li>
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
      <li><i class="btn-right-menu iconfont">&#xe600;</i></li>
    </ul>
    <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
      <router-link tag="div" to="/search" class="ms-header-search">
        <input type="search" placeholder="搜索">
      </router-link>
    </transition>
  </header>
</template>

<script>
  import router from '../router';

  export default {
    name: "ms-header",
    props: ['activeIndex'],
    methods: {}
  }
</script>

<style type="text/less" lang="less" scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 90px;
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
      padding-top: 0.9rem;
      input[type="search"] {
        width: 100%;
        border: none;
        border-radius: 1rem;
        padding: 0.4rem;
        background-color: #38a675;
        color: #FFFFFF;
        text-align: center;
        &::placeholder {
          color: rgba(255, 255, 255, 0.8);
        }
        &::-webkit-search-cancel-button {
          display: none;
        }
      }
    }
  }
</style>
