<template>
    <!-- 首页 -->
    <div id="home_page">
      <!-- 首页头部 -->
      <header class="header">
        <!-- 头部广告 -->
        <div class="header_nav_wrapper">
          <a href="#" class="header_adv">
            <img src="./imgs/guangGao.jpg">
          </a>
            <img src="./imgs/closebtn.png">
        </div>
        <!-- 广告下方导航 -->
        <div class="header_main">
          <!-- 头部搜索 -->
          <div class="header_search">
            <div class="header_search_inner">
              <span>狗狗 | 北京
                <i class="iconfont icon-sanjiao"></i>
              </span>
              <span>
                <input type="text" placeholder="搜索商品和品牌">
                <span> <i class="iconfont icon-search"></i> </span>
              </span>
              <span>
                <i class="iconfont icon-xinxi"></i>
              </span>
            </div>
          </div>
          <!-- 头部导航 -->
          <div class="header_nav">
            <div class="header_nav_item">
              <span class="header_nav_text on" style="color:#bfa;">首页</span>
              <div class="fangKuai"></div>
            </div>
            <div class="header_nav_item">
              <span class="header_nav_text ">狗狗主粮</span>
            </div>
            <div class="header_nav_item">
              <span class="header_nav_text">零食</span>
            </div>
            <div class="header_nav_item">
              <span class="header_nav_text">医疗保健</span>
            </div>
            <div class="header_nav_item">
              <span class="header_nav_text">玩具</span>
            </div>
            <div class="header_nav_item">
              <span class="header_nav_text">外出</span>
            </div>
            <div class="header_nav_item">
              <span class="header_nav_text">服装城</span>
            </div>
          </div>
        </div>
      </header>
      <!--包裹器-->
      <div class="warp">
        <!--轮播图-->
        <ul class="list">
          <li>
              <img src="https://img2.epetbar.com/nowater/2018-04/15/22/3f9a93b4cde5555cbca5f9e05d7dfad7.jpg@!water" alt="">
          </li>
        </ul>
        <!--选项表-->
       
      </div>
    </div>

</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #home_page
    width 100%
    height 100%
    .header
      width 100%
      background-color #fff
      z-index 100
      .header_nav_wrapper
        width 100%
        position relative
        .header_adv
          display block
          width 100%
          height 100%
          >img
            width 100%
        >img
          position absolute
          top 33%
          right 2%
          width 18.75px

      .header_main
        width 100%
        .header_search
          width 100%
          box-sizing border-box
          padding 5px 10px
          >.header_search_inner
            width 100%
            padding 8px 0
            box-sizing border-box
            overflow hidden
            >span:nth-child(1)
              font-size 14px
              color #898989
            >span:nth-child(2)
              position relative
              >input
                background: #e9e9e9;
                border-radius: 4px;
                text-indent: 10px;
                font-size: 13px;
                outline: 0;
                height 25px
                width 65%
              >span
                position absolute
                right 5px
                top 5px
                font-size 10px
            >span:nth-child(3)
              display block
              float right
              padding-top 2px
              box-sizing border-box
              >.iconfont
                font-size 22px
                font-weight bold
                color #bbb


      .header_nav
        display flex
        width 448px
        .header_nav_item
          width 74.5px
          height 39px
          text-align center
          line-height: 39px;
        .fangKuai
          width 100%
          height 3px
          background #bfa
          .header_nav_text
              font-size 13px

    .warp
      width 100%
      ul
        width 100%
        list-style none
        li
          width 100%

          img
            width 100%

            display block









</style>
