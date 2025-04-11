import { Link, Outlet } from '@tanstack/react-router'
import { ClipboardList, UserCircle } from 'lucide-react'
import { motion } from 'motion/react'

import { Button } from '@/shared/ui/button'

import AdminSearchStudents from '@/modules/admin/student/admin-search-students'

import Logout from '../logout'
import NavBar from '../navbar'
import { ThemeToggle } from '../theme-toggle'

interface PageTransitionProps {
	children: React.ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 10 }}
			transition={{ duration: 0.3, ease: 'easeInOut' }}
		>
			{children}
		</motion.div>
	)
}

function AdminLayout() {
	return (
		<div className='flex h-screen flex-col'>
			<header className='bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10 flex h-16 items-center justify-between border-b px-4 backdrop-blur'>
				<div className='flex items-center gap-3'>
					<ClipboardList className='text-primary h-6 w-6' />
					<span className='text-xl font-semibold tracking-tight'>
						МедКонтроль
					</span>
				</div>

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
				<aside className='bg-background/95 hidden h-full w-64 overflow-hidden border-r backdrop-blur md:flex md:flex-col'>
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

				<main className='bg-muted/50 flex-1 overflow-auto p-4 md:p-6'>
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
