import { RouterProvider, createRouter } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'

import './app/index.css'
import { RootProvider } from './app/providers/root-provider'
import { routeTree } from './routeTree.gen'
import NotFound from './shared/components/not-found'

const router = createRouter({
	routeTree,
	defaultNotFoundComponent: () => <NotFound />,
	defaultPreload: 'intent'
})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(
		<RootProvider>
			<RouterProvider router={router} />
		</RootProvider>
	)
}
