import { memo } from 'react'
import type { ReactNode } from 'react'
import { PlayerWarpper } from './style'

interface IProps {
	children?: ReactNode
}
const Player: React.FC<IProps> = () => {
	return <PlayerWarpper>Player</PlayerWarpper>
}

export default memo(Player)
