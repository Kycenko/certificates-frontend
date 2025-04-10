import { Link, Outlet } from '@tanstack/react-router'
import { ClipboardListIcon, UserCircle } from 'lucide-react'

import SearchStudents from '@/modules/admin/student/search-students'

import { Button } from '../ui/button'
import NavBar from './navbar'
import { ThemeToggle } from './theme-toggle'

function AdminLayout() {
	return (
		<div className='flex h-screen flex-col'>
			<header className='bg-background flex h-16 items-center justify-between border-b px-4'>
				<div className='flex items-center gap-2 font-medium'>
					<ClipboardListIcon className='text-primary h-5 w-5' />
					<span className='text-card-foreground text-lg'>МедКонтроль</span>
				</div>

				<div className='ml-auto flex items-center gap-2'>
					<ThemeToggle />
					<Link to='/admin/profile'>
						<Button
							variant='outline'
							size='icon'
							className='ml-2'
						>
							<UserCircle className='h-5 w-5' />
						</Button>
					</Link>
				</div>
			</header>

			<div className='flex flex-1 overflow-hidden'>
				<aside className='bg-background relative w-64 border-r p-4'>
					<SearchStudents />
					<div className='bg-border absolute right-0 bottom-0 left-0 h-px'></div>
					<NavBar />
				</aside>

				<main className='flex-1 overflow-auto bg-gray-50 p-4 dark:bg-black'>
					<div className='h-full'>
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	)
}

export default AdminLayout
