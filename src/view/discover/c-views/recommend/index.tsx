import { useAppDispatch } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import {
	fetchSettleSinger,
	getBannerDateAction,
	getHotRecommendAction,
	getNewAlbumAction,
	getRankingDataAction
} from './store'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopList from './c-cpns/top-list'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'

interface IProps {
	children?: ReactNode
}

const Recommend: React.FC<IProps> = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getBannerDateAction())
		dispatch(getHotRecommendAction())
		dispatch(getNewAlbumAction())
		dispatch(getRankingDataAction())
		dispatch(fetchSettleSinger())
	}, [])

	return (
		<div>
			<TopBanner />
			<RecommendWrapper>
				<div className="content wrap-v2">
					<div className="left">
						<HotRecommend />
						<NewAlbum />
						<TopList />
					</div>
					<div className="right">
						<UserLogin />
						<SettleSinger />
						<HotAnchor />
					</div>
				</div>
			</RecommendWrapper>
		</div>
	)
}

export default memo(Recommend)
