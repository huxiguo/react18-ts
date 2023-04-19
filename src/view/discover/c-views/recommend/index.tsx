import myRequest from '@/service'
import { memo, useEffect } from 'react'
import type { ReactNode } from 'react'

interface IProps {
	children?: ReactNode
}

const Recommend: React.FC<IProps> = () => {
	useEffect(() => {
		myRequest
			.get({
				url: '/banner'
			})
			.then(res => {
				console.log('res', res)
			})
	}, [])

	return <div>Recommend</div>
}

export default memo(Recommend)
