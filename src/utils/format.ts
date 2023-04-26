/**
 * 格式化播放量返回单位为万的数据
 * @param count 播放量
 * @returns **万
 */
export function formatCount(count: number) {
	if (count > 100000) {
		return Math.floor(count / 10000) + '万'
	} else return count
}

/**
 * 格式化请求图片的大小
 * @param url 图片原来的url
 * @param width 图片宽度
 * @param height 图片高度，默认等于宽度
 * @returns 格式化后的url
 */
export function formatImageUrl(
	url: string,
	width: number,
	height: number = width
) {
	return url + `?param=${width}x${height}`
}
