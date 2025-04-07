import { useRouter } from '@tanstack/react-router'
import { ClipboardListIcon } from 'lucide-react'

import { ThemeToggle } from '@/shared/components'
import { Button } from '@/shared/ui/button'

function LandingHeader() {
	const router = useRouter()
	return (
		<header className='bg-card border-b'>
			<div className='flex h-16 items-center justify-between px-4'>
				<div className='flex items-center gap-2 font-medium'>
					<ClipboardListIcon className='text-primary h-5 w-5' />
					<span className='text-card-foreground text-lg'>МедКонтроль</span>
				</div>
				<div className='flex items-center gap-5'>
					<ThemeToggle />
					<Button onClick={() => router.navigate({ to: '/auth/login' })}>
						Войти
					</Button>
				</div>
			</div>
		</header>
	)
}

export default LandingHeader
