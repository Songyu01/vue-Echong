//入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
new Vue({
  el:'#app',
  render:h =>h(App),
  router,//注册上路由器（相关语法才可以使用）
  store,
  components:{
    App,

  },
})
