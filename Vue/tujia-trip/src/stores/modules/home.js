import { defineStore } from 'pinia'
import {
  getHomeHotSuggests,
  getHomeCategories,
  getHomeHouseList
} from '@/services/index.js'

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: [],

    currentPage: 1,
    houselist: []
  }),
  actions: {
    async fetchHomeHotSuggests() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouseListData() {
      const res = await getHomeHouseList(this.currentPage)
      this.houselist.push(...res.data.data)
      this.currentPage++
    }
  }
})

export default useHomeStore
