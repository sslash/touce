import React from 'react'
import { View } from 'react-native'
import AipomFooter from '../../../atoms/AipomFooter'
import Row from '../../../atoms/Row'
import Spacer from '../../../atoms/Spacer'
import Body from '../../../atoms/texts/Body'
import { TProps } from '../../../atoms/texts/T'
import Title from '../../../atoms/texts/Title'
import V from '../../../atoms/V'
import { ProductStringsReturnType } from '../../../localization/sharedTypes'
import { Strings } from '../../../localization/types'
import TestamonialCard from '../../../molecules/TestamonialCard'
import TickedItemsList from '../../../molecules/TickedItemsList'
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

const VariationAView = ({
	strings,
	productStrings,
	hasChosenAnnual,
	savingsForAnnual,
	toggleAnnual,
}: Props): React.ReactElement => {
	const s = strings.a
	const items = s.items
	const boldProps: TProps = { color: 'secundaryText', fw: 'Bold' }

	return (
		<V>
			<Title fw="Bold" mb={titleMargin}>
				{s.plan}
			</Title>
			<TickedItemsList
				data={items}
				renderItem={(item) => (
					<Body color="secundaryText" style={{ flex: 1 }}>
						{item(boldProps)}
					</Body>
				)}
				keyGenerator={(_, i) => `${i}`}
				rowStyle={{ marginBottom: spaceScale[titleMargin] }}
				sparklingLast
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

			<Spacer y={sectionSpace} />

			<Title fw="Bold" mb={titleMargin}>
				{s.chooseProduct}
			</Title>

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
			<Spacer y={sectionSpace / 2} />

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

export default VariationAView
