<template>
  <div>
    <!-- 在模板中找到id -->
    <h2>User:{{ $route.params.id }}</h2>
  </div>
</template>

<script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

const route = useRoute()
console.log('route', route.params.id)

// 获取route跳转id
onBeforeRouteUpdate((to, form) => {
  console.log('from:', from.params.id)
  console.log('to:', to.params.id)
})
</script>

<style lang="scss" scoped></style>
