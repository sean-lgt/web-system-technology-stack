<template>
  <div class="app">
    <!-- name 属性 -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/index.vue'

import { useRoute } from 'vue-router'

const router = useRoute()
</script>

<style lang="scss" scoped></style>
