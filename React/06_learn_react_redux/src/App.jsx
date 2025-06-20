import React, { PureComponent } from 'react'
import store from "./stores"

import About from './pages/About'
import Category from './pages/category'
import Home from './pages/Home'
import './App.css'

export class App extends PureComponent { 
  constructor() {
    super()

    this.state = {
      counter: store.getState().counter.counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState().counter
      this.setState({ counter: state.counter })
    })
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>App Counter: {counter}</h2>

        <div className='pages'>
          <About />
          <Category />
          <Home />
        </div>
      </div>
    )
  }

}

export default App