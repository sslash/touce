import React from 'react'
import { View } from 'react-native'
import AipomFooter from '../../../atoms/AipomFooter'
import Row from '../../../atoms/Row'
import Spacer from '../../../atoms/Spacer'
import Secundary from '../../../atoms/texts/Secundary'
import Title from '../../../atoms/texts/Title'
import V from '../../../atoms/V'
import { ProductStringsReturnType } from '../../../localization/sharedTypes'
import { Strings } from '../../../localization/types'
import TestamonialCard from '../../../molecules/TestamonialCard'
import TickedItemsList, { FixedItem } from '../../../molecules/TickedItemsList'
import PremiumProductCard from '../../../molecules/upsale/PremiumProductCard'
import { spaceScale } from '../../../theme/spacing'
import { sectionSpace, titleMargin } from '../constants'
import Terms from './Terms'

interface Props {
	strings: Strings['paywall']
	productStrings: ProductStringsReturnType
	hasChosenAnnual: boolean
	savingsForAnnual: number
	toggleAnnual: (isAnnual: boolean) => void
}

const VariationBView = ({
	strings,
	productStrings,
	hasChosenAnnual,
	savingsForAnnual,
	toggleAnnual,
}: Props): React.ReactElement => {
	const s = strings.b
	const items = s.checkedItems

	return (
		<V>
			<Row jc="center">
				<PremiumProductCard
					productStrings={productStrings.annual}
					isSelected={hasChosenAnnual}
					isAnnual
					{...{ savingsForAnnual, toggleAnnual }}
				/>
				<Spacer x={32} />
				<PremiumProductCard
					toggleAnnual={toggleAnnual}
					productStrings={productStrings.monthly}
					isSelected={!hasChosenAnnual}
					isAnnual={false}
				/>
			</Row>

			<Spacer y={sectionSpace * 1.8} />

			<TickedItemsList<FixedItem>
				data={items}
				keyGenerator={(item) => item.title}
				rowStyle={{ marginBottom: spaceScale[titleMargin] }}
				sparklingLast
				tickVariant="checkmark"
			/>
			<Spacer y={sectionSpace} />
			<Title fw="Bold" mb={titleMargin}>
				{strings.testamonials}
			</Title>
			{strings.testamonialItems.map((item) => (
				<View key={item.title}>
					<TestamonialCard {...item} />
					<Spacer y={spaceScale[5]} />
				</View>
			))}

			<Spacer y={sectionSpace / 2} />

			<Secundary fw="Bold" mb={1}>
				{s.terms}
			</Secundary>
			<Terms
				{...{
					hasChosenAnnual,
					price: hasChosenAnnual
						? productStrings.annual.price
						: productStrings.monthly.price,
				}}
			/>

			<Spacer y={250} />

			<AipomFooter />
		</V>
	)
}

export default VariationBView
