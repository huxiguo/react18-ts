import { memo } from 'react'
import type { ReactNode } from 'react'
import { TopListWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import TopListItem from '../top-list-item'
interface IProps {
	children?: ReactNode
}
const TopList: React.FC<IProps> = () => {
	const { rankings } = useAppSelector(state => ({
		rankings: state.recommend.rankings
	}))

	return (
		<TopListWrapper>
			<AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
			<div className="content">
				{rankings.map(item => {
					return <TopListItem itemData={item} key={item.id} />
				})}
			</div>
		</TopListWrapper>
	)
}

export default memo(TopList)
