<template>
  <div class="app">
    <!-- store中 -->
    <h2>App当前计数：{{ $store.state.counter }}</h2>
    <hr />
    <Home />
  </div>
</template>

<script setup>
import Home from './views/Home.vue'
</script>

<style lang="scss" scoped></style>
