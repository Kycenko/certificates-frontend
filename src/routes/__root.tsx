import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

import { AuthContextType } from '@/app/providers/AuthProvider'

interface RouterContext {
	auth: AuthContextType
}

export const Route = createRootRouteWithContext<RouterContext>()({
	component: Outlet
})
