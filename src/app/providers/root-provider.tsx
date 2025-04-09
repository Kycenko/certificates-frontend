import { ApolloProvider } from '@apollo/client'

import { Toaster } from '@/shared/ui/sonner'

import client from '../graphql/apollo-client.config'
import { AuthProvider } from './auth-provider'
import { ThemeProvider } from './theme-provider'

export function RootProvider({ children }: { children: React.ReactNode }) {
	return (
		<ApolloProvider client={client}>
			<AuthProvider>
				<ThemeProvider
					defaultTheme='dark'
					storageKey='vite-ui-theme'
				>
					{children}

					<Toaster />
				</ThemeProvider>
			</AuthProvider>
		</ApolloProvider>
	)
}
