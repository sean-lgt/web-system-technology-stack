<template>
  <div>
    <h2 class="title">我是App.vue中的h2元素</h2>
    <AppHeader />
    <AppContent />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent,
  },
}
</script>

<style scoped>
.title {
  color: red;
}
</style>
