import { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import route from '@/router'
function App() {
	return (
		<div className="App">
			<div className="nav">
				<Link to={'/discover'}>发现音乐</Link>
				<Link to={'/mine'}>我的音乐</Link>
				<Link to={'focus'}>关注</Link>
				<Link to={'download'}>下载</Link>
			</div>
			<Suspense fallback="">
				<div className="main">{useRoutes(route)}</div>
			</Suspense>
		</div>
	)
}

export default App
