import React, { memo, useState, useEffect } from "react";

const App = memo(() => {
  const [count, setCount] = useState(200)

  useEffect(() => { 
    // 当前传入的回调函数会在组件被渲染完成后, 自动执行
    // 网络请求/DOM操作(修改标题)/事件监听
    console.log('执行useEffect')
    document.title = `当前计数: ${count}`
  })
  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={e => setCount(count+1)}>+1</button>
    </div>
  )
})

export default App