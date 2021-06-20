import React from 'react'
import Row from '../../atoms/Row'
import StatItem from './StatItem'

interface Props {
	statsItems: StatItem[]
}

interface StatItem {
	label: string
	value: string
}

const StatsRow: React.FC<Props> = ({ statsItems }) => {
	return (
		<Row>
			{statsItems.map((item, i) => {
				const isLast = i === statsItems.length - 1
				const isFirst = i === 0
				const positionPreset = isLast ? 'last' : isFirst ? 'first' : 'mid'

				return <StatItem {...item} {...{ positionPreset }} key={item.label} />
			})}
		</Row>
	)
}

export default StatsRow
