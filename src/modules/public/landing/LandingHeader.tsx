import { useRouter } from '@tanstack/react-router'
import { ClipboardList } from 'lucide-react'

import { ThemeToggle } from '@/shared/components'
import { UserRole } from '@/shared/types'
import { Button } from '@/shared/ui/button'

import { useAuth } from '@/app/providers'

function LandingHeader() {
	const router = useRouter()

	const { user } = useAuth()

	function handleNavigate() {
		if (user?.role === UserRole.ADMIN)
			router.navigate({ to: '/admin/statistics' })
		else if (user?.role === UserRole.CURATOR)
			router.navigate({ to: `${'/curator/group/'}${user.curator?.groupId}` })
		else {
			router.navigate({ to: '/auth/login' })
		}
	}

	return (
		<header className='bg-card border-b'>
			<div className='flex h-16 items-center justify-between px-4'>
				<div className='flex items-center gap-2 font-medium'>
					<ClipboardList className='text-primary h-6 w-6' />
					<span className='text-lg font-medium tracking-tight'>
						МедКонтроль
					</span>
				</div>
				<div className='flex items-center gap-5'>
					<ThemeToggle />
					<Button onClick={handleNavigate}>Войти</Button>
				</div>
			</div>
		</header>
	)
}

export default LandingHeader
