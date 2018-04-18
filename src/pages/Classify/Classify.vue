<template>
  <div class="class_SuoYou">
    <!--t头部-->
   <div class="class_header">
     <div class="header_left">
       <router-link to="/classify/left_list" class="FL">分类</router-link>
     </div>
      <div class="header_right">
        <router-link to="/classify/right_list" class='PP'>品牌</router-link>
      </div>
   </div>
     <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .class_SuoYou
      width 100%
      height 100%
      /*头部*/
      .class_header
        width 100%
        height 40px
        border 1px solid #7e8c8d
        box-sizing border-box
        .header_left
          float left
          width 50%
          height 100%
          text-align center
          line-height 40px
          box-sizing border-box
          padding 0 20px
          .FL
            display block
            float right
            font-size 13px
            font-weight 700
            color red
        .header_right
          float right
          width 50%
          height 100%
          text-align center
          line-height 40px
          box-sizing border-box
          padding 0 20px
          .PP
            display block
            float left
            font-size 13px
            font-weight 700
            color #333




</style>
