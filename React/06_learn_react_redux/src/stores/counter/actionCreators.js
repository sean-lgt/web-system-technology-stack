import * as actionTypes from './constants'

export const addNumberAction = (number) => ({
  type: actionTypes.ADD_NUMBER,
  number,
})

export const subNumberAction = (number) => ({
  type: actionTypes.SUB_NUMBER,
  number,
})
