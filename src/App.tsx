import { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import 'antd/dist/reset.css'
import route from '@/router'
import AppHeader from './components/appHeader'
import AppFooter from './components/appFooter'
import AppPlayerBar from './view/player/app-player-bar'
import { useAppDispatch } from './store'
import { getCurrentSongAction } from './view/player/store'
function App() {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getCurrentSongAction(1807901896))
	}, [])
	return (
		<div className="App">
			<AppHeader />
			<Suspense fallback="">
				<div className="main">{useRoutes(route)}</div>
			</Suspense>
			<AppFooter />
			{/* 播放工具栏 */}
			<AppPlayerBar />
		</div>
	)
}

export default App
