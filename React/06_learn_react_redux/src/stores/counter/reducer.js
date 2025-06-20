import * as actionTypes from './constants'

const initialState = {
  counter: 200,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      return { ...state, counter: state.counter + action.number }
    case actionTypes.SUB_NUMBER:
      return { ...state, counter: state.counter - action.number }
    default:
      return state
  }
}

export default reducer
