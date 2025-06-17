import React from "react";

// 类组件
class App extends React.Component{
  constructor() {
    super()

    this.state = {
      message:'app component'
    }
  }

  render () {
    const { message } = this.state
    
    return (
      <div>
        <h1>{message}</h1>
      </div>
    )
  }
}

export default App