import styled from 'styled-components'
export const SearchWrapper = styled.div`
	width: 980px;
	min-height: 700px;
	height: 700px;
	margin: 0 auto;
	background-color: #fff;
	border: 1px solid #d3d3d3;
	border-width: 0 1px;
	.n-srch {
		padding: 40px;
		.pgsrch {
			background: url(${require('@/assets/img/sprite.png')}) no-repeat 0 9999px;
			width: 420px;
			height: 40px;
			margin: 0 auto;
			background-position: 0 0;
			z-index: 10;
			position: relative;
			zoom: 1;
			input {
				font-size: 12px;
				color: #333;
				font-family: Arial, Helvetica, sans-serif;
				-webkit-text-size-adjust: none;
			}
			input:focus {
				outline: none;
			}
			.srch {
				float: left;
				width: 320px;
				height: 17px;
				margin: 12px 0 0 20px;
				padding: 0;
				background: #fff;
				border: none;
			}
			.btn {
				float: right;
				width: 50px;
				height: 40px;
				text-indent: -9999px;
				background: url(${require('@/assets/img/sprite.png')}) no-repeat 0
					9999px;
				&:hover {
					background-position: -430px 0;
					text-decoration: none;
				}
			}
		}
		.m-search {
			margin-top: 20px;
			.ant-divider-horizontal {
				margin: 0;
			}
		}
	}
`
