import styled from 'styled-components'

export const RecommendWrapper = styled.div`
	> .content {
		border: 1px solid #d3d3d3;
		width: 980px;
		background-image: url(${require('@/assets/img/wrap-bg.png')});
		display: flex;
		> .left {
			padding: 20px;
			width: 729px;
		}
		> .right {
			margin-left: 1px;
			width: 250px;
		}
	}
`
