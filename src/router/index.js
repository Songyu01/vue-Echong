/*
路由模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Classify from '../pages/Classify/Classify.vue'
import Cart from '../pages/Cart/Cart.vue'
import Home from '../pages/Home/Home.vue'
import left_list from '../pages/Classify/left_list/letf_list.vue'
import right_list from '../pages/Classify/right_list/right_list.vue'

Vue.use(VueRouter)

//向外默认暴露一个路由器对象

export default new VueRouter({ //配置对象
  routes:[
    {
      path:'/msite', //
      component:Msite
    },
    {
      path:'/classify',
      component:Classify,
      children:[
        {path:'/classify/left_list',
          component:left_list},
        {path:'/classify/right_list',
          component:right_list},
        {
          path:'/', //重定向
          redirect:'/classify/left_list',
        },
      ]

    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/', //重定向
      redirect:'/msite',
    },
  ]


})

