import { Link, Outlet } from '@tanstack/react-router'
import { ClipboardList, UserCircle } from 'lucide-react'

import { Button } from '@/shared/ui/button'

import AdminSearchStudents from '@/modules/admin/student/AdminSearchStudents'

import Logout from '../Logout'
import NavBar from '../NavBar'
import { ThemeToggle } from '../ThemeToggle'
import PageTransition from '../motions/PageTransition'

function AdminLayout() {
	return (
		<div className='flex h-screen flex-col'>
			<header className='sticky top-0 z-10 flex h-16 items-center justify-between border-b px-4 backdrop-blur'>
				<Link
					className='flex items-center gap-3'
					to={'/'}
				>
					<ClipboardList className='text-primary h-6 w-6' />
					<span className='text-xl font-medium tracking-tight'>
						МедКонтроль
					</span>
				</Link>

				<div className='flex items-center gap-3'>
					<ThemeToggle />
					<Link to='/admin/profile'>
						<Button
							title='Профиль'
							variant='ghost'
							size='icon'
							className='h-9 w-9 rounded-full'
						>
							<UserCircle className='h-5 w-5' />
						</Button>
					</Link>
				</div>
			</header>

			<div className='flex flex-1 overflow-hidden'>
				<aside className='hidden h-full w-64 overflow-hidden border-r backdrop-blur md:flex md:flex-col'>
					<div className='flex h-full flex-col'>
						<div className='flex-1 p-4'>
							<div className='mb-6'>
								<AdminSearchStudents />
							</div>
							<NavBar />
						</div>

						<div className='border-t p-4'>
							<Logout variant='sidebar' />
						</div>
					</div>
				</aside>

				<main className='flex-1 overflow-auto p-4 md:p-6'>
					<div className='mx-auto h-full'>
						<PageTransition>
							<Outlet />
						</PageTransition>
					</div>
				</main>
			</div>
		</div>
	)
}
export default AdminLayout
