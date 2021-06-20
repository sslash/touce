import * as Sentry from '@sentry/react-native'
import { ApolloLink, Operation } from '@apollo/client'

const operationInfo = (operation: Operation) => ({
	// @ts-ignore
	type: operation.query.definitions.find((defn) => defn.operation).operation,
	name: operation.operationName,
	fragments: operation.query.definitions
		.filter((defn) => defn.kind === 'FragmentDefinition')
		.map((defn) => defn.kind) // defn.name?.value TODO verify this works
		.join(', '),
	variables: operation.variables,
})

// adds the query as breadcrumb,
// e.g {"fragments": "EpisodeFragment", "name": "FetchLatestPodcastEpisodes", "type": "query"}
const sentryLink = new ApolloLink((operation, forward) => {
	if (!__DEV__) {
		Sentry.addBreadcrumb({
			category: 'graphql',
			data: operationInfo(operation),
		})
	}

	return forward(operation)
})

export default sentryLink
