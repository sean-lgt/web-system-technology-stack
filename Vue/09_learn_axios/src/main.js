import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import commonRequest from './service/index'

createApp(App).mount('#app')

commonRequest
  .request({
    url: '/lyric?id=500665346',
  })
  .then((res) => {
    console.log('res:', res)
  })

commonRequest
  .get({
    url: '/lyric',
    params: {
      id: 500665346,
    },
  })
  .then((res) => {
    console.log('res:', res)
  })
