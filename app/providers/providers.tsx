'use client'

import { ApolloProvider } from '@apollo/client'
import { MantineProvider, createTheme } from '@mantine/core'

import { client } from '../graphql/graphql.config'

export default function Providers({ children }: { children: React.ReactNode }) {
	const theme = createTheme({
		primaryColor: 'blue'
	})

	return (
		<ApolloProvider client={client}>
			<MantineProvider theme={theme}>{children}</MantineProvider>
		</ApolloProvider>
	)
}
