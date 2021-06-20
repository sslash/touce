import { BootstrapDocument } from '../../queries/autogenerate/hooks'
import apolloManager from '../apollo/apolloClient'
import { BootstrapQuery } from './../../queries/autogenerate/operations'
import config from './config'

/**
 * Get a config value from the server api, if exists.
 * Defaults to embedded config value otherwise.
 *
 * @param configKey
 * @param defaultValue
 * @returns
 */
export async function getGraphqlConfig<T>(
	configKey: string,
	defaultValue?: keyof typeof config
): Promise<T | null> {
	const res = await apolloManager.client.query<BootstrapQuery>({ query: BootstrapDocument })

	return (res.data.appConfig[configKey] || config[defaultValue]) as T
}
