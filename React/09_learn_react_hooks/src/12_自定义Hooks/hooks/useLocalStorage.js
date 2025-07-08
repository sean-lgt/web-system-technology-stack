import { useState, useEffect } from 'react'

function useLocalStorage(key) {
  // 从 localStorage 中获取数据
  const [data, setData] = useState(() => {
    const item = localStorage.getItem(key)
    if (!item) return ''
    return JSON.parse(item)
  })

  // 监听data改变，一旦发生改变就存储data最新值
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data))
  }, [data])

  // 将data/setData的操作返回给组件, 让组件可以使用和修改值
  return [data, setData]
}

export default useLocalStorage
