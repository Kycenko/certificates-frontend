import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/curators/$id'
)({
	component: RouteComponent
})

function RouteComponent() {
	return <div>Hello "/_authenticated/admin/_layout/curators/$id"!</div>
}
