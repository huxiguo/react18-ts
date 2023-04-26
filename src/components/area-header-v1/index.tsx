import { memo } from 'react'
import type { ReactNode } from 'react'
import { AreaHeaderWrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
	children?: ReactNode
	title?: string
	keywords?: string[]
	moreText?: string
	moreLink?: string
}
const AreaHeader: React.FC<IProps> = (props: IProps) => {
	const {
		title = '默认title',
		keywords = [],
		moreText = '更多',
		moreLink = '/'
	} = props
	return (
		<AreaHeaderWrapper className="sprite_02">
			<div className="left">
				<h3 className="title">{title}</h3>
				<div className="keyword">
					{keywords.map((item, index) => {
						return (
							<div className="item" key={index}>
								<span className="link">{item}</span>
								<span className="divider">|</span>
							</div>
						)
					})}
				</div>
			</div>
			<div className="right">
				<Link className="more" to={moreLink}>
					{moreText}
				</Link>
				<i className="sprite_02 icon"></i>
			</div>
		</AreaHeaderWrapper>
	)
}

export default memo(AreaHeader)
