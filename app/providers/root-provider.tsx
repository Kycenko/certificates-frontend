'use client'

import { ApolloProvider } from '@apollo/client'

import { client } from '../graphql/apollo-client.config'

import { ThemeProvider } from './theme-provider'
import { Toaster } from '@/shared/ui/sonner'

export default function RootProvider({
	children
}: {
	children: React.ReactNode
}) {
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
