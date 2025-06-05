const home = {
  state: () => ({
    banners: [],
    recommends: [],
  }),
  mutations: {
    changeBanners(state, banners) {
      state.banners = banners
    },
    changeRecommends(state, playod) {
      state.recommends = playod
    },
  },
  actions: {
    fetchHomeMultidataAction(context) {
      return new Promise(async (resolve, reject) => {
        const res = await fetch('http://123.207.32.32:8000/home/multidata')
        const data = await res.json()

        // 修改state数据
        context.commit('changeBanners', data.data.banner.list)
        context.commit('changeRecommends', data.data.recommend.list)

        resolve()
      })
    },
  },
}

export default home
