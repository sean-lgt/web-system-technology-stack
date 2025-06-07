<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <!-- mode属性掌握 -->
    <transition name="why" mode="out-in" appear="">
      <component :is="isShow ? 'Home' : 'About'"></component>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

const isShow = ref(true)
</script>

<style scoped>
h2 {
  display: inline-block;
}

/* transition */
.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-to,
.why-leave-from {
  opacity: 1;
}

.why-enter-active {
  animation: whyAnim 2s ease;
  transition: opacity 2s ease;
}

.why-leave-active {
  animation: whyAnim 2s ease reverse;
  transition: opacity 2s ease;
}

@keyframes whyAnim {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
