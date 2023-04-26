import { memo } from 'react'
import type { ReactNode } from 'react'
import { AlbumItemWrapper } from './style'
import { formatImageUrl } from '@/utils/format'
interface IProps {
	children?: ReactNode
	itemData: any
}
const NewAlbumItem: React.FC<IProps> = props => {
	const { itemData } = props
	return (
		<AlbumItemWrapper>
			<div className="album-image">
				<img src={formatImageUrl(itemData.picUrl, 120)} alt="" />
				<a className="cover sprite_covor">{itemData.name}</a>
			</div>
			<div className="album-info">
				<div className="name">{itemData.name}</div>
				<div className="artist">{itemData.artist.name}</div>
			</div>
		</AlbumItemWrapper>
	)
}

export default memo(NewAlbumItem)
