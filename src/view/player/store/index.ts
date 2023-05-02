import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSong, getSongLyric } from '../service'
import { ILyric, parseLyric } from '@/utils/parde-lyric'
import { IRootState } from '@/store'

export const getCurrentSongAction = createAsyncThunk<
	void,
	number,
	{ state: IRootState }
>('currentSong', async (id, { dispatch, getState }) => {
	const playSongList = getState().player.playSongList
	const findIndex = playSongList.findIndex(item => item.id === id)
	if (findIndex === -1) {
		// 获取歌曲信息
		const res = await getSong(id)
		const song = res.songs[0]
		const newPlaySongList = [...playSongList]
		newPlaySongList.push(song)
		dispatch(changeCurrentSongAction(song))
		dispatch(changePlaySongListAction(newPlaySongList))
		dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))
	} else {
		const song = playSongList[findIndex]
		dispatch(changeCurrentSongAction(song))
		dispatch(changePlaySongIndexAction(findIndex))
	}

	// 获取歌词信息
	const resLyric = await getSongLyric(id)
	const lyrics = parseLyric(resLyric.lrc.lyric)
	dispatch(changeLyricsAction(lyrics))
})

export const changeMusicAction = createAsyncThunk<
	void,
	boolean,
	{ state: IRootState }
>('changeMusic', async (isNext, { dispatch, getState }) => {
	// 是否是下一首
	// 模式
	const playMode = getState().player.playMode
	// 歌曲索引
	const songIndex = getState().player.playSongIndex
	const songList = getState().player.playSongList
	// 根据模式切换索引
	let newIndex = songIndex
	if (playMode === 1) {
		// 随机播放
		newIndex = Math.floor(Math.random() * songList.length)
	} else {
		newIndex = isNext ? songIndex + 1 : songIndex - 1
		if (newIndex > songList.length - 1) newIndex = 0
		if (newIndex < 0) newIndex = songList.length - 1
	}
	const song = songList[newIndex]
	dispatch(changeCurrentSongAction(song))
	dispatch(changePlaySongIndexAction(newIndex))
	// 获取歌词信息
	const resLyric = await getSongLyric(song.id)
	const lyrics = parseLyric(resLyric.lrc.lyric)
	dispatch(changeLyricsAction(lyrics))
})
export interface IPlayerState {
	currentSong: any
	lyrics: ILyric[]
	lyricIndex: number
	playSongList: any[]
	playSongIndex: number
	playMode: number
}
const initialState: IPlayerState = {
	currentSong: {},
	lyrics: [],
	lyricIndex: -1,
	playSongList: [
		{
			name: '灵魂歌手',
			id: 447280427,
			pst: 0,
			t: 0,
			ar: [
				{
					id: 166010,
					name: '梁博',
					tns: [],
					alias: []
				}
			],
			alia: [],
			pop: 100,
			st: 0,
			rt: null,
			fee: 8,
			v: 16,
			crbt: null,
			cf: '',
			al: {
				id: 35063131,
				name: '灵魂歌手',
				picUrl:
					'https://p1.music.126.net/_VpbTsjkHNAJXGI_9_WKaw==/18776360069173454.jpg',
				tns: [],
				pic_str: '18776360069173454',
				pic: 18776360069173456
			},
			dt: 418645,
			h: {
				br: 320000,
				fid: 0,
				size: 16748713,
				vd: -45910,
				sr: 44100
			},
			m: {
				br: 192000,
				fid: 0,
				size: 10049245,
				vd: -43055,
				sr: 44100
			},
			l: {
				br: 128000,
				fid: 0,
				size: 6699511,
				vd: -40851,
				sr: 44100
			},
			sq: {
				br: 1411000,
				fid: 0,
				size: 40934505,
				vd: -45968,
				sr: 44100
			},
			hr: null,
			a: null,
			cd: '1',
			no: 0,
			rtUrl: null,
			ftype: 0,
			rtUrls: [],
			djId: 0,
			copyright: 0,
			s_id: 0,
			mark: 8192,
			originCoverType: 1,
			originSongSimpleData: null,
			tagPicList: null,
			resourceState: true,
			version: 16,
			songJumpInfo: null,
			entertainmentTags: null,
			awardTags: null,
			single: 0,
			noCopyrightRcmd: null,
			rurl: null,
			mst: 9,
			cp: 1001,
			rtype: 0,
			mv: 0,
			publishTime: 1481904000007
		}
	],
	playSongIndex: -1,
	playMode: 0 // 0顺序播放  1随机播放 2 单曲循环
}

const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		changeCurrentSongAction(state, { payload }) {
			state.currentSong = payload
		},
		changeLyricsAction(state, { payload }) {
			state.lyrics = payload
		},
		changeLyricIndexAction(state, { payload }) {
			state.lyricIndex = payload
		},
		changePlaySongIndexAction(state, { payload }) {
			state.playSongIndex = payload
		},
		changePlaySongListAction(state, { payload }) {
			state.playSongList = payload
		},
		changePlayModeAction(state, { payload }) {
			state.playMode = payload
		}
	}
})
export const {
	changeCurrentSongAction,
	changeLyricsAction,
	changeLyricIndexAction,
	changePlaySongIndexAction,
	changePlaySongListAction,
	changePlayModeAction
} = playerSlice.actions
export default playerSlice.reducer
