import React, { memo,useEffect } from 'react'
import { shallowEqual, useSelector,useDispatch } from 'react-redux'

import HomeBanner from './components/home-banner/index'
import HomeLongfor from './components/home-longfor/index'
import HomeSectionV1 from './components/home-section-v1/index'
import HomeSectionV2 from './components/home-section-v2/index'
import HomeSectionV3 from './components/home-section-v3/index'
import { HomeWrapper } from './style'

import { fetchHomeDataAction } from '@/store/modules/home'
import { changeHeaderConfigAction } from '@/store/modules/main'

import { isEmptyO } from '@/utils/index'


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
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className='content'>
        { isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        { isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        { isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}/> }
        { isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        { isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        { isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}/> }
      </div>
    </HomeWrapper>
  )

})

export default Home