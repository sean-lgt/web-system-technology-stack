import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import IconLogo from '@/assets/svg/icon_logo'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()

  function logoClickHandle() {
    navigate("/home")
  }
  return (
    <LeftWrapper onClick={logoClickHandle}>
      <div className="logo">
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft