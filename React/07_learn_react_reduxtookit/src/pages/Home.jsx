import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {addNumber } from '../stores/features/counter'
import { fetchHomeMultidataAction } from '../stores/features/home'

export class Home extends PureComponent {
  componentDidMount () {
    // 发起请求 异步提交action
    this.props.fetchHomeMultidata()
  }

  addNumber(num) {
    this.props.addNumber(num)
  }

  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <button onClick={e => this.addNumber(5)}>+5</button>
        <button onClick={e => this.addNumber(8)}>+8</button>
        <button onClick={e => this.addNumber(18)}>+18</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num))
  },
  fetchHomeMultidata() {
    dispatch(fetchHomeMultidataAction({name: "test", age: 18}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)