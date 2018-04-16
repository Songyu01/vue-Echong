//入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
new Vue({
  el:'#app',
  render:h =>h(App),
  //映射成组件标签
  router,//注册上路由器（相关语法才可以使用）
  components:{
    App
  },
  //模板使用标签
  template:'<App/>'
})
