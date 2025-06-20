const store = require('./store/index')

console.log('🚀【store ~ state】', store.getState())

// 修改store中的数据 必须使用 action
const nameAction = {
  type: 'change_name',
  name: 'sean',
}
store.dispatch(nameAction)

console.log('🚀【store ~ state】', store.getState())
