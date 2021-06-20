import React from 'react'
import LoadingView from '../../../atoms/LoadingView'
import { useIsLoggedIn } from '../../../hooks/useIsLoggedIn'
import ButtonSettingRow from '../../../molecules/settings/ButtonSettingRow'
import SettingRowWrapper from '../../workout/components/settings/SettingRowWrapper'
import { SettingProps } from '../types'

const AccountSetting = ({ strings, navigation }: SettingProps): React.ReactElement => {
	const { isLoggedIn, isLoading, logout, user } = useIsLoggedIn()
	const s = strings.account

	const goToLogin = () => {
		navigation.navigate('Auth', {
			redirectScreen: 'Settings',
		})
	}

	if (isLoading) {
		return <LoadingView />
	}

	return (
		<SettingRowWrapper icon="person-outline" label={'Account'}>
			{isLoggedIn ? (
				<ButtonSettingRow
					heading={s.loggedIn}
					body={user.email}
					buttonLabel={s.logOut}
					onPress={logout}
				/>
			) : (
				<ButtonSettingRow
					heading={s.notLoggedIn}
					body={s.login}
					buttonLabel={s.loginButton}
					onPress={goToLogin}
				/>
			)}
		</SettingRowWrapper>
	)
}

export default AccountSetting
