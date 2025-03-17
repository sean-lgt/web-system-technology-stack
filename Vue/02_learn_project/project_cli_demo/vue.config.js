const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      // 配置路径别名
      // @是已经配置好的路径别名: 对应的是src路径
      alias: {
        utils: '@/utils',
      },
    },
  },
  lintOnSave: false,
  // devServer: {
  //   lintOnSave: false, //关闭eslint检查s
  //   // open: true,
  //   // host: 'localhost',
  //   // port: 8080,
  //   // https: false,
  //   // hotOnly: false,
  //   // proxy: null,
  //   // proxy: {
  //   //   '/api': {
  //   //     target: 'http://localhost:3000',
  // },
})
