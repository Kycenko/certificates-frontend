import { Outlet } from '@tanstack/react-router'
import { ClipboardListIcon } from 'lucide-react'

import Logout from '../logout'
import { ThemeToggle } from '../theme-toggle'

function CuratorLayout() {
	return (
		<div className='flex min-h-screen flex-col'>
			<header className='flex h-16 items-center justify-between border-b bg-white px-4 dark:bg-black'>
				<div className='flex items-center gap-2 font-medium'>
					<ClipboardListIcon
						className='text-primary h-5 w-5'
						aria-label='МедКонтроль логотип'
					/>
					<span className='text-foreground text-lg'>МедКонтроль</span>
				</div>

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
