import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './modules/home'
import detailReducer from './modules/detail'
import mainReducer from './modules/main'
import entireReducer from './modules/entire'

const store = configureStore({
  reducer: {
    home: homeReducer,
    detail: detailReducer,
    main: mainReducer,
    entire: entireReducer,
  },
})

export default store
