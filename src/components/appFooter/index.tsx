import React, { memo, Fragment } from 'react'
import type { FC, ReactNode } from 'react'
import { FooterLeft, FooterRight, AppFooterWrapper } from './style'
import { footerLinks, footerImages } from '@/assets/data/local_data'

interface IProps {
	children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
	return (
		<AppFooterWrapper>
			<div className="wrap-v2 content">
				<FooterLeft className="left">
					<div className="link">
						{footerLinks.map(item => {
							return (
								<Fragment key={item.title}>
									<a href={item.link} target="_blank" rel="noopener noreferrer">
										{item.title}
									</a>
									<span className="line">|</span>
								</Fragment>
							)
						})}
					</div>
					<div className="copyright">
						<span>网易公司版权所有©1997-2020</span>
						<span>
							杭州乐读科技有限公司运营：
							<a
								href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
								rel="noopener noreferrer"
								target="_blank"
							>
								浙网文[2018]3506-263号
							</a>
						</span>
					</div>
					<div className="report">
						<span>违法和不良信息举报电话：0571-89853516</span>
						<span>
							举报邮箱：
							<a
								href="mailto:ncm5990@163.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								ncm5990@163.com
							</a>
						</span>
					</div>

				</FooterLeft>
				<FooterRight className="right">
					{footerImages.map(item => {
						return (
							<li className="item" key={item.link}>
								<a
									className="link"
									href={item.link}
									rel="noopener noreferrer"
									target="_blank"
								>
									{' '}
								</a>
							</li>
						)
					})}
				</FooterRight>
			</div>
		</AppFooterWrapper>
	)
}

export default memo(AppFooter)
