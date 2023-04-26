import { memo } from 'react'
import type { ReactNode } from 'react'
import { TopListItemWarpper } from './style'
import { formatImageUrl } from '@/utils/format'

interface IProps {
	children?: ReactNode
	itemData: any
}
const TopListItem: React.FC<IProps> = props => {
	const { itemData } = props
	const { tracks = [] } = itemData
	const handlePlayClick = (id: number) => {
		console.log('first', id)
	}
	return (
		<TopListItemWarpper>
			<div className="header">
				<div className="image">
					<img src={formatImageUrl(itemData.coverImgUrl, 80)} alt="" />
					<a href="" className="image_cover"></a>
				</div>
				<div className="info">
					<a href="">{itemData.name}</a>
					<div>
						<button className="btn play sprite_02"></button>
						<button className="btn favor sprite_02"></button>
					</div>
				</div>
			</div>
			<div className="list">
				{tracks.slice(0, 10).map((item: any, index: number) => {
					return (
						<div className="list-item" key={item.id}>
							<div className="rank">{index + 1}</div>
							<div className="info">
								<span className="name text-nowrap">{item.name}</span>
								<div className="operate">
									<button
										className="btn sprite_02 play"
										onClick={() => handlePlayClick(item.id)}
									></button>
									<button className="btn sprite_icon2 addto"></button>
									<button className="btn sprite_02 favor"></button>
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<div className="footer">
				<a href="/discover/ranking">查看全部 &gt;</a>
			</div>
		</TopListItemWarpper>
	)
}

export default memo(TopListItem)
