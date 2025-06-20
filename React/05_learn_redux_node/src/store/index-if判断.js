// const { createStore } = require('redux')
// createStore 为了兼容低版本代码，官方不会真正的删除 createStore API，只是将该API 标记为已弃用
// 解决弃用问题
const { legacy_createStore } = require('redux')

// 初始化数据
const initialState = {
  name: 'test',
  counter: 0,
}

// 定义 reducer 函数：纯函数
// 两个参数
// 参数一：store中目前保存的state
// 参数二：本次需要更新的action（dispatch传入的action）
// 返回值：新的state
const reducer = (state = initialState, action) => {
  // 有新数据进行更新的时候, 那么返回一个新的state
  if (action.type === 'change_name') {
    return { ...state, name: action.name }
  } else if (action.type === 'add_number') {
    return { ...state, counter: state.counter + action.num }
  }

  return state
}

// 创建store
const store = legacy_createStore(reducer)

module.exports = store
