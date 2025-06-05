<template>
  <div class="login">
    <h2>登录界面</h2>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogin = () => {
  window.localStorage.setItem('token', 'test_token')

  // 跳转到order页面
  router.push('/order')
}
</script>

<style lang="scss" scoped></style>
