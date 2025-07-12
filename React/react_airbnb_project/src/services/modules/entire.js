import commonRequest from '../request'

export function getEntireList(offset = 0, size = 20) {
  return commonRequest.get({
    url: '/entire/list',
    params: {
      offset,
      size,
    },
  })
}
