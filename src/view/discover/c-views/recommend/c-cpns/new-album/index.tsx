import { memo, useRef } from 'react'
import type { ReactNode, ElementRef } from 'react'

import { Carousel } from 'antd'

import { AlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
	children?: ReactNode
}
const NewAlbum: React.FC<IProps> = () => {
	/**
	 * 轮播图ref
	 */
	const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

	/**
	 * 获取store里面的newAlbum数据
	 */
	const { newAlbum } = useAppSelector(state => ({
		newAlbum: state.recommend.newAlibum
	}))

	/**
	 * 轮播图上一个按钮点击
	 */
	const handlePrevClick = () => {
		bannerRef.current?.prev()
	}
	/**
	 * 轮播图下一个按钮点击
	 */
	const handleNextClick = () => {
		bannerRef.current?.next()
	}
	return (
		<AlbumWrapper>
			<AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
			<div className="content">
				<button
					className="sprite_02 arrow arrow-left"
					onClick={handlePrevClick}
				></button>
				<div className="banner">
					<Carousel ref={bannerRef} speed={1500} dots={false}>
						{[0, 1].map(item => {
							return (
								<div key={item}>
									<div className="album-list">
										{newAlbum.slice(item * 5, (item + 1) * 5).map(album => {
											return <NewAlbumItem key={album.id} itemData={album} />
										})}
									</div>
								</div>
							)
						})}
					</Carousel>
				</div>
				<button
					className="sprite_02 arrow arrow-right"
					onClick={handleNextClick}
				></button>
			</div>
		</AlbumWrapper>
	)
}

export default memo(NewAlbum)
