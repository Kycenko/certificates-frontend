import { routeTree } from '@/routeTree.gen'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import NotFound from '@/shared/components/not-found'
import { Spinner } from '@/shared/components/spinner'

import { useAuth } from './providers/auth-provider'

const router = createRouter({
	routeTree,
	context: {
		auth: undefined!
	},
	defaultNotFoundComponent: () => <NotFound />,
	defaultPendingComponent: () => <Spinner />,
	defaultPreload: 'intent'
})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

function App() {
	const auth = useAuth()

	return (
		<RouterProvider
			router={router}
			context={{ auth }}
		/>
	)
}

export default App
