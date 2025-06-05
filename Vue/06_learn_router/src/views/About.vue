<template>
  <div class="about">
    <h2>About:{{ $route.query }}</h2>
    <button @click="handleGoBack">返回</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 点击返回
const handleGoBack = () => {
  router.go(-1)
}
</script>

<style scoped></style>
