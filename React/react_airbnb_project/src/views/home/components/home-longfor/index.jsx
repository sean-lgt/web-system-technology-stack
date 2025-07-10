import React, { memo } from 'react'
import PropTypes from 'prop-types'

import ScrollView from '@/base-ui/scroll-view/index'
import LongforItem from '@/components/longfor-item/index'
import SectionHeader from '@/components/section-header/index'

import { LongforWrapper } from './style'

const HomeLongfor = memo((props) => {
  const { infoData} = props

  return (
    <LongforItem>
      <SectionHeader title={infoData.title} subtitle={ infoData.subtitle}></SectionHeader>
      <div className="longfor-list">
        <ScrollView>
          { 
            infoData.list.map(item => {
              return (
                <LongforItem itemData={item} key={ item.city}></LongforItem>
              )
            })
          }
        </ScrollView>
     </div>
    </LongforItem>
  )
})

HomeLongfor.prototype = {
  infoData: PropTypes.object
}

export default HomeLongfor