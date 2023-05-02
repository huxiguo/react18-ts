import { memo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Divider } from 'antd'
import { SearchWrapper } from './style'
import SongItem from './c-cpns/song-item'

interface IProps {
	children?: ReactNode
}
const Search: React.FC<IProps> = () => {
	const [kewWord, setKewWord] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)
	const handleSearchClick = (e: any) => {
		e.preventDefault()
		// 请求数据
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
						{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
							(item, index) => {
								return (
									<>
										<SongItem key={index} />
										<Divider />
									</>
								)
							}
						)}
					</div>
				</div>
			</SearchWrapper>
		</>
	)
}

export default memo(Search)
