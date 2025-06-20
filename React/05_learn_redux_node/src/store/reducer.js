const { ADD_NUMBER, CHANGE_NAME } = require('./constants')

// 初始化数据
const initialState = {
  name: 'test',
  counter: 0,
}

// 定义 reducer 函数：纯函数
const reducer = (state = initialState, action) => {
  // console.log('🚀【执行】', action)
  // console.log('🚀【sss】', ADD_NUMBER == action.type)
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name }
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    default:
      return state
  }
}

module.exports = reducer
