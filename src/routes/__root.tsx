import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import NotFound from '@/shared/components/not-found'

import { AuthContextType } from '@/app/providers/auth-provider'

interface RouterContext {
	auth: AuthContextType
}

export const Route = createRootRouteWithContext<RouterContext>()({
	component: () => (
		<>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
	notFoundComponent: () => <NotFound />
})
