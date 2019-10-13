<!--总组件-->
<template>
  <div id="app">
    <common-header></common-header>
    <div id = "container">
     <router-view></router-view>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "./components/CommonHeader"; //1.导入组件
import CommonFooter from "./components/CommonFooter";
export default {
  //2.components里声名组件
  components: {
    CommonHeader,
    CommonFooter
  }
};
</script>

<style lang="scss">
 #container{
   margin:50px 0;
 }
</style>
