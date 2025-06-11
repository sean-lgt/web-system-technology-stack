import commonRequest from '../request'

export const getDetailInfo = (houseId) => {
  return commonRequest.get({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}
