import React from 'react'

// 创建一个Context对象
const ThemeContext = React.createContext({
  color: 'blue',
  size: 10,
})

export default ThemeContext
