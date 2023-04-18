import { Suspense, memo } from 'react'
import type { ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
	children?: ReactNode
}
const Discover: React.FC<IProps> = () => {
	return (
		<div>
			<div className="nav">
				<Link to="/discover/recommemd">推荐</Link>
				<Link to="/discover/ranking">排行榜</Link>
				<Link to="/discover/songs">歌单</Link>
				<Link to="/discover/djradio">主播电台</Link>
				<Link to="/discover/artist">歌手</Link>
				<Link to="/discover/album">新碟上架</Link>
			</div>
			<Suspense fallback="">
				<Outlet />
			</Suspense>
		</div>
	)
}

export default memo(Discover)
