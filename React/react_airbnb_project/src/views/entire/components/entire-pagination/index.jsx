import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Pagination from '@mui/material/Pagination';
import { fetchEntireDataAction } from '@/store/modules/entire'

import { PaginationWrapper } from './style'

const EntirePagination = memo(() => {
  const { totalCount, currentPage } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage
  }), shallowEqual)

  const dispatch = useDispatch()

  const count = Math.floor(totalCount / 20)
  const start = currentPage * 20 + 1
  const end = (currentPage + 1) * 20

  const handlePageChange = (event, newPage) => {
    window.scrollTo(0, 0) // 滚动到顶部
    dispatch(fetchEntireDataAction(newPage))
  }

  return (
    <PaginationWrapper>
      <Pagination count={count} color="primary" onChange={handlePageChange} />
      <div className='info'>
        第 {start} – {end} 个房源，共超过 {totalCount} 个
      </div>
    </PaginationWrapper>
  )
})

export default EntirePagination
