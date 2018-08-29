<template>
  <ul class="ms-menu-list">
    <li v-for="item in menuList" class="ms-menu-list-item">
      <i class="iconfont" v-html="item.iconfont"></i>
      <router-link tag="div" :to="item.href" v-text="item.title"></router-link>
    </li>
  </ul>
</template>

<script>
  let menuList = [
    {
      iconfont: '&#xe68d;',
      title: '歌手',
      href: '/singer'
    },
    {
      iconfont: '&#xe6c5;',
      title: '排行',
      href: '/rank'
    },
    {
      iconfont: '&#xe601;',
      title: '电台',
      href: '/radio'
    },
    {
      iconfont: '&#xe6ae;',
      title: '分类歌单',
      href: '/songList'
    },
    {
      iconfont: '&#xe63a;',
      title: '视频MV',
      href: '/mv'
    },
    {
      iconfont: '&#xe603;',
      title: '数字专辑',
      href: '/album'
    }
  ];
  export default {
    name: "MenuList",
    data: function () {
      return {
        menuList: menuList
      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  .ms-menu-list {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    &-item {
      display: flex;
      align-items: center;
      flex-basis: 100% / 3;
      justify-content: start;
      padding: 1rem;
      i {
        color: #41B883;
        font-size: 1.6rem;
        margin-right: 5px;
      }
    }
  }
</style>
