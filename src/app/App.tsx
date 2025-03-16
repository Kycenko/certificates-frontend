import { ApolloProvider } from '@apollo/client'
import { ReactNode, RouterProvider, createRouter } from '@tanstack/react-router'

import { ThemeProvider } from '@/components/providers/theme.provider'

import { client } from '@/graphql/graphql.config'
import { routeTree } from '@/routeTree.gen'

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
			<ThemeProvider
				defaultTheme='dark'
				storageKey='vite-ui-theme'
			>
				<RouterProvider router={router} />

				{children}
			</ThemeProvider>
		</ApolloProvider>
	)
}

export default App
