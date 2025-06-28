import React, { memo } from "react";

import HeaderLeft from './components/header-left'
import HeaderCenter from './components/header-center'
import HeaderRight from './components/header-right'

import { HeaderWrapper } from './style'

const AppHeader = memo(() => { 
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight/>
    </HeaderWrapper>
  ) 
})

export default AppHeader