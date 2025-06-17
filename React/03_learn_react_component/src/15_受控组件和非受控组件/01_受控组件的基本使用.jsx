import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      username: "testname"
    }
  }

  inputChange(event) {
    console.log("inputChange:", event.target.value)
    this.setState({ username: event.target.value })
  }

  render() {
    const { username } = this.state

    return (
      <div>
        {/* 受控组件 */}
        {/* 受控组件是指表单元素的值由 React 组件的状态（state）控制。React 通过 value 属性绑定状态值，并通过事件（如 onChange）更新状态，从而完全管理表单元素的行为。 */}
        <input type="checkbox" value={username} onChange={e => this.inputChange(e)}/>

        {/* 非受控组件 */}
        {/* 非受控组件是指表单元素的值由 DOM 自身管理，而不是由 React 的状态控制。React 通过 ref 或直接访问 DOM 来获取表单值。 */}
        <input type="text" />
        <h2>username: {username}</h2>
      </div>
    )
  }
}

export default App