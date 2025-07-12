import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HousePicture from './components/house-picture'

import { DetailWrapper } from './style'

import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const { detailInfos } = useSelector((state) => ({
    detailInfos: state.detail.detailInfos
  }))
 
  const { picture_urls } = detailInfos
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, isHome: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <HousePicture picturesData={picture_urls}/>
    </DetailWrapper>
  )
})

export default Detail
