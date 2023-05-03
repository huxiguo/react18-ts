import myRequest from '@/service'

export function getSongList(keyWord: any) {
	return myRequest.get({
		url: '/search',
		params: {
			keywords: keyWord,
			limit: 15
		}
	})
}
