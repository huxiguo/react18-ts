import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import 'antd/dist/reset.css'

import route from '@/router'
import AppHeader from './components/appHeader'
import AppFooter from './components/appFooter'
function App() {
	return (
		<div className="App">
			<AppHeader />
			<Suspense fallback="">
				<div className="main">{useRoutes(route)}</div>
			</Suspense>
			<AppFooter />
		</div>
	)
}

export default App
