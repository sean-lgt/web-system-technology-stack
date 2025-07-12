import { createSlice } from '@reduxjs/toolkit'

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detailInfos: {},
    headerConfig: {
      topSearch: true,
      topFixed: true,
    },
  },
  reducers: {
    changeDetailInfosAction(state, { payload }) {
      state.detailInfos = payload
    },
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    },
  },
})

export const { changeDetailInfosAction, changeHeaderConfigAction } =
  detailSlice.actions

export default detailSlice.reducer
