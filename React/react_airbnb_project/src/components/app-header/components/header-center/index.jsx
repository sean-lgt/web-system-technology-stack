import React, { memo, useState,useRef } from 'react'
import { CSSTransition } from "react-transition-group"

import IconSearchBar from '@/assets/svg/icon-search-bar'
import searchTitles from "@/assets/data/search_titles.json"
import SearchTabs from './components/search-tabs/index'
import SearchSections from './components/search-sections/index'
import { CenterWrapper } from './style'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props
  const [currentTab, setCurrentTab] = useState(0)
  const searchBarRef = useRef(null)
  const searchDetailRef = useRef(null)

  /** 过滤数据 */
  const titles = searchTitles.map(item => item.title)

  
  /** 事件处理 */
  function tabClickHandle(index) {
    setCurrentTab(index)
  }

  return (
    <CenterWrapper>
      <CSSTransition
        nodeRef={searchBarRef}
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div ref={searchBarRef} className='search-bar' onClick={e => searchBarClick()}>
          <div className='text'>搜索房源和体验</div>
          <span className='icon'>
            <IconSearchBar/>
          </span>
        </div>

      </CSSTransition>
      
      <CSSTransition
        nodeRef={searchDetailRef}
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div ref={searchDetailRef} className='search-detail'>
          <SearchTabs titles={titles} tabClick={tabClickHandle}/>
          <div className='infos'>
            <SearchSections searchInfos={searchTitles[currentTab].searchInfos}/>
          </div>
        </div>
      </CSSTransition>
      
   </CenterWrapper>
  )

})

export default HeaderCenter