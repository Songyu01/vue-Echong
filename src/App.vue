<template>
  <div>
    <router-view>
      <!--显示当前路由组建-->
    </router-view>
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from'./components/FooterGuide/FooterGuide.vue'
  export default {
      //映射组建标签
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
