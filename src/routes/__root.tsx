import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

import { AuthContextType } from '@/app/providers/auth-provider'

interface RouterContext {
	auth: AuthContextType
}

export const Route = createRootRouteWithContext<RouterContext>()({
	component: () => (
		<>
			<Outlet />
			{/* <TanStackRouterDevtools /> */}
		</>
	)
})
