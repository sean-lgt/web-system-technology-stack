import { defineStore } from 'pinia'

const useUser = defineStore('user', {
  state: () => ({
    name: 'test',
    age: 18,
    level: 1,
  }),
})

export default useUser
