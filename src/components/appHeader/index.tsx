import { memo } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'

import headerTitles from '@/assets/data/header_titles.json'

interface IProps {
	children?: ReactNode
}
interface itemType {
	title: string
	type: string
	link: string
}
const AppHeaders: React.FC<IProps> = () => {
	/**
	 * 不同的导航栏项
	 * @param item 遍历的item项
	 * @returns
	 */
	const showItem = (item: itemType) => {
		if (item.type === 'path') {
			return (
				<NavLink to={item.link}>
					{item.title}
					<i className="icon sprite_01"></i>
				</NavLink>
			)
		} else {
			return (
				<a href={item.link} rel="noreferrer" target="_blank">
					{item.title}
				</a>
			)
		}
	}

	return (
		<HeaderWrapper>
			<div className="content wrap-v1">
				<HeaderLeft>
					<a className="logo sprite_01" href="/">
						只因盒
					</a>
					<div className="title_list">
						{headerTitles.map(item => {
							return (
								<div className="item" key={item.link}>
									{showItem(item)}
								</div>
							)
						})}
					</div>
					<Link to={'/discover'}>发现音乐</Link>
					<Link to={'/mine'}>我的音乐</Link>
					<Link to={'focus'}>关注</Link>
					<Link to={'download'}>下载</Link>
				</HeaderLeft>
				<HeaderRight>
					<span>sousuo </span>
				</HeaderRight>
			</div>
			<div className="divider"></div>
		</HeaderWrapper>
	)
}

export default memo(AppHeaders)
