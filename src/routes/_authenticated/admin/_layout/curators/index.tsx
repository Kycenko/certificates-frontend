import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/admin/_layout/curators/')(
	{
		component: RouteComponent
	}
)

function RouteComponent() {
	return <div>Hello "/_authenticated/admin/_layout/curators/"!</div>
}
