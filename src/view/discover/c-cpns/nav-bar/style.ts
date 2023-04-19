import styled from 'styled-components'

export const NavBarWapper = styled.div`
	height: 30px;
	background-color: #c20c0c;

	.nav {
		display: flex;
		padding-left: 180px;
		position: relative;
		top: -4px;
		.item {
			a {
				display: inline-block;
				height: 34px;
				line-height: 20px;
				color: #fff;
				font-size: 12px;
				em {
					display: inline-block;
					height: 20px;
					padding: 0 13px;
					margin: 7px 17px 0;
					border-radius: 20px;
					line-height: 21px;
				}
			}
			.active {
				em {
					background-color: #9b0909;
					border-radius: 20px;
				}
			}
			&:hover {
				text-decoration: none;
				em {
					background-color: #9b0909;
					border-radius: 20px;
				}
			}
		}
	}
`
