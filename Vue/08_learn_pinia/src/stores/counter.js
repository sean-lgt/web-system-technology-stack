import { defineStore } from 'pinia'

import useUser from './user'

const useCounter = defineStore('counter', {
  state: () => ({
    count: 0,
    firends: [
      { id: 1, name: 'test_01' },
      { id: 2, name: 'test_02' },
      { id: 3, name: 'test_03' },
    ],
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    doubleCountAndOne() {
      return this.doubleCount + 1
    },
    // 3.getters也支持返回一个函数
    getFirendById(state) {
      return function (id) {
        for (let i = 0; i < state.firends.length; i++) {
          const firends = state.firends[i]
          if (firends.id === id) {
            return firends
          }
        }
      }
    },
    // 4.getters中用到别的store中的数据
    showMessage(state) {
      // 1.获取user信息
      const userStore = useUser()

      // 2.获取自己的信息

      // 3.拼接信息
      return `name:${userStore.name}-count:${state.count}`
    },
  },
  actions: {
    increment() {
      this.count++
    },
    incrementNum(num) {
      this.count += num
    },
  },
})

export default useCounter
