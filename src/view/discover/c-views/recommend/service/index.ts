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
