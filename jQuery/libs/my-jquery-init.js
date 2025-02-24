// 立即执行函数（避免与全局变量冲突）
;(function (global, factory) {
  factory(global)
})(window, function (window) {
  // 注册一个全局变量
  function MyJQuery(selector) {
    return new MyJQuery.fn.init(selector)
  }

  // 原型方法
  MyJQuery.prototype = {
    constructor: MyJQuery,
    extend: function () {},
    text: function () {},
    ready: function () {},
  }

  // 类方法
  MyJQuery.noConflict = function () {}
  MyJQuery.isArray = function () {}
  MyJQuery.map = function () {}

  MyJQuery.fn = MyJQuery.prototype

  // 构造函数 创建 jQuery 对象
  MyJQuery.fn.init = function (selector) {
    if (!selector) {
      return this
    }

    // 拿到 DOM Element 源码
    var el = document.querySelector(selector)
    this[0] = el
    this.length = 1
    return this
  }

  MyJQuery.fn.init.prototype = MyJQuery.fn

  window.MyJQuery = window.$ = MyJQuery
})
