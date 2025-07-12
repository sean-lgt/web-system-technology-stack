import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import RoomItem from "@/components/room-item/index"
import { HouseWrapper } from './style'

const HouseList = memo(() => {
  const { houseList } = useSelector((state) => ({
    houseList: state.entire.houseList
  }))

  return (
    <HouseWrapper>
      {
        houseList.map(item => {
          return <RoomItem itemData={item} key={item.id} itemWidth="20%"/>
        })
      }
    </HouseWrapper>
  )
})

export default HouseList