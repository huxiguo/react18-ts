import styled from 'styled-components'
export const SongItemWarpper = styled.div`
	padding: 10px 10px 8px 18px;
	border: 1px solid #fff;
	&:hover {
		border: 1px solid #e1e1e1;
		background: #f2f2f2;
		.td .opt {
			visibility: visible;
		}
	}
	&::after {
		clear: both;
		content: '.';
		display: block;
		height: 0;
		visibility: hidden;
	}
	.td {
		float: left;
		margin-right: 5px;
		.hd {
			height: 17px;
			width: 17px;
			.ply {
				background: url(${require('@/assets/img/table.png')}) no-repeat 0 9999px;
				display: inline-block;
				width: 17px;
				height: 17px;
				margin-right: 15px;
				cursor: pointer;
				background-position: 0 -103px;
				&:hover {
					background-position: 0 -128px;
				}
			}
		}
		.sn {
			.text {
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				.name {
					color: #0c73c2;
				}
				.mv {
					background: url(${require('@/assets/img/table.png')}) no-repeat 0
						9999px;
					vertical-align: middle;
					width: 23px;
					height: 17px;
					background-position: 0 -151px;
				}
			}
		}
		.opt {
			visibility: hidden;
			.u-icn-81 {
				margin-right: 8px;
				margin-bottom: 3px;
				background: url(${require('@/assets/img/icon.png')}) no-repeat 0 9999px;
				width: 13px;
				height: 13px;
				background-position: 0 -700px;
				display: inline-block;
				overflow: hidden;
				vertical-align: middle;
				&:hover {
					background-position: -22px -700px;
				}
			}
			.icn {
				display: inline-block;
				vertical-align: middle;
				width: 18px;
				height: 16px;
				cursor: pointer;
				margin: 0 7px 0 0;
				background: url(${require('@/assets/img/table.png')}) no-repeat 0 9999px;
			}
			.icn-fav {
				margin-left: 0;
				background-position: 0 -174px;
				&:hover {
					background-position: -20px -174px;
				}
			}
			.icn-share {
				background-position: 0 -195px;
				&:hover {
					background-position: -20px -195px;
				}
			}
			.icn-dl {
				background-position: -81px -174px;
				&:hover {
					background-position: -104px -174px;
				}
			}
		}
		.text {
			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			span {
				cursor: pointer;
			}
		}
	}
	.w0 {
		width: 370px;
	}
	.w1 {
		width: 15%;
		margin-right: 12px;
	}
	.w2 {
		width: 18%;
		margin-right: 12px;
		min-height: 16px;
	}
`
