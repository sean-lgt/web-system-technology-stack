// 立即执行函数
;(function (window, $) {
  // jq的原型   $.fn

  // 1.在jquery的原型上添加了一个 showlinklocation
  // $.fn.showlinklocation = function() {
  //   console.log(this) // jQuery对象
  //   this.append('(http://www.text.com)')
  // }

  // 2.需要过滤出a元素
  // $.fn.showlinklocation = function() {
  //   console.log(this) // jQuery对象
  //   this.filter('a').append('(http://www.text.com)')
  // }

  // 3.需要遍历a元素
  $.fn.showlinklocation = function () {
    console.log(this) // jQuery对象
    this.filter('a').each(function () {
      var $a = $(this) // DOM Element
      var link = $a.attr('href')
      $a.append(`(${link})`)
    })
    return this
  }

  //
})(window, jQuery)
