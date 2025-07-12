import React, { memo } from 'react'
import PropTypes from 'prop-types'

import SectionHeader from '@/components/section-header/index'
import SectionFooter from '@/components/section-footer/index'
import ScrollView from '@/base-ui/scroll-view/index'
import RoomItem from '@/components/room-item/index'

import { SectionV3Wrapper } from './style'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props

  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className='room-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem itemData={item} itemWidth="20%" key={item.id}/>
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name="plus"/>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3