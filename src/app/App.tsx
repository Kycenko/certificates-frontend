import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ReactNode, RouterProvider, createRouter } from '@tanstack/react-router'

import { routeTree } from '@/routeTree.gen'

const client = new ApolloClient({
	uri: 'http://localhost:7777/graphql',
	cache: new InMemoryCache()
})

const router = createRouter({
	routeTree
})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

function App({ children }: ReactNode) {
	return (
		<ApolloProvider client={client}>
			<RouterProvider router={router} />
			{children}
		</ApolloProvider>
	)
}

export default App
