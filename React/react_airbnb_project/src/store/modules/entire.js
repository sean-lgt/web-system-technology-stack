import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getEntireList } from '@/services/index'

export const fetchEntireDataAction = createAsyncThunk(
  'fetchdata',
  (payload, { dispatch }) => {
    console.log('🚀【单一一下参数？？？？？？】', payload)
    const offset = payload * 20
    getEntireList(offset).then((res) => {
      dispatch(changeHouseListAction(res.list))
      dispatch(changeTotalCountAction(res.totalCount))
      // dispatch(changeCurrentPageAction(page))
    })
  }
)

const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    houseList: [],
    totalCount: 0,
    currentPage: 0,
  },
  reducers: {
    changeHouseListAction(state, { payload }) {
      state.houseList = payload
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload
    },
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload
    },
  },
})

export const {
  changeHouseListAction,
  changeTotalCountAction,
  changeCurrentPageAction,
} = entireSlice.actions

export default entireSlice.reducer
