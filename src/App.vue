<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App'
  }
</script>

<style type="text/less" lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
  }

  @font-face {
    font-family: 'iconfont';  /* project id 471751 */
    src: url('//at.alicdn.com/t/font_471751_3hbkwark1paxlxr.eot');
    src: url('//at.alicdn.com/t/font_471751_3hbkwark1paxlxr.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_471751_3hbkwark1paxlxr.woff') format('woff'),
    url('//at.alicdn.com/t/font_471751_3hbkwark1paxlxr.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_471751_3hbkwark1paxlxr.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, h1, h2, p, div, ul, ol, li, span {
    margin: 0;
    padding: 0;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  ol, ul, li {
    list-style-type: none;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  input, button, select, textarea {
    outline: none;
    -webkit-appearance: none;
    border-radius: 0;
    border: none;
  }

  .text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .text-ellipsis-2 {
    display: -webkit-box;
    display: -moz-box;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /*显示行数*/
  }

  /*容器弹性盒子排列*/

  .flex {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
  }

  /*容器弹性盒子行反转排列*/

  .flex-row-reverse {
    -webkit-box-direction: reverse;
    -moz-box-direction: reverse;
    -webkit-box-orient: horizontal;
    -moz-box-orient: horizontal;
    flex-direction: row-reverse;
  }

  /*容器弹性盒子列反转排列*/

  .flex-column-reverse {
    -webkit-box-direction: reverse;
    -moz-box-direction: reverse;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    flex-direction: column-reverse;
  }

  /*容器弹性盒子列排列*/

  .flex-column {
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    flex-direction: column;
  }

  /*容器弹性盒子行排列*/

  .flex-row {
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -moz-box-orient: horizontal;
    flex-direction: row;
  }

  /*不换行*/

  .flex-wrap-nowrap {
    -webkit-box-lines: single;
    -moz-box-lines: single;
    flex-wrap: nowrap;
  }

  /*换行*/

  .flex-wrap-wrap {
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    flex-wrap: wrap;
  }

  /*反转换行*/

  .flex-wrap-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /*水平对齐方式 开始*/

  .flex-justify-start {
    -webkit-box-align: start;
    -moz-box-align: start;
    justify-content: flex-start;
  }

  /*水平对齐方式 结束*/

  .flex-justify-end {
    -webkit-box-align: end;
    -moz-box-align: end;
    justify-content: flex-end;
  }

  /*水平对齐方式 居中*/

  .flex-justify-center {
    -webkit-box-align: center;
    -moz-box-align: center;
    justify-content: center;
  }

  /*水平对齐方式 两边靠齐*/

  .flex-justify-space-between {
    justify-content: space-between;
  }

  /*垂直对齐方式 开始*/

  .flex-align-start {
    -webkit-box-align: start;
    -moz-box-align: start;
    align-items: flex-start;
  }

  /*垂直对齐方式 end*/

  .flex-align-end {
    -webkit-box-align: end;
    -moz-box-align: end;
    align-items: flex-end;
  }

  /*垂直对齐方式 center*/

  .flex-align-center {
    -webkit-box-align: center;
    -moz-box-align: center;
    align-items: center;
  }

  /*垂直对齐方式 基线*/

  .flex-align-baseline {
    align-items: baseline;
    -webkit-box-align: baseline;
    -moz-box-align: baseline;
  }

  /*垂直对齐方式 适应父元素高度*/

  .flex-align-stretch {
    -webkit-box-align: stretch;
    -moz-box-align: stretch;
    align-items: stretch;
  }

  /*子元素占剩余父容器的宽度或高度的占比*/

  .flex-children-1 {
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-flex: 1;
  }

  .flex-children-2 {
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    flex: 2;
  }

  .flex-children-3 {
    -webkit-box-flex: 3;
    -webkit-flex: 3;
    flex: 3;
  }

  .flex-children-4 {
    -webkit-box-flex: 4;
    -webkit-flex: 4;
    flex: 4;
  }

  .flex-shrink-1 {
    -webkit-flex-shrink: 1;
    flex-shrink: 1;
  }

  .flex-shrink-0 {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
  }

  .flex-basis-0 {
    -webkit-flex-basis: 0;
    flex-basis: 0;
  }

  .flex-basis-auto {
    -webkit-flex-basis: auto;
    flex-basis: auto;
  }

</style>
