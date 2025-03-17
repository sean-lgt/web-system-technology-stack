<template>
  <div>AppContent</div>
  <button @click="message = '你好啊,李银河!'">修改message</button>
  <button @click="info.friend.name = 'james'">修改info</button>
  <div>
    <h2>当前计数: {{ counter }}</h2>
    <button @click="counter++">+1</button>
    <button @click="name = 'kobe'">修改name</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'

export default {
  setup() {
    // 1.定义数据
    const message = ref('Hello World')
    const info = reactive({
      name: 'why',
      age: 18,
      friend: {
        name: 'kobe',
      },
    })

    // 2.侦听数据的变化
    watch(message, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })
    watch(
      info,
      (newValue, oldValue) => {
        console.log(newValue, oldValue)
        console.log(newValue === oldValue)
      },
      {
        immediate: true,
      }
    )

    // 3.监听reactive数据变化后, 获取普通对象
    watch(
      () => ({ ...info }),
      (newValue, oldValue) => {
        console.log(newValue, oldValue)
      },
      {
        immediate: true,
        deep: true,
      }
    )

    //
    const counter = ref(0)
    const name = ref('why')

    // watch(counter, (newValue, oldValue) => {})

    // 1.watchEffect传入的函数默认会直接被执行
    // 2.在执行的过程中, 会自动的收集依赖(依赖哪些响应式的数据)
    const stopWatch = watchEffect(() => {
      console.log('-------', counter.value, name.value)

      // 判断counter.value > 10
      if (counter.value >= 10) {
        stopWatch()
      }
    })

    return {
      message,
      info,
      counter,
      name,
    }
  },
}
</script>

<style scoped></style>
