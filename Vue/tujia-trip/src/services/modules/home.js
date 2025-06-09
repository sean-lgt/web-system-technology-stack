import commonRequest from '../request'

export function getHomeHotSuggests() {
  return commonRequest.get({
    url: '/home/hotSuggests'
  })
}

export function getHomeCategories() {
  return commonRequest.get({
    url: '/home/categories'
  })
}

export function getHomeHouseList(currentPage) {
  return commonRequest.get({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  })
}
