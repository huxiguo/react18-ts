import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner } from '../service'

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

interface IRecommendState {
	banners: any[]
}

const initialState: IRecommendState = {
	banners: []
}
const recommendSlice = createSlice({
	name: 'recommend',
	initialState,
	reducers: {
		changeBannersAction(state, { payload }) {
			state.banners = payload
		}
	}
})
export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
