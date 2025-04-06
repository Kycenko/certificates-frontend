import { ApolloProvider } from '@apollo/client'

import client from '../graphql/apollo-client.config'

import { ThemeProvider } from './theme-provider'
import { Toaster } from '@/shared/ui/sonner'

export function RootProvider({ children }: { children: React.ReactNode }) {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider
				defaultTheme='dark'
				storageKey='vite-ui-theme'
			>
				{children}

				<Toaster />
			</ThemeProvider>
		</ApolloProvider>
	)
}
