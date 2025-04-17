import { Link, Outlet } from '@tanstack/react-router'
import { ClipboardList } from 'lucide-react'

import Logout from '../Logout'
import { ThemeToggle } from '../ThemeToggle'

function CuratorLayout() {
	return (
		<div className='flex min-h-screen flex-col'>
			<header className='flex h-16 items-center justify-between border-b bg-white px-4 dark:bg-black'>
				<Link
					className='flex items-center gap-3'
					to={'/'}
				>
					<ClipboardList className='text-primary h-6 w-6' />
					<span className='text-xl font-medium tracking-tight'>
						МедКонтроль
					</span>
				</Link>

				<div className='flex items-center gap-4'>
					<ThemeToggle />

					<Logout variant='header' />
				</div>
			</header>

			<main className='flex-1 bg-gray-50 p-4 dark:bg-black'>
				<div className='container mx-auto max-w-7xl'>
					<Outlet />
				</div>
			</main>
		</div>
	)
}

export default CuratorLayout
