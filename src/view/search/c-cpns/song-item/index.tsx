import { memo } from 'react'
import type { ReactNode } from 'react'
import { SongItemWarpper } from './style'
import { useAppDispatch } from '@/store'
import { getCurrentSongAction } from '@/view/player/store'

interface IProps {
	children?: ReactNode
	itemData: any
}
const SongItem: React.FC<IProps> = props => {
	const { itemData } = props
	const dispatch = useAppDispatch()
	const handlePlayBtnClick = (id: number) => {
		console.log('first', id)
		dispatch(getCurrentSongAction(id))
	}
	return (
		<>
			<SongItemWarpper>
				<div className="td">
					<div className="hd">
						<span
							className="ply"
							onClick={() => {
								handlePlayBtnClick(itemData.id)
							}}
						></span>
					</div>
				</div>
				<div className="td w0">
					<div className="sn">
						<div className="text">
							<span className="name">{itemData?.name}</span>
							<span className="mv"></span>
						</div>
					</div>
				</div>
				<div className="td">
					<div className="opt">
						<span className="u-icn-81"></span>
						<span className="icn icn-fav"></span>
						<span className="icn icn-share"></span>
						<span className="icn icn-dl"></span>
					</div>
				</div>
				<div className="td w1">
					<div className="text">
						<span>{itemData?.artists[0]?.name}</span>
					</div>
				</div>
				<div className="td w2">
					<div className="text">
						<span>《{itemData?.album?.name}》</span>
					</div>
				</div>
				<div className="td">99:99</div>
			</SongItemWarpper>
		</>
	)
}

export default memo(SongItem)
