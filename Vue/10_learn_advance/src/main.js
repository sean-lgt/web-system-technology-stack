import './assets/main.css'

import { createApp } from 'vue'
// import App from './App.vue'
// import App from './01_自定义指令/App.vue'
// import App from './02_内置组件补充/App.vue'
// import App from './03_安装插件/App.vue'
// import App from './04_render函数/App.vue'
// import App from './05_JSX的语法/App.vue'
import App from './06_过渡动画/App.vue'

import directives from './01_自定义指令/directives/index'

createApp(App).use(directives).mount('#app')
