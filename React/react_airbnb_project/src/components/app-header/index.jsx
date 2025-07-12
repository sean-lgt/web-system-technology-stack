import React, { memo,useState,useEffect,useRef } from "react";
import { ThemeProvider } from 'styled-components'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

import HeaderLeft from './components/header-left'
import HeaderCenter from './components/header-center'
import HeaderRight from './components/header-right'
import {HeaderWrapper,SearchAreaPlaceholder } from './style'

import { useScrollPosition} from '@/hooks/index'

const AppHeader = memo(() => { 
  const [isSearch, setIsSearch] = useState(false)
  const [isAlpha, setIsAlpha] = useState(false)

  const {headerConfig } = useSelector((state) => ({
    headerConfig:state.main.headerConfig
  }))
  const { isFixed, isHome } = headerConfig

  /** 其他hooks的逻辑 */
  const { scrollY } = useScrollPosition()
  if (isHome && scrollY === 0 && !isSearch) {
    setIsAlpha(true)
    setIsSearch(true)
  }
  if (isHome && isAlpha && scrollY > 0 && isSearch) {
    setIsAlpha(false)
    setIsSearch(false)
  }

  const prevY = useRef()
  useEffect(() => { prevY.current = 0 }, [])
  if (!isSearch) prevY.current = scrollY
  if (Math.abs(prevY.current - scrollY) > 30 && isSearch) setIsSearch(false)
  
  /** 事件处理逻辑 */
  function searchBarClickHandle () {
    console.log(">>>>>触发")
    setIsSearch(true)
  }

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter isSearch={isSearch} searchBarClick={searchBarClickHandle}/>
            <HeaderRight />
          </div>
          <SearchAreaPlaceholder isSearch={isSearch} />
        </div>
        { isSearch && !isAlpha && <div className='cover' onClick={e => setIsSearch(false)}></div> }
      </HeaderWrapper>
    </ThemeProvider>
   
  ) 
})

export default AppHeader