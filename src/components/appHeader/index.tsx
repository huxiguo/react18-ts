import { memo } from 'react'
import type { ReactNode } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

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
	const navigate = useNavigate()
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

	/**
	 * input按下enter回调
	 * @param e e
	 */
	const handleInputEnter = (e: any) => {
		const value = e.target.value
		navigate(`/search?keyWord=${value}`)
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
				</HeaderLeft>
				<HeaderRight>
					<Input
						className="search"
						placeholder="音乐/视频/电台/用户"
						prefix={<SearchOutlined />}
						onPressEnter={handleInputEnter}
					/>
					<div className="center">创作者中心</div>
					<div className="login">登录</div>
				</HeaderRight>
			</div>
			<div className="divider"></div>
		</HeaderWrapper>
	)
}
export default memo(AppHeaders)
