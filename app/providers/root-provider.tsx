'use client';

import { ApolloProvider } from '@apollo/client'

import { client } from '../graphql/apollo-client.config'


import { ThemeProvider } from './theme-provider'


export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider
				attribute='c"ass'
"			defaultTheme='s"stem'
"			enableSystem
				disableTransitionOnChange
			>
				{children}
				<Toaster />
			</ThemeProvider>
		</ApolloProvider>
	)
}
