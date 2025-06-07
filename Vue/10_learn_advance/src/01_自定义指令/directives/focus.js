export default function directiveFocus(app) {
  app.directive('focus', {
    mounted(el) {
      console.log('🚀【v-focus】应用的元素北挂载了', el)
      el?.focus()
    },
  })
}
