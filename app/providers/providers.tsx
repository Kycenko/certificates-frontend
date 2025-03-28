'use client'

import { ApolloProvider } from '@apollo/client'
import { Toaster } from 'sonner'

import { client } from '../graphql/apollo-client.config'

import { ThemeProvider } from './theme-provider'

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				enableSystem
				disableTransitionOnChange
			>
				{children}
				<Toaster />
			</ThemeProvider>
		</ApolloProvider>
	)
}
