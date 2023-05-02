import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/view/discover'))
const Download = lazy(() => import('@/view/download'))
const Focus = lazy(() => import('@/view/focus'))
const Mine = lazy(() => import('@/view/mine'))
const Search = lazy(() => import('@/view/search'))

const Album = lazy(() => import('@/view/discover/c-views/album'))
const Artist = lazy(() => import('@/view/discover/c-views/artist'))
const Djradio = lazy(() => import('@/view/discover/c-views/djradio'))
const Ranking = lazy(() => import('@/view/discover/c-views/ranking'))
const Recommemd = lazy(() => import('@/view/discover/c-views/recommend'))
const Songs = lazy(() => import('@/view/discover/c-views/songs'))

const route: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to={'/discover'} />
	},
	{
		path: '/discover',
		element: <Discover />,
		children: [
			{
				path: '/discover',
				element: <Navigate to="/discover/recommend" />
			},
			{
				path: '/discover/album',
				element: <Album />
			},
			{
				path: '/discover/artist',
				element: <Artist />
			},
			{
				path: '/discover/djradio',
				element: <Djradio />
			},
			{
				path: '/discover/ranking',
				element: <Ranking />
			},
			{
				path: '/discover/recommend',
				element: <Recommemd />
			},
			{
				path: '/discover/songs',
				element: <Songs />
			}
		]
	},
	{
		path: '/mine',
		element: <Mine />
	},
	{
		path: '/focus',
		element: <Focus />
	},
	{
		path: '/download',
		element: <Download />
	},
	{
		path: '/search',
		element: <Search />
	}
]
export default route
