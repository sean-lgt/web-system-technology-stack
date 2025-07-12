import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

import routes from './router/index'

import { useScrollTop } from '@/hooks/index'

const App = memo(() => {
  useScrollTop() // 回到顶部
  
  return (
    <div className='app'>
      <AppHeader/>
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <AppFooter/>
    </div>
  )
})

export default App
