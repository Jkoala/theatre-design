import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//导入 elelment js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入全局样式表
import './assets/css/global.css'

Vue.config.productionTip = false

import axios from 'axios'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://127.0.0.1:3000'
// 在 request 拦截器中，展示进度条 NProgress.start()

//视频播放器
// import VideoPlayer from 'vue-video-player'
// import 'vue-video-player/src/custom-theme.css'
// import 'video.js/dist/video-js.css'
//
// Vue.use(VideoPlayer)


Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
