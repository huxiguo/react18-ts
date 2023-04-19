import { useAppDispatch } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { getBannerDateAction } from './store'
import TopBanner from './c-cpns/top-banner'

interface IProps {
	children?: ReactNode
}

const Recommend: React.FC<IProps> = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getBannerDateAction())
	}, [])

	return (
		<div>
			<TopBanner />
		</div>
	)
}

export default memo(Recommend)
