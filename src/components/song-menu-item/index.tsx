import { memo } from 'react'
import type { ReactNode } from 'react'
import { MenuItemWrapper } from './style'

interface IProps {
	children?: ReactNode
	itemData: any
}
const SongMenuItem: React.FC<IProps> = props => {
	const { itemData } = props
	return (
		<MenuItemWrapper>
			<div className="top ">
				<img src={itemData.picUrl} alt="" />
				<div className="cover sprite_cover">
					<div className="info sprite_cover">
						<span>
							<i className="sprite_icon headset"></i>
							<span className="count">{itemData.platCount}</span>
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
