import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
	children?: ReactNode
}
const AppFooter: React.FC<IProps> = () => {
	return <div>AppFooter</div>
}

export default memo(AppFooter)
