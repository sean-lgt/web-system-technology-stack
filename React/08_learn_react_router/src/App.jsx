import React from 'react'
import { Link, Navigate, Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import routes from './router'
import "./App.css"

export function App(props) {
  const navigate = useNavigate()
  
  function navigateTo(path) {
    navigate(path)
  }

  return (
    <div className='app'>
      <div className='header'>
        <span>header</span>
        <div className='nav'>
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/login">登录</Link>
          <button onClick={e => navigateTo("/category")}>分类</button>
          <span onClick={e => navigateTo("/order")}>订单</span>

          <Link to="/user?name=why&age=18">用户</Link>
        </div>
        <hr />
      </div>
      <div className='content'>
        {useRoutes(routes)}
      </div>
      <div className='footer'>
        <hr />
        Footer
      </div>
    </div>
  )
}

export default App