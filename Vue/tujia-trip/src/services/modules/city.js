import commonRequest from '../request'

export const getCityAll = () => {
  return commonRequest.get({
    url: '/city/all'
  })
}
