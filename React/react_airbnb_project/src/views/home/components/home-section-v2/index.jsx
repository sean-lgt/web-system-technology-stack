import React, { memo, useState, useCallback } from "react";
import PropTypes from 'prop-types'

import SectionHeader from "@/components/section-header/index";
import SectionRooms from "@/components/section-rooms/index";
import SectionFooter from "@/components/section-footer/index";
import SectionTabs from "@/components/section-tabs/index";

import { SectionV2Wrapper } from "./style";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  let tabNames = infoData.dest_address?.map(item => item.name)
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])
  
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33333%"/>
      <SectionFooter name={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2;