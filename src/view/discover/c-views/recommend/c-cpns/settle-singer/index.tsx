import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector } from '@/store'
import { SettleWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { formatImageUrl } from '@/utils/format'
import { Link } from 'react-router-dom'

interface IProps {
	children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
	const { settleSingers } = useAppSelector(state => ({
		settleSingers: state.recommend.settleSingers
	}))

	return (
		<SettleWrapper>
			<AreaHeaderV2 title="入驻歌手" morePath="/discover/artist" />
			<div className="singer-list">
				{settleSingers.map(item => {
					return (
						<Link to="/discover/artist" key={item.id} className="item">
							<img src={formatImageUrl(item.img1v1Url, 62)} alt="" />
							<div className="info">
								<div className="singer">{item.name}</div>
								<div className="desc">{item.alias.join('') || item.name}</div>
							</div>
						</Link>
					)
				})}
			</div>
			<div className="apply-for">
				<a href="javascript:;">申请成为网易音乐人</a>
			</div>
		</SettleWrapper>
	)
}

export default memo(SettleSinger)
