import React, { memo, useState } from 'react'

const App = memo(() => {
  const [message, setMessage] = useState('hello world')
  
  function changeMessage () {
    setMessage('你好啊, test!')
  }

  return (
    <div>
      <h2>App: {message}</h2>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  )
})

export default App