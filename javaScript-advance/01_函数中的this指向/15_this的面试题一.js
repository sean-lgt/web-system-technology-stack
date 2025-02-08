var name = 'window'

var person = {
  name: 'person',
  sayName: function () {
    console.log('this', this.name)
  },
}

function sayName() {
  var sss = person.sayName

  sss() // 默认绑定 window -> window

  person.sayName() // 隐式绑定 person -> person

  person.sayName() // 隐式绑定
  ;(b = person.sayName)() // 间接函数引用, window -> window
}
