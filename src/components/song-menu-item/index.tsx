import { memo } from 'react'
import type { ReactNode } from 'react'
import { MenuItemWrapper } from './style'
import { formatCount, formatImageUrl } from '@/utils/format'

interface IProps {
	children?: ReactNode
	itemData: any
}
const SongMenuItem: React.FC<IProps> = props => {
	const { itemData } = props
	return (
		<MenuItemWrapper>
			<div className="top ">
				<img src={formatImageUrl(itemData.picUrl, 140)} alt="" />
				<div className="cover sprite_covor">
					<div className="info sprite_covor">
						<span>
							<i className="sprite_icon headset"></i>
							<span className="count">{formatCount(itemData.playCount)}</span>
						</span>
						<i className="play sprite_icon"></i>
					</div>
				</div>
			</div>
			<div className="bottom">{itemData.name}</div>
		</MenuItemWrapper>
	)
}

export default memo(SongMenuItem)
