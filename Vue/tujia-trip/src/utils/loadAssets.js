// 预加载所有 assets/img 下的 png, jpg, jpeg, svg 文件
const imageModules = import.meta.glob('@/assets/img/*/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default'
})

export const getAssetURL = (image) => {
  const path = `/src/assets/img/${image}`
  // console.log('path', imageModules)
  return imageModules[path]
}
