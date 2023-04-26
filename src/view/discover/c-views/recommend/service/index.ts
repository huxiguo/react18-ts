import myRequest from '@/service'

/**
 * 获取首页轮播图数据
 * @returns
 */
export function getBanner() {
	return myRequest.get({
		url: '/banner'
	})
}

/**
 * 获取热门推荐数据
 * @returns
 */
export function getHotRecommend(limit = 30) {
	return myRequest.get({
		url: '/personalized',
		params: {
			limit
		}
	})
}
