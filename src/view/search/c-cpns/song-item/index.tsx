import { memo } from 'react'
import type { ReactNode } from 'react'
import { SongItemWarpper } from './style'

interface IProps {
	children?: ReactNode
}
const SongItem: React.FC<IProps> = () => {
	return (
		<>
			<SongItemWarpper>
				<div className="td">
					<div className="hd">
						<a href="" className="ply"></a>
					</div>
				</div>
				<div className="td w0">
					<div className="sn">
						<div className="text">
							<span className="name">1321312</span>
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
						<span>456</span>
					</div>
				</div>
				<div className="td w2">
					<div className="text">
						<span>《132》</span>
					</div>
				</div>
				<div className="td">45.12</div>
			</SongItemWarpper>
		</>
	)
}

export default memo(SongItem)
