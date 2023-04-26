import { memo } from 'react'
import type { ReactNode } from 'react'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'

interface IProps {
	children?: ReactNode
}
const HotRecommend: React.FC<IProps> = () => {
	const { hotRecommend } = useAppSelector(state => ({
		hotRecommend: state.recommend.hotRecommend
	}))
	return (
		<RecommendWrapper>
			<AreaHeaderV1
				title="热门推荐"
				keywords={['华语', '流行', '摇滚', '民谣', '电子']}
				moreLink="/discover/songs"
			/>
			<div className="hot-recommend">
				{hotRecommend.map(item => {
					return <SongMenuItem key={item.id} itemData={item} />
				})}
			</div>
		</RecommendWrapper>
	)
}

export default memo(HotRecommend)