import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
	children?: ReactNode
}
const Ranking: React.FC<IProps> = () => {
	return <>123</>
}

export default memo(Ranking)
