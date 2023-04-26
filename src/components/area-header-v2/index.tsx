import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV2Wrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
	children?: ReactNode
	title: string
	more?: string
	morePath?: string
}

const AreaHeaderV2: FC<IProps> = props => {
	const { title, more = '查看全部', morePath = '/' } = props

	return (
		<HeaderV2Wrapper>
			<h3 className="title">{title}</h3>
			<Link to={morePath}>{more} &gt;</Link>
		</HeaderV2Wrapper>
	)
}

export default memo(AreaHeaderV2)
