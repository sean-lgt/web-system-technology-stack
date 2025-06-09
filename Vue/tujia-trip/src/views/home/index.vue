<template>
  <div class="home" ref="homePageRef">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box></home-search-box>
    <home-categories></home-categories>
  </div>
</template>

<script setup>
import HomeNavBar from './components/home-nav-bar.vue'
import HomeSearchBox from './components/home-search-box.vue'
import HomeCategories from './components/home-categories.vue'

import useHomeStore from '@/stores/modules/home'

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHomeHotSuggests()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
}

.banner {
  img {
    width: 100%;
  }
}
</style>
