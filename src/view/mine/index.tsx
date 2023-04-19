import { memo } from 'react'
import type { ReactNode } from 'react'
import { Button, Space } from 'antd'
interface IProps {
	children?: ReactNode
}
const Mine: React.FC<IProps> = () => {
	return (
		<div>
			<Space wrap>
				<Button type="primary">Primary Button</Button>
				<Button>Default Button</Button>
				<Button type="dashed">Dashed Button</Button>
				<Button type="text">Text Button</Button>
				<Button type="link">Link Button</Button>
			</Space>
		</div>
	)
}

export default memo(Mine)
