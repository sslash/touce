import React from 'react'
import Button, { ButtonVariant } from '../../atoms/Button'
import Row from '../../atoms/Row'
import Spacer from '../../atoms/Spacer'

export interface ButtonGroupProps {
	primary: Cta
	secundary?: Cta
}

interface Cta {
	label: string
	onPress: () => void
}

interface Props {
	buttons: ButtonGroupProps
}

const ButtonGroup = ({ buttons }: Props): JSX.Element => {
	const { primary, secundary } = buttons

	const Primary = (
		<Button size="small" onPress={primary.onPress}>
			{primary.label}
		</Button>
	)

	if (secundary) {
		return (
			<Row>
				{Primary}
				<Spacer x={16} />
				<Button size="small" variant={ButtonVariant.Outline} onPress={secundary.onPress}>
					{secundary.label}
				</Button>
			</Row>
		)
	} else {
		return Primary
	}
}

export default ButtonGroup
