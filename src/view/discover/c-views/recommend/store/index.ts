import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner, getHotRecommend } from '../service'

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

export const getHotRecommendAction = createAsyncThunk(
	'HotRecommend',
	async (arg, { dispatch }) => {
		const res = await getHotRecommend(8)
		dispatch(changeHotRecommendAction(res.result))
	}
)

interface IRecommendState {
	banners: any[]
	hotRecommend: any[]
}

const initialState: IRecommendState = {
	banners: [],
	hotRecommend: []
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
		}
	}
})
export const { changeBannersAction, changeHotRecommendAction } =
	recommendSlice.actions
export default recommendSlice.reducer
