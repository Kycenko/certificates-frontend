import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'
import RootProvider from './providers/root-provider'

const montserrat = Montserrat({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={`${montserrat.variable} antialiased`}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	)
}
