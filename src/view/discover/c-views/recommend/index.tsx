import { useAppDispatch } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { getBannerDateAction, getHotRecommendAction } from './store'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'

interface IProps {
	children?: ReactNode
}

const Recommend: React.FC<IProps> = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getBannerDateAction())
		dispatch(getHotRecommendAction())
	}, [])

	return (
		<div>
			<TopBanner />
			<RecommendWrapper>
				<div className="content wrap-v2">
					<div className="left">
						<HotRecommend />
					</div>
					<div className="right">r</div>
				</div>
			</RecommendWrapper>
		</div>
	)
}

export default memo(Recommend)
