import { Outlet, createFileRoute } from '@tanstack/react-router'
import { ClipboardListIcon } from 'lucide-react'

import { ThemeToggle } from '@/shared/components/theme-toggle'
import { checkRole } from '@/shared/lib/auth'
import { UserRole } from '@/shared/types/user.types'
import { Button } from '@/shared/ui/button'

export const Route = createFileRoute('/_authenticated/curator/_layout')({
	beforeLoad: async ({ context }) => {
		checkRole(context.auth.user!, UserRole.CURATOR)
	},
	component: RouteComponent
})

function RouteComponent() {
	return (
		<div className='flex min-h-screen flex-col'>
			<header className='flex h-16 items-center justify-between border-b px-4'>
				<div className='flex items-center gap-2 font-medium'>
					<ClipboardListIcon className='text-primary h-5 w-5' />
					<span className='text-card-foreground text-lg'>МедКонтроль</span>
				</div>

				<div className='flex items-center gap-5'>
					<ThemeToggle />
					<Button>Выход</Button>
				</div>
			</header>

			<main className='flex-1 bg-gray-50 p-4 dark:bg-black'>
				<div className='container mx-auto'>
					<Outlet />
				</div>
			</main>
		</div>
	)
}
