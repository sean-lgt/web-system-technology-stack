import React, { PureComponent } from 'react'
import "./App.css"
import Home from './home/index'
import Profile from './profile/index'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className='title'>我是标题</h2>
        <p className='content'>我是内容, 哈哈哈哈</p>

        <Home/>
        <Profile/>
      </div>
    )
  }
}

export default App