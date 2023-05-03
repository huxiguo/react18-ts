import { memo, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Divider } from 'antd'
import { SearchWrapper } from './style'
import SongItem from './c-cpns/song-item'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store'
import { getSearchSongListAction } from './store'

interface IProps {
	children?: ReactNode
}
const Search: React.FC<IProps> = () => {
	const dispatch = useAppDispatch()
	const [searchParams] = useSearchParams()
	const [kewWord, setKewWord] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)
	useEffect(() => {
		const searchValue = searchParams.get('keyWord')
		console.log('first', searchValue)
		setKewWord(searchValue!)
		// 请求数据
		dispatch(getSearchSongListAction(searchValue))
	}, [])
	const { songList } = useAppSelector(state => ({
		songList: state.songs.songList
	}))
	// 点击搜索
	const handleSearchClick = (e: any) => {
		e.preventDefault()
		// 请求数据
		dispatch(getSearchSongListAction(inputRef.current?.value))
	}
	const handleInputChange = () => {
		setKewWord(inputRef.current!.value)
	}
	return (
		<>
			<SearchWrapper>
				<div className="wrap-v2 n-srch">
					<div className="pgsrch">
						<input
							ref={inputRef}
							className="srch"
							value={kewWord}
							onChange={handleInputChange}
						/>
						<a
							href=""
							title="搜索"
							className="btn"
							onClick={e => {
								handleSearchClick(e)
							}}
						></a>
					</div>
					<Divider>单曲</Divider>
					<div className="m-search">
						{songList.map((item, index) => {
							return (
								<React.Fragment key={index}>
									<SongItem itemData={item} />
									<Divider />
								</React.Fragment>
							)
						})}
					</div>
				</div>
			</SearchWrapper>
		</>
	)
}

export default memo(Search)
