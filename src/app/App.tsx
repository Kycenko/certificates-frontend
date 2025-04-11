import { routeTree } from '@/routeTree.gen'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import NotFound from '@/shared/components/NotFound'
import Spinner from '@/shared/components/Spinner'

import { useAuth } from './providers/AuthProvider'

const router = createRouter({
	routeTree,
	context: {
		auth: undefined!
	},
	defaultNotFoundComponent: () => <NotFound />,
	defaultPendingComponent: () => <Spinner />
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
