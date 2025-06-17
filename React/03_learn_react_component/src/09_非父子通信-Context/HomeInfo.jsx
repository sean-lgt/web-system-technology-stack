import React, { Component } from 'react'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'

export class HomeInfo extends Component{
  render() {
    // 获取数据并使用数据
    console.log('🚀【context】', this.context);
    
    return (
      <div>
        <h2>HomeInfo: {this.context.color}</h2>
        <UserContext.Consumer>
          {
            value => {
              return (
                <h2>Info User: { value.name}</h2>
              )
            }
          }
        </UserContext.Consumer>
      </div>
    )
  }
}

// 设置组件的contextType为谋一个Context
HomeInfo.contextType = ThemeContext

export default HomeInfo