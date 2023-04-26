import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
	getArtistList,
	getBanner,
	getHotRecommend,
	getNewAlbum,
	getRankingData
} from '../service'

/**
 * 获取首页轮播图数据
 */
export const getBannerDateAction = createAsyncThunk(
	'banner',
	async (arg, { dispatch }) => {
		const res = await getBanner()
		dispatch(changeBannersAction(res.banners))
	}
)

/**
 * 热门推荐数据
 */
export const getHotRecommendAction = createAsyncThunk(
	'HotRecommend',
	async (arg, { dispatch }) => {
		const res = await getHotRecommend(8)
		dispatch(changeHotRecommendAction(res.result))
	}
)

/**
 * 获取新碟上架数据
 */
export const getNewAlbumAction = createAsyncThunk(
	'NewAlbum',
	async (arg, { dispatch }) => {
		const res = await getNewAlbum()
		dispatch(changeNewAlibumAction(res.albums))
	}
)
/**
 * 飙升榜
 * 新歌榜
 * 原创榜
 */
const rankingIds = [19723756, 3779629, 2884035]
export const getRankingDataAction = createAsyncThunk(
	'ranking',
	(_, { dispatch }) => {
		const promises: Promise<any>[] = []
		for (const id of rankingIds) {
			promises.push(getRankingData(id))
		}
		Promise.all(promises).then(res => {
			const playlist = res.map(item => item.playlist)
			dispatch(changeRankingsAction(playlist))
		})
	}
)

export const fetchSettleSinger = createAsyncThunk(
	'settlesinger',
	async (_, { dispatch }) => {
		const res = await getArtistList(5001, 5)
		// dispatch()
		dispatch(changeSettleSingerAction(res.artists))
	}
)

interface IRecommendState {
	banners: any[]
	hotRecommend: any[]
	newAlibum: any[]
	rankings: any[]
	settleSingers: any[]
}

const initialState: IRecommendState = {
	// 首页轮播图
	banners: [],
	// 热门推荐
	hotRecommend: [],
	// 新碟上架
	newAlibum: [],
	rankings: [],
	settleSingers: []
}
const recommendSlice = createSlice({
	name: 'recommend',
	initialState,
	reducers: {
		changeBannersAction(state, { payload }) {
			state.banners = payload
		},
		changeHotRecommendAction(state, { payload }) {
			state.hotRecommend = payload
		},
		changeNewAlibumAction(state, { payload }) {
			state.newAlibum = payload
		},
		changeRankingsAction(state, { payload }) {
			state.rankings = payload
		},
		changeSettleSingerAction(state, { payload }) {
			state.settleSingers = payload
		}
	}
})
export const {
	changeBannersAction,
	changeHotRecommendAction,
	changeNewAlibumAction,
	changeRankingsAction,
	changeSettleSingerAction
} = recommendSlice.actions
export default recommendSlice.reducer
