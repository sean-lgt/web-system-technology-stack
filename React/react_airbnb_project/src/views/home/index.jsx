import React, { memo,useEffect } from 'react'
import { shallowEqual, useSelector,useDispatch } from 'react-redux'

import HomeBanner from './components/home-banner/index'
import HomeSectionV1 from './components/home-section-v1/index'
import { HomeWrapper } from './style'

import { fetchHomeDataAction } from '@/store/modules/home'


const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }))

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxxx"))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className='content'>
        <HomeSectionV1 infoData={goodPriceInfo}/>
      </div>
    </HomeWrapper>
  )

})

export default Home