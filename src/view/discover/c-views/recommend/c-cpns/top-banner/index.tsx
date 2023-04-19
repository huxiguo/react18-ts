import { useAppSelector } from '@/store'
import { memo, useRef, useState } from 'react'
import type { ReactNode, ElementRef } from 'react'
import classNames from 'classnames'

import { Carousel } from 'antd'

import { BannerControl, BannerLeft, BannerRight, BannerWapper } from './style'

interface IProps {
	children?: ReactNode
}
const TopBanner: React.FC<IProps> = () => {
	/**
	 * 轮播图index
	 */
	const [currentIndex, setCurrentIndex] = useState(0)

	/**
	 * 轮播图Ref
	 */
	const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

	/**
	 * 获取banner数据
	 */
	const { banners } = useAppSelector(state => ({
		banners: state.recommend.banners
	}))

	/**
	 * 轮播图上一个
	 */
	const handlePrevClick = () => {
		bannerRef.current?.prev()
	}

	/**
	 * 轮播图下一个
	 */
	const handleNextClick = () => {
		bannerRef.current?.next()
	}

	/**
	 * 轮播后的回调
	 * @param current 当前轮播图index
	 */
	const handleAfterChange = (current: number) => {
		setCurrentIndex(current)
	}

	/**
	 * 设置背景
	 */
	let bgImageUrl = banners[currentIndex]?.imageUrl
	if (bgImageUrl) {
		bgImageUrl = bgImageUrl + '?imageView&blur=40x20'
	}
	return (
		<BannerWapper
			style={{
				background: `url('${bgImageUrl}')center center / 6000px`
			}}
		>
			<div className="banner wrap-v2">
				<BannerLeft>
					<Carousel
						dots={false}
						effect="fade"
						autoplay
						ref={bannerRef}
						afterChange={handleAfterChange}
					>
						{banners.map(item => {
							return (
								<div className="banner-item" key={item.imageUrl}>
									<img
										className="image"
										src={item.imageUrl}
										alt={item.typeTitle}
									/>
								</div>
							)
						})}
					</Carousel>
					<ul className="dots">
						{banners.map((item, index) => {
							return (
								<li key={item.imageUrl}>
									<span
										className={classNames('item', {
											active: index === currentIndex
										})}
									></span>
								</li>
							)
						})}
					</ul>
				</BannerLeft>
				<BannerRight></BannerRight>
				<BannerControl>
					<button className="btn left" onClick={handlePrevClick}></button>
					<button className="btn right" onClick={handleNextClick}></button>
				</BannerControl>
			</div>
		</BannerWapper>
	)
}

export default memo(TopBanner)
