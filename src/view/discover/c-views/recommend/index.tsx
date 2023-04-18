import { memo } from 'react'
import type { ReactNode } from 'react'

import { useAppDispatch, useAppSelector } from '@/store'
import { changeCount } from '@/store/modules/counter'

interface IProps {
	children?: ReactNode
}
const Recommend: React.FC<IProps> = () => {
	const { count, msg } = useAppSelector(state => ({
		count: state.counter.count,
		msg: state.counter.msg
	}))
	const dispatch = useAppDispatch()
	const handleClick = () => {
		console.log(123)
		dispatch(changeCount(100))
	}

	return (
		<div>
			Recommend
			<h2>count: {count} </h2>
			<h2>msg: {msg} </h2>
			<button onClick={handleClick}>count +100</button>
		</div>
	)
}

export default memo(Recommend)
