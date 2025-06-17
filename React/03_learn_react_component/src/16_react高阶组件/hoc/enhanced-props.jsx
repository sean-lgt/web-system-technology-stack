import { PureComponent } from 'react'

// 定义组件：给一些需要特殊数据的组件 注入props
function enhancedProps(WrapperComponent) {
  return class extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        userInfo: {
          name: 'testsean',
          level: 99,
        },
      }
    }
    render() {
      return <WrapperComponent {...this.props} {...this.state.userInfo} />
    }
  }
}

export default enhancedProps
