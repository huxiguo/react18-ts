import { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
	children?: ReactNode
}
const Mine: React.FC<IProps> = () => {
	return <div></div>
}

export default memo(Mine)
