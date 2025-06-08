const obj = {
  name: 'test',
  age: 18,
}

function foo() {
  console.log('🚀【foo】', obj.name)
  console.log('🚀【foo】', obj.age)
  console.log('🚀【foo function】')
}

function bar() {
  console.log('🚀【bar】', obj.name + ' hello')
  console.log('🚀【bar】', obj.age + 10)
  console.log('🚀【bar function】')
}

// 设置一个专门执行响应式函数的一个函数
const reactiveFns = []

function watchFn(fn) {
  reactiveFns.push(fn)
  fn()
}

watchFn(function foo() {
  console.log('🚀【foo】', obj.name)
  console.log('🚀【foo】', obj.age)
  console.log('🚀【foo function】')
})

watchFn(function bar() {
  console.log('🚀【bar】', obj.name + ' hello')
  console.log('🚀【bar】', obj.age + 10)
  console.log('🚀【bar function】')
})

// 修改obj的属性
console.log('🚀【name 发生变化】>>>>>>>>>>>>>>>>')
obj.name = 'hello'

// 手动执行响应式
reactiveFns.forEach((fn) => fn())
