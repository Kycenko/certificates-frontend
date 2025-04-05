import { Montserrat } from 'next/font/google'

import './globals.css'
import RootProvider from './providers/root-provider'

const montserrat = Montserrat({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={`${montserrat.variable}`}
			suppressHydrationWarning
		>
			<body>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	)
}
