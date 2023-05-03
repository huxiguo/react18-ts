import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongList } from '../service'

export const getSearchSongListAction = createAsyncThunk(
	'songs',
	async (keyWord: any, { dispatch }) => {
		const res = await getSongList(keyWord)
		dispatch(changeSongListAction(res.result.songs))
	}
)
export interface ISongListState {
	songList: any[]
}
const initialState: ISongListState = {
	songList: []
}

const songListSlice = createSlice({
	name: 'songList',
	initialState,
	reducers: {
		changeSongListAction(state, { payload }) {
			state.songList = payload
		}
	}
})
export const { changeSongListAction } = songListSlice.actions
export default songListSlice.reducer
