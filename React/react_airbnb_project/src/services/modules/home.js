import commonRequest from '../request'

export function getHomeGoodPriceData() {
  return commonRequest.get({
    url: '/home/goodprice',
  })
}

export function getHomeHighScoreData() {
  return commonRequest.get({
    url: '/home/highscore',
  })
}

export function getHomeDiscountData() {
  return commonRequest.get({
    url: '/home/discount',
  })
}

export function getHomeHotRecommendData() {
  return commonRequest.get({
    url: '/home/hotrecommenddest',
  })
}

export function getHomeLongforData() {
  return commonRequest.get({
    url: '/home/longfor',
  })
}

export function getHomePlusData() {
  return commonRequest.get({
    url: '/home/plus',
  })
}
