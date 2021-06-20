import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import V from '../../atoms/V'
import { Icon } from '../../icons'
import { spaceScale } from '../../theme/spacing'
import HeaderSubTitle from './HeaderSubTitle'
import HeaderTitle from './HeaderTitle'
import { ScreenProps } from './screenConfig'

interface Props {
	headerTitle?: ScreenProps['headerTitle']
	headerSubTitle?: ScreenProps['headerSubTitle']
	backButtonStyle?: ScreenProps['backButtonStyle']
	navigation?: ScreenProps['navigation']
}

const ScreenHeader = ({
	headerTitle,
	headerSubTitle,
	backButtonStyle,
	navigation,
}: Props): JSX.Element => {
	const noHeader = !headerTitle && !headerSubTitle

	if (noHeader) {
		return null
	}

	const onHeaderPress = () => {
		if (backButtonStyle) {
			navigation.goBack()
		}
	}

	const wrapperStyle = {
		marginTop: headerSubTitle ? spaceScale[1] : spaceScale[4],
	}

	const isPushBack = backButtonStyle === 'push'
	const isModalBack = backButtonStyle === 'modal'

	return (
		<Pressable style={wrapperStyle} onPress={onHeaderPress}>
			{!!headerTitle && (
				<V style={styles.titleWrapper} jc={isPushBack ? 'flex-start' : 'space-between'}>
					{isPushBack && (
						<V mr={1} style={{ left: -6 }}>
							<Icon icon="chevron-back-outline" fill="primaryText" />
						</V>
					)}
					<HeaderTitle {...{ headerTitle }} />
					{isModalBack && (
						<V ml={2} style={{ height: '100%' }}>
							<Icon icon="close-outline" fill="primaryText" />
						</V>
					)}
				</V>
			)}
			{!!headerSubTitle && <HeaderSubTitle {...{ headerSubTitle }} />}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	titleWrapper: {
		marginBottom: spaceScale[1],
		flexDirection: 'row',
		alignItems: 'center',
	},
})
export default ScreenHeader
