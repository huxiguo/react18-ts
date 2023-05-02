import { memo, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { BarControl, BarOperator, BarPlayInfo, PlayerBarWarpper } from './style'
import { Slider, message } from 'antd'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store'
import { formatImageUrl } from '@/utils/format'
import { formatTime, getPlayerUrl } from '@/utils/handle-player'
import {
	changeLyricIndexAction,
	changeMusicAction,
	changePlayModeAction
} from '../store'
import { shallowEqual } from 'react-redux'

interface IProps {
	children?: ReactNode
}
const AppPlayerBar: React.FC<IProps> = () => {
	const [messageApi, contextHolder] = message.useMessage()
	const { currentSong, lyrics, lyricIndex, playMode } = useAppSelector(
		state => ({
			currentSong: state.player.currentSong,
			lyrics: state.player.lyrics,
			lyricIndex: state.player.lyricIndex,
			playMode: state.player.playMode
		}),
		shallowEqual
	)
	const dispatch = useAppDispatch()
	// 进度
	const [progress, setProgress] = useState(0)
	// audio ref
	const audioRef = useRef<HTMLAudioElement>(null)
	// 播放
	const [isPlaying, setIsPlaying] = useState(false)
	// 总时间
	const [duration, setDuration] = useState(0)
	// 当前时间
	const [currentTime, setCurrentTime] = useState(0)
	// 拖动进度条
	const [isSliding, setIsSliding] = useState(false)
	// 自动播放
	async function playCurrentSong() {
		const url = await getPlayerUrl(currentSong.id)
		audioRef.current!.src = url
		audioRef
			.current!.play()
			.then(() => {
				console.log('播放成功')
				setIsPlaying(true)
			})
			.catch(err => {
				console.log('播放失败:', err)
				setIsPlaying(false)
			})
	}
	/** 监听currentSong的变化 */
	useEffect(() => {
		if (!audioRef.current) return
		playCurrentSong()
		setDuration(currentSong.dt)
	}, [currentSong])

	/** 播放功能的交互 */
	const handlePlayBtnClick = () => {
		const isPaused = audioRef.current!.paused
		isPaused
			? audioRef.current?.play().catch(() => setIsPlaying(false))
			: audioRef.current?.pause()
		isPaused ? audioRef.current?.play() : audioRef.current?.pause()

		setIsPlaying(isPaused)
	}
	// 歌曲播放进度回调
	const handleTimeUpdata = () => {
		const _currentTime = audioRef.current!.currentTime * 1000
		if (!isSliding) {
			const progress = (_currentTime / duration) * 100
			setProgress(progress)
			setCurrentTime(_currentTime)
		}
		// 匹配歌词
		let index = lyrics.length - 1
		for (let i = 0; i < lyrics.length; i++) {
			const lyric = lyrics[i]
			if (lyric.time > _currentTime) {
				index = i - 1
				break
			}
		}
		if (lyricIndex === index || index === -1) return
		dispatch(changeLyricIndexAction(index))
		messageApi.open({
			content: lyrics[index].text,
			key: 'lll',
			duration: 0,
			style: {
				marginTop: '80vh'
			}
		})
	}
	// 当前歌曲播放结束
	const handleTimeEnded = () => {
		if (playMode === 2) {
			audioRef.current!.currentTime = 0
			audioRef.current?.play()
		} else {
			handleChangeMusic(true)
		}
	}
	// 点击进度条
	const handleSliderAfterChange = (value: number) => {
		const currentTime = (value / 100) * duration
		audioRef.current!.currentTime = currentTime / 1000
		setCurrentTime(currentTime)
		setProgress(value)
		setIsSliding(false)
	}
	// 拖动进度条
	const handleSliderChanging = (value: number) => {
		setIsSliding(true)
		setProgress(value)
		const _currentTime = (value / 100) * duration
		setCurrentTime(_currentTime)
	}
	// 切换播放模式
	const handlePlayModeClick = () => {
		let newPlayMode = playMode + 1
		if (newPlayMode > 2) newPlayMode = 0
		dispatch(changePlayModeAction(newPlayMode))
	}
	// 切换歌曲
	const handleChangeMusic = (isNext: boolean) => {
		dispatch(changeMusicAction(isNext))
	}

	return (
		<>
			{contextHolder}
			<PlayerBarWarpper className="sprite_playbar">
				<div className="content wrap-v2">
					<BarControl isPlaying={isPlaying}>
						<button
							className="btn sprite_playbar prev"
							onClick={() => {
								handleChangeMusic(false)
							}}
						></button>
						<button
							className="btn sprite_playbar play"
							onClick={handlePlayBtnClick}
						></button>
						<button
							className="btn sprite_playbar next"
							onClick={() => {
								handleChangeMusic(true)
							}}
						></button>
					</BarControl>
					<BarPlayInfo>
						<Link to="/discover/player">
							<img src={formatImageUrl(currentSong?.al?.picUrl, 34)} alt="" />
						</Link>
						<div className="info">
							<div className="song">
								<span className="song-name">{currentSong?.name}</span>
								<span className="singer-name">
									{currentSong?.ar?.[0]?.name}
								</span>
							</div>
							<div className="progress">
								<Slider
									step={0.05}
									value={progress}
									tooltip={{ formatter: null }}
									onAfterChange={handleSliderAfterChange}
									onChange={handleSliderChanging}
								/>
								<div className="time">
									<span className="current">{formatTime(currentTime)}</span>
									<span className="divider">/</span>
									<span className="duration">{formatTime(duration)}</span>
								</div>
							</div>
						</div>
					</BarPlayInfo>
					<BarOperator playMode={playMode}>
						<div className="left">
							<button className="btn pip"></button>
							<button className="btn sprite_playbar favor"></button>
							<button className="btn sprite_playbar share"></button>
						</div>
						<div className="right sprite_playbar">
							<button className="btn sprite_playbar volume"></button>
							<button
								className="btn sprite_playbar loop"
								onClick={handlePlayModeClick}
							></button>
							<button className="btn sprite_playbar playlist"></button>
						</div>
					</BarOperator>
				</div>
				<audio
					ref={audioRef}
					onTimeUpdate={handleTimeUpdata}
					onEnded={handleTimeEnded}
				/>
			</PlayerBarWarpper>
		</>
	)
}

export default memo(AppPlayerBar)
