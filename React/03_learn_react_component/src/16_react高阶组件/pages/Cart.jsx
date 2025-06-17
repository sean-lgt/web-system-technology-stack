import React, { PureComponent } from 'react'
import loginAuth from '../hoc/login-auth'

export class Cart extends PureComponent {
  render() {
    return (
      <h2>Cart Page</h2>
    )
  }
}

export default loginAuth(Cart)