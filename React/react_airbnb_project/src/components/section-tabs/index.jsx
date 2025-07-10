import React, { memo, useState } from "react";
import PropTypes from 'prop-types'
import classNames from "classnames"

import ScrollView from "@/base-ui/scroll-view/index";

import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle (index, item) {
    setCurrentIndex(index)
    if (tabClick) {
      tabClick(index, item)
    }
  }

  return (
    <TabsWrapper>
      <ScrollView>
      {
          tabNames.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames("item", { active: index === currentIndex })}
                onClick={e => itemClickHandle(index, item)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs