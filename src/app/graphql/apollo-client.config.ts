'use client'

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Cookies from 'js-cookie'

const authLink = setContext((_, { headers }) => {
	const refreshToken = Cookies.get('refreshToken')

	return {
		headers: {
			...headers,
			authorization: refreshToken ? `Bearer ${refreshToken}` : ''
		}
	}
})

const httpLink = createHttpLink({
	uri: 'http://localhost:7777/graphql'
})

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	credentials: 'include',
	link: authLink.concat(httpLink)
})

export default client
