import { Outlet, createRootRoute, redirect } from '@tanstack/react-router'
import Cookies from 'js-cookie'

import { ThemeToggle } from '@/components/theme-toggle'

export const Route = createRootRoute({
	component: RootComponent
})

export function checkAuth() {
	const accessToken = Cookies.get('accessToken')
	const refreshToken = Cookies.get('refreshToken')
	if (!accessToken || !refreshToken) throw redirect({ to: '/auth/login' })
}

function RootComponent() {
	return (
		<div className='grid grid-cols-[250px_1fr] grid-rows-[60px_1fr] h-screen'>
			{/* Sidebar */}
			<aside className='bg-gray-900 text-white p-4 row-span-2 hidden md:block'>
				<h2 className='text-xl font-bold'>Sidebar</h2>
			</aside>

			{/* Navbar */}
			<header className='bg-gray-800 text-white p-4 flex items-center justify-between col-span-2 md:col-span-1'>
				<h1 className='text-lg font-semibold'>Navbar</h1>
				<ThemeToggle />
			</header>

			<main className='col-span-1 row-span-1 overflow-y-auto p-6'>
				<Outlet />
			</main>
		</div>
	)
}
