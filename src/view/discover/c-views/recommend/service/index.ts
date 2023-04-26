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

/**
 * 请求新碟上架数据
 * @returns 首页新碟数据
 */
export function getNewAlbum() {
	return myRequest.get({
		url: 'album/newest'
	})
}
export function getRankingData(songId: number) {
	return myRequest.get({
		url: '/playlist/detail',
		params: {
			id: songId
		}
	})
}

export function getArtistList(cat: number, limit: number) {
	return myRequest.get({
		url: '/artist/list',
		params: {
			cat,
			limit
		}
	})
}
