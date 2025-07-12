import React, { memo,useEffect } from 'react'
import { useDispatch } from 'react-redux'

import FilterSection from './components/filter-section'
import HouseList from './components/house-list'
import EntirePagination from './components/entire-pagination'

import { EntireWrapper } from './style'

import { fetchEntireDataAction } from '@/store/modules/entire'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(fetchEntireDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: false }))
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchEntireDataAction(0))
  }, [dispatch])

  return (
    <EntireWrapper>
      <FilterSection></FilterSection>
      <HouseList></HouseList>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
})

export default Entire

