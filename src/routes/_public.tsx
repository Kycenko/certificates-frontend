import { createRoute } from '@tanstack/react-router'

import { Route } from './__root'

export const publicRoute = createRoute({
	id: 'public',
	getParentRoute: () => Route,
	component: () => <div>Public</div>
})
