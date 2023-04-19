import { memo } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { NavBarWapper } from './style'
import { discoverMenu } from '@/assets/data/local_data'

interface IProps {
	children?: ReactNode
}
const NavBar: React.FC<IProps> = () => {
	return (
		<NavBarWapper>
			<div className="nav wrap-v1">
				{discoverMenu.map(item => {
					return (
						<div className="item" key={item.title}>
							<NavLink to={item.link}>
								<em>{item.title}</em>
							</NavLink>
						</div>
					)
				})}
			</div>
		</NavBarWapper>
	)
}

export default memo(NavBar)
