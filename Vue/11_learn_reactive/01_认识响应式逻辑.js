let num = 100

console.log('🚀【num * 2】', num * 2)
console.log('🚀【num * num】', num * num)

num = 200

// 对象的响应式
const obj = {
  name: 'test',
  age: 18,
}

console.log('🚀【obj.name】', obj.name)
console.log('🚀【obj.age】', obj.age)

function foo() {
  console.log('🚀【obj.name】', obj.name)
  console.log('🚀【obj.age】', obj.age)
}

function bar() {
  console.log('🚀【obj.age + 100】', obj.age + 100)
}

// 修改obj对象
obj.name = 'kobe'
obj.age = 20
