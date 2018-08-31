<template>
  <ul class="ms-menu-list">
    <li v-for="item in menuList" class="ms-menu-list-item">
      <i class="iconfont" :class="item.iconClass"></i>
      <router-link tag="div" :to="item.href" v-text="item.title"></router-link>
    </li>
  </ul>
</template>

<script>
  let menuList = [
    {
      iconClass: 'icon-ren',
      title: '歌手',
      href: '/singer'
    },
    {
      iconClass: 'icon-paihang1',
      title: '排行',
      href: '/rank'
    },
    {
      iconClass: 'icon-ziyuan',
      title: '电台',
      href: '/radio'
    },
    {
      iconClass: 'icon-leimupinleifenleileibie2',
      title: '分类歌单',
      href: '/songList'
    },
    {
      iconClass: 'icon-shipin',
      title: '视频MV',
      href: '/mv'
    },
    {
      iconClass: 'icon-zhuanji',
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
      padding: 0.6rem 1rem;
      i {
        color: #41B883;
        font-size: 1.6rem;
        margin-right: 5px;
      }
    }
  }
</style>
