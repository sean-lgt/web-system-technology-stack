export const applyMiddleware = (store, ...fns) => {
  fns.forEach((fn) => {
    fn(store)
  })
}

export default applyMiddleware
