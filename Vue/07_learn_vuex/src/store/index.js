import { createStore } from 'vuex'
import homeModule from './modules/home'
import counterModule from './modules/counter'
import { CHANGE_INFO } from './mutation_types'

const store = createStore({
  state: () => ({
    counter: 0,
    rootCounter: 100,
    name: 'test',
    level: 100,
    avatarUrl: 'https://wwww.test.com',
    friends: [
      {
        id: 111,
        name: 'test',
        age: 18,
      },
      {
        id: 112,
        name: 'test_02',
        age: 30,
      },
      {
        id: 113,
        name: 'test_03',
        age: 20,
      },
    ],
  }),
  getters: {
    // 1.基本使用
    doubleCounter(state) {
      return state.rootCounter * 2
    },
    totalAge(state) {
      return state.friends.reduce((preValue, item) => {
        return preValue + item.age
      }, 0)
    },
    // 2.在该getters属性中, 获取其他的getters
    message(state, getters) {
      return `name:${state.name} level:${state.level} friendTotalAge:${getters.totalAge}`
    },
    // 3.getters是可以返回一个函数的, 调用这个函数可以传入参数(了解)
    getFriendById(state) {
      return function (id) {
        const friend = state.friends.find((item) => item.id === id)
        return friend
      }
    },
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    changeName(state, payload) {
      state.name = payload
    },
    incrementLevel(state) {
      state.level++
    },
    [CHANGE_INFO](state, payload) {
      state.level = payload.level
      state.name = payload.name
    },
  },
  actions: {
    incrementAction(context) {
      // console.log(context.commit) // 用于提交mutation
      // console.log(context.getters) // getters
      // console.log(context.state) // state
      context.commit('increment')
    },
    changeNameAction(context, payload) {
      context.commit('changeName', payload)
    },
  },
  modules: {
    home: homeModule,
    counter: counterModule,
  },
})

export default store
