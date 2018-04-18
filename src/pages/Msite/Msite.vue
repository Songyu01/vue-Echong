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
          <div class="header_nav" >
            <div class="header_nav_item" v-for="(text,index) in indexS.menus" :key="index">
              <span class="header_nav_text on" style="color:#bfa;">{{text.menu_name}}</span>
              <div class="fangKuai"></div>
            </div>
          </div>
        </div>
      </header>
      <!--中间内容-->
      <div class="warp">
        <!--轮播部分-->
        <div class="home_nav">
          <div class="swiper-container">
          <!-- 轮播图 -->
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2018-04/11/21/8136c3a9e8ffcbfe1ace7ed761201173.jpg@!water">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="">
                <img src="https://img2.epetbar.com/nowater/2018-04/16/13/b3a4a0c7a728aa7ef7537388abd6b4fb.jpg@!water">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="">
                <img src="https://img2.epetbar.com/nowater/2018-04/16/14/90471637375c21c11d67313793bca97c.jpg@!water">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="">
                <img src="https://img2.epetbar.com/nowater/2018-04/15/22/3f9a93b4cde5555cbca5f9e05d7dfad7.jpg@!water">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="">
                <img src="https://img2.epetbar.com/nowater/2018-04/16/10/57af2370b7e9f5167fa1373fa665d4c6.jpg@!water">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2018-04/09/18/6a92c91bf6172f6c004debe5033e716e.jpg@!water">
              </a>
            </div>
          </div>
          <!-- 分页器/小圆点 -->
          <div class="swiper-pagination"></div>
        </div>

      </div>
        <!--小列表-->
        <div class="lists">
          <div class="Xcoin" v-if="indexS.datas">
            <a href="#" v-for="(list,index) in indexS.datas[1].menus" :key="index"><img :src="list.image" alt=""></a>
          </div>
        </div>
        <!--新人图片-->
        <div class="xinRen">
          <a href="#"><img src="https://img2.epetbar.com/nowater/2017-12/18/09/60c354a5d94be9fd114523ee77259c73.gif" alt=""></a>
        </div>
        <!--每日疯抢外边的包裹器-->
        <div class="bigWarp">

          <!--每日疯抢-->
          <div class="min_header">
            <div class="min_Fq"><img src="https://static.epetbar.com/static_wap/appmall/main/new_index_icon_suprice.png?version=03" alt=""></div>
            <div class="M_text">本场结束</div>
            <div class="time_conent">
                <span class="time_text">14</span>
                <span class="time_D" >:</span>
                <span class="time_text">00</span>
            </div>
            <div class="gd_Tp"><a href="#"><img src="https://img2.epetbar.com/nowater/2018-02/02/12/80acfffe2d91b341fd2c8de903b3eace.png" alt=""></a></div>
          </div>
          <!--折扣商品图片-->
          <div class="min_Tp">
            <div class="tp_dazhe">
              <div>
                <a href="#"><img src="https://img1.epetbar.com/2016-06/27/14/b0fdb7e7406c5ca46fd1aea8add6392a.jpg?x-oss-process=style/fill&$1=300&$2=300" alt=""></a>
                <span>￥6.90</span>
              </div>
              <p>省4.60</p>
            </div>

          </div>

        </div>
        <!--中间线-->
        <div class="Z_xian">
          <div class="Bx"></div>
        </div>

        <!--图片区-->
        <div class="tp_qu">
          <div class="tp_left">
            <a href="#"><img src="https://img2.epetbar.com/nowater/2017-12/13/09/1ec9379f83eb421db9a09195c9594e29.jpg@!water" alt=""></a>
          </div>
          <div class="tp_right">
            <a href="#"><img src="https://img2.epetbar.com/nowater/2017-12/13/10/35bb7f3bd146cb9a9e74a935803f0d9a.jpg@!water" alt=""></a>
            <a href="#"><img src="https://img2.epetbar.com/nowater/2017-12/19/13/62a49af47aa7f713fc0ac0c9b9657e33.jpg@!water" alt=""></a>
          </div>
        </div>

        <!--中间线-->
        <div class="Z_xian">
          <div class="Bx"></div>
        </div>

        <!--图片-->
        <div class="Tu_P">
          <div>
            <a href="#"><img src="https://img2.epetbar.com/nowater/2018-04/13/10/4ab786b5e5c592c05e13c7f6b780b75b.jpg@!water" alt=""></a>
          </div>
        </div>

        <!--中间线-->
        <div class="Z_xian">
          <div class="Bx"></div>
        </div>

        <!--潮牌视频-->
        <div class="TP_1">
          <div class="qBU">
            <div class="cShipin">
              <a href="#"><img src="https://img2.epetbar.com/nowater/2017-12/20/15/38688d8d92c7da7aae64eda8b8bb3a94.jpg" alt=""></a>
            </div>
           <div class="gengDuo">
             <a href="#"><img src="https://img2.epetbar.com/nowater/2017-12/20/15/0855ecf27a6ca47b32170caab2503ddd.jpg" alt=""></a>
           </div>

          </div>
          <div class="chaoPai">
            <a href="#"><img src="https://img1.epetbar.com/2018-04/15/22/822b52d6f9a909d5e427efe9cef5a91e.jpg?x-oss-process=style/waterfall&$1=500" alt=""></a>
          </div>

        </div>

        <!--文字观看人数-->
        <div class="guanKan">
          <div class="TXT">SodaPup 易拉罐漏失狗玩具 口感软弹洁牙护牙</div>
          <div class="shuLiang">11685 | 01:29</div>
        </div>

        <!--中间线-->
        <div class="Z_xian">
          <div class="Bx"></div>
        </div>

        <!--四个图片-->
        <div class="four">
          <div class="aiChong">
            <a href="#"><img src="https://img2.epetbar.com/nowater/2018-02/05/14/4c32811744e04f6b63632b42a0d5325d.jpg@!water" alt=""></a>
          </div>
          <div class="zhuanPan">
            <a href="#"><img src="https://img2.epetbar.com/nowater/2018-02/05/14/4c32811744e04f6b63632b42a0d5325d.jpg@!water" alt=""></a>
          </div>
          <div class="tiYan">
            <a href="#"><img src="https://img2.epetbar.com/nowater/2018-02/05/14/4c32811744e04f6b63632b42a0d5325d.jpg@!water" alt=""></a>
          </div>
          <div class="fuWu">
            <a href="#"><img src="https://img2.epetbar.com/nowater/2018-02/05/14/4c32811744e04f6b63632b42a0d5325d.jpg@!water" alt=""></a>
          </div>
        </div>

        <!--中间线-->
        <div class="Z_xian">
          <div class="Bx"></div>
        </div>

        <!--品牌特卖-->
        <div class="TP_1">
          <div class="qBU">
            <div class="cShipin">
              <a href="#"><img src="https://img2.epetbar.com/nowater/2017-12/13/13/11acf905ca327ed7aae8f9b4851850a0.jpg" alt=""></a>
            </div>
            <div class="gengDuo">
              <a href="#"><img src="https://img2.epetbar.com/nowater/2017-12/20/15/0855ecf27a6ca47b32170caab2503ddd.jpg" alt=""></a>
            </div>

          </div>
          <div class="chaoPai">
            <a href="#"><img src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" alt=""></a>
          </div>

        </div>

        <!--中间线-->
        <div class="Z_xian">
          <div class="Bx"></div>
        </div>

      <!--底部-->

        <!--联系方式-->
        <div class="connection">
          <a href="#" class="connection_our">
            <span class="connection_our_1">触屏版</span>
            <span>手机客户端</span>
            <span>关于我们</span>
            <span>联系我们</span>
          </a>
          <div class="connection_com">
            <span>@wap.epeet.xcom 版权:重庆易宠科技有限公司</span>
          </div>
        </div>
      </div>

    </div>


</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    computed:{
      // 获取状态数据
      ...mapState(['indexS'])
    },

    mounted(){
      this.$store.dispatch('getIndex')

      setTimeout(() => {
        let swiper = new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          }
        })
      },1000)
    },




  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #home_page
    width 100%
    height 100%
    .header
      width 100%
      height 100%
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
        width 100%
        overflow hidden
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
      height 100%
      margin-bottom  46px
      overflow hidden
      .home_nav
        width 100%
        height 160px
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              width 100%
              height 100%
              a
                width 100%
                height 100%
                img
                  display block
                  width 100%
                  height 160px
        /*小列表选项*/
      .lists
        width 100%
        height 180px
        .Xcoin
          display flex
          flex-wrap wrap
          width 100%
          height 100%
          a
            display block
            width 20%
            height 90px
            img

              width 100%
              height 100%
      /* <!--新人图片-->*/
      .xinRen
        width 100%
        height 120px
        a
          display block
          width 100%
          height 100%
          img
            display: block
            width 100%
            height 100%
            /*疯抢*/
      .bigWarp
        width 100%
        height 100%
        .min_header
          width 100%
          box-sizing border-box
          position relative
          height 39.2px
          padding 10px
          .min_Fq
            img
              display block
              width 85px
              height 19.2px

          .M_text
            font-size 14px
            position: absolute;
            right: 147px;
            top 12px

          .time_conent
            position absolute
            overflow hidden
            top 12px
            right: 87px;
            .time_text
              display block
              width 16px
              height 16px
              border solid #7e8c8d 1px
              font-size 12px
              text-align center
              line-height 16px
              float left
            .time_D
              display block
              width 18px
              height 18px
              text-align center
              line-height 18px
              float left
          /*更多图片*/
          .gd_Tp
            a
              display block
              width 67.5px
              height 34px
              float right
              position absolute
              right 15px
              top 0px
              img
                display block
                width 100%
                height 100%
      .min_Tp
        width 370px
        height 130.56px
        display flex
        .tp_dazhe
          width 84.56px
          height 84.56px
          a
            display block
            width 100%
            height 100%
            img
              display block
              width 100%
              height 100%
          span
            display: block
            font-size  12px
            color red
            margin-left 20px


        p
          color #7e8c8d
          font-size 13px
          padding 10px 20px
      /*   分界线*/
      .Z_xian
        width 100%
        height 10px
        .Bx
          width 100%
          height 100%
          background cornflowerblue



        .tu-pian
          width 100%
          height 160px
          padding-top 10 red
          padding-bottom 10 red
          a
            display block
            width 100%
            height 100%
            img
              display block
              width 100%
              height 100%

        #TP
          width 100%
          height 72.36px
          position relative
          .tu-pian1
            width 50%
            height 100%
            a
              display block
              width 100%
              height 100%
              img
                display block
                width 100%
                height 100%
          .tu-pian2
            position absolute
            left 310px
            top 10px
            width 50%
            height 100%
            a
              display block
              width 100%
              height 100%
              img
                display block
                width 66px
                height 50px

      .tp_qu
        width 100%
        height 250px
        .tp_left
          width 50%
          height 100%
          float left
          a
            display block
            width 100%
            height 100%
            img
              display block
              width 100%
              height 100%

        .tp_right
          width 50%
          height 100%
          float right
          a
            display
            width 100%
            height 100%
            img
              display block
              width 100%
              height 50%
        .tp-pian2
          width 100%
          height 210.75px
          .tp-P
            width 100%
            height 100%
            a
              display block
              width 100%
              height 100%
              img
                display block
                width 100%
                height 100%

      .Tu_P
        width 100%
        height 160
        a
          display block
          width 100%
          height 100%
          img
            width 100%
            height 100%
      .TP_1
        width 100%
        .chaoPai
          width 100%
          height 100%
          a
            display block
            width 100%
            height 100%
            img
              display block
              width 100%
              height 100%
      .qBU
        width 100%
        height 73.26px
        overflow hidden
        .cShipin
          width 100%
          height 100%
          a
            display block
            width 50%
            height 100%
            img
              display block
              width 100%
              height 100%

        .gengDuo
          width 100%
          height 100%
          loat right
          a
          display block
          width 50%
          height 100%
          img
            display block
            width 100%

            height 100%



      .guanKan
        width 100%
        height 58px
        .TXT
          width 100%
          height 50%
          text-align center
          line-height 29px
          font-size 12px
        .shuLiang
          width 100%
          height 50%
          text-align center
          line-height 29px
          font-size 12px


      .four
        width 100%
        height 200px
        .aiChong
          width 50%
          height 50%
          float left
          a
            display block
            width 100%
            height 100%
            img
              display block
              width 100%
              height 100%

        .zhuanPan
          width 50%
          height 50%
          float left
          a
            display block
            width 100%
            height 100%
            img
              display block
              width 100%
              height 100%

        .tiYan
          width 50%
          height 50%
          float left
          a
            display block
            width 100%
            height 100%
            img
              display block
              width 100%
              height 100%

        .fuWu
          width 50%
          height 50%
          float left
          a
            display block
            width 100%
            height 100%
            img
              display block
              width 100%
              height 100%

</style>



