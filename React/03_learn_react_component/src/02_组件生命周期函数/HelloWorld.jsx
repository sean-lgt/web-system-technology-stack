import React from "react";

class HelloWorld extends React.Component{
  // 构造函数
  constructor () {
    console.log('🚀【hello-world constructor】',);
    super()
    
  
    this.state = {
      message: 'Hello World'
    }
  }

  changeText () {
    this.setState({
      message: 'Hello React'
    })
  }

  // 执行render函数
  render () {
    console.log('🚀【hello-world render】',);

    const { message } = this.state
    
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={e=>this.changeText()}>改变文本</button>
      </div>
    )
  }

  // 组件被渲染到DOM上，被挂载到DOM
  componentDidMount () {
    console.log('🚀【hello-world componentDidMount】',);
  }

  // 组件的DOM被更新完成，DOM发生更新
  componentDidUpdate () {
    console.log('🚀【hello-world componentDidUpdate】',);
  }

  // 组件被卸载
  componentWillUnmount () {
    console.log('🚀【hello-world componentWillUnmount】',);
  }

  // 不常用的生命周期补充
  shouldComponentUpdate () {
    return true
  }

  getSnapshotBeforeUpdate () {
    console.log('🚀【hello-world getSnapshotBeforeUpdate】',);
    return {
      scrollPositiion:1000
    }
  }
}

export default HelloWorld;