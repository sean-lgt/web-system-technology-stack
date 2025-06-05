<template>
  <div>
    <h2>Home</h2>
    <div class="home-nav">
      <router-link to="/home/recommend">推荐</router-link>
      <router-link to="/home/ranking"></router-link>
    </div>
    <button @click="handleLogout">退出登录</button>

    <!-- 占位组件 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
const handleLogout = () => {
  window.localStorage.removeItem('token')
}
</script>

<style lang="scss" scoped></style>
