import { Link, Outlet } from '@tanstack/react-router'
import { ClipboardListIcon, UserCircle } from 'lucide-react'

import { Button } from '../ui/button'
import NavBar from './navbar'
import { ThemeToggle } from './theme-toggle'

function AdminLayout() {
	return (
		<div className='flex h-screen flex-col'>
			<div className='bg-background flex h-16 items-center border-b px-4'>
				<div className='flex items-center gap-2'>
					<ClipboardListIcon className='h-5 w-5 text-blue-600' />
					<Link to='/'>
						<h1 className='text-1xl font-bold'>Медицинские справки</h1>
					</Link>
				</div>

				<div className='flex-1'></div>
				<div className='flex items-center gap-2'>
					<ThemeToggle />
					<Link to='/profile'>
						<Button
							variant='outline'
							size='icon'
						>
							<UserCircle className='h-5 w-5' />
						</Button>
					</Link>
				</div>
			</div>

			<div className='flex flex-1 overflow-hidden'>
				<div className='bg-background relative w-64 border-r p-4'>
					<div className='bg-border absolute right-0 bottom-0 left-0 h-px'></div>

					<NavBar />
				</div>

				<div className='flex-1 overflow-auto bg-gray-50 p-4 dark:bg-black'>
					<div className='h-full'>
						<div>
							<Outlet />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdminLayout
