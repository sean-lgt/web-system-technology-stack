const { ADD_NUMBER, CHANGE_NAME } = require('./constants')

const addNumberAction = (num) => ({
  type: ADD_NUMBER,
  num,
})

const changeNameAction = (name) => ({
  type: CHANGE_NAME,
  name,
})

module.exports = {
  addNumberAction,
  changeNameAction,
}
