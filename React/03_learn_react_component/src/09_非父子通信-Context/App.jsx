import React, { Component } from 'react'

import ThemeContext from "./context/theme-context"
import UserContext from './context/user-context'

import Profile from './Profile'
import Home from './Home'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      info: {
        nickname: "kobe",
        age:30
      }
    }
  }

  render () {
    
    const { info} = this.state
    return (
      <div>
        <h2>App</h2>
         {/* 第二步操作: 通过ThemeContext中Provider中value属性为后代提供数据 */}
        <UserContext.Provider value={{nickname: "kobe", age: 30}}>
          <ThemeContext.Provider value={{color: "red", size: "30"}}>
            <Home {...info}/>
          </ThemeContext.Provider>
        </UserContext.Provider>
        <Profile/>
      </div>
    )
  }
}

export default App