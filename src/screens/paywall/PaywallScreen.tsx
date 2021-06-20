import { RouteProp } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import Button, { ButtonVariant } from '../../atoms/Button'
import FadedOverlayFooter from '../../atoms/FadedOverlayFooter'
import LoadingOverlay from '../../atoms/LoadingOverlay'
import LoadingView from '../../atoms/LoadingView'
import { SludgeVariant } from '../../atoms/sludges'
import { FeatureFlags, useIsEnabled } from '../../hooks/useFeatureFlags'
import Screen from '../../molecules/screen/Screen'
import { RootStackParamList } from '../../navigation/types'
import { usePurchase } from '../../store/purchase/purchase'
import { haptic } from '../../utils/haptic'
import ErrorMessage from './components/ErrorMessage'
import VariationAView from './components/VariationAView'
import VariationBView from './components/VariationBView'
import { useProductContent } from './useProductContent'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Paywall'>
	route: RouteProp<RootStackParamList, 'Paywall'>
}

const PaywallScreen = ({ navigation, route }: Props): React.ReactElement => {
	const [hasChosenAnnual, setHasChosenAnnual] = useState(true)

	const {
		isPurchasing,
		hasPurchasedPremium,
		isFetchingOfferings,
		purchase,
		errorCode,
		offerings,
	} = usePurchase()

	const isVariationA = useIsEnabled(FeatureFlags.PAYWALL_VARIATION)

	const { heading, purchaseString, ...props } = useProductContent({
		offerings,
		isFetchingOfferings,
		hasChosenAnnual,
		isVariationA,
	})

	useEffect(() => {
		if (hasPurchasedPremium) {
			const toScreen = route.params?.redirectScreen || 'Home'
			// @ts-ignore
			navigation.navigate(toScreen)
		}
	}, [hasPurchasedPremium])

	const onPurchase = () => {
		void purchase({ hasChosenAnnual })
	}

	const toggleAnnual = (v: boolean) => {
		haptic('impactMedium')
		setHasChosenAnnual(v)
	}

	return (
		<>
			<Screen
				navigation={navigation}
				testID="Paywall"
				sludge={SludgeVariant.Ditto}
				preset={'scroll'}
				backButtonStyle="modal"
				stdMargin
				sludgeStyle={{ top: -75 }}
				headerTitle={heading}
			>
				<View style={styles.wrapper}>
					{isFetchingOfferings ? (
						<LoadingView />
					) : !props.productStrings ? (
						<View />
					) : isVariationA ? (
						<VariationAView {...props} {...{ toggleAnnual, hasChosenAnnual }} />
					) : (
						<VariationBView {...props} {...{ toggleAnnual, hasChosenAnnual }} />
					)}
				</View>
				{isPurchasing && <LoadingOverlay accessibilityLabel="Purchasing" />}
			</Screen>

			<FadedOverlayFooter>
				<ErrorMessage strings={props.strings} {...{ errorCode }} />
				{!!purchaseString && !hasPurchasedPremium && (
					<Button
						variant={ButtonVariant.Secundary}
						onPress={onPurchase}
						hasHaptic
						isLoading={isPurchasing}
						testID="paywall-purchase"
					>
						{purchaseString}
					</Button>
				)}
			</FadedOverlayFooter>
		</>
	)
}

const styles = StyleSheet.create({
	wrapper: { paddingVertical: 32, paddingTop: 106 },
})

export default PaywallScreen
