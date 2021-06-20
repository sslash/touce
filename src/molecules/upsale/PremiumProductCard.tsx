import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Bg from '../../atoms/Bg'
import Spacer from '../../atoms/Spacer'
import Caption from '../../atoms/texts/Caption'
import Caption2 from '../../atoms/texts/Caption2'
import Lead2 from '../../atoms/texts/Lead2'
import Title from '../../atoms/texts/Title'
import { borderRadiusScale } from '../../theme/metrics'
import { useTheme } from '../../theme/themeContext'

interface Props {
	toggleAnnual: (isAnnual: boolean) => void
	isSelected: boolean
	isAnnual: boolean
	savingsForAnnual?: number
	productStrings: {
		price: string
		title: string
		perMonthString: string
		popular?: string
		savings?: (pct: number) => string
	}
}

const br = borderRadiusScale[4]

const PremiumProductCard = (props: Props): React.ReactElement => {
	const { colors } = useTheme()
	const borderColor = props.isSelected ? colors.primary500 : colors.primary75

	return (
		<TouchableOpacity onPress={() => props.toggleAnnual(props.isAnnual)}>
			<View style={[styles.wrapper, { borderColor }]}>
				<TopLabel {...props} />
				<DurationField {...props} />
				<PriceField {...props} />
				<SavingsField {...props} />
			</View>
		</TouchableOpacity>
	)
}

const TopLabel = ({ productStrings }: Props): JSX.Element => {
	if (productStrings.popular) {
		return (
			<Bg style={styles.topLabel} bg="primary500" borderColor="primary500">
				<Caption color="noModeLight" fw="DemiBold">
					{productStrings.popular}
				</Caption>
			</Bg>
		)
	} else {
		return <Spacer y={topLabelHeight} />
	}
}

const DurationField = ({ productStrings }: Props): JSX.Element => {
	return (
		<Lead2 pt={4} pb={2} ta="center">
			{productStrings.title}
		</Lead2>
	)
}

const PriceField = ({ productStrings }: Props): JSX.Element => {
	return (
		<Caption2 color="grey500" ta="center" fw="DemiBold">
			{productStrings.perMonthString}
		</Caption2>
	)
}

const SavingsField = ({ savingsForAnnual, productStrings }: Props): JSX.Element => {
	return (
		<Title fw="Bold" ta="center" color="positivity" pt={1} pb={3}>
			{savingsForAnnual ? productStrings.savings(savingsForAnnual) : ' '}
		</Title>
	)
}

const topLabelHeight = 32

const styles = StyleSheet.create({
	wrapper: {
		borderRadius: borderRadiusScale[4],
		borderWidth: 1,
		width: 120,
	},
	topLabel: {
		borderTopLeftRadius: br,
		borderTopRightRadius: br,
		borderWidth: 1,
		borderBottomWidth: 0,
		height: topLabelHeight,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default PremiumProductCard
