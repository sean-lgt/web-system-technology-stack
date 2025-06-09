import commonRequest from '../request'

export const getDetailInfo = (id) => {
  return commonRequest.get({
    url: '/detail/infos',
    params: {
      id
    }
  })
}
