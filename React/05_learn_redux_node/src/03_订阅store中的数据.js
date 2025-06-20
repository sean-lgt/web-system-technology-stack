const store = require('./store/index')

const unsubscribe = store.subscribe(() => {
  console.log('🚀【订阅数据的变化】', store.getState())
})

// 修改store中的数据 必须action
store.dispatch({ type: 'change_name', name: 'sean' })
store.dispatch({ type: 'change_name', name: 'lili' })
// 修改counter
store.dispatch({ type: 'add_number', num: 10 })
store.dispatch({ type: 'add_number', num: 20 })
store.dispatch({ type: 'add_number', num: 30 })
store.dispatch({ type: 'add_number', num: 100 })

unsubscribe()
