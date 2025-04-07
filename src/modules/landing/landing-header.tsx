import { useRouter } from '@tanstack/react-router'
import { ClipboardListIcon } from 'lucide-react'

import { Button } from '@/shared/ui/button'

function LandingHeader() {
	const router = useRouter()
	return (
		<header className='border-b bg-white'>
			<div className='flex h-16 items-center justify-between px-4'>
				<div className='flex items-center gap-2 font-medium'>
					<ClipboardListIcon className='h-5 w-5 text-blue-600' />
					<span className='text-lg'>МедКонтроль</span>
				</div>
				<Button
					onClick={() => router.navigate({ to: '/auth/login' })}
					className='bg-blue-600 hover:bg-blue-700'
				>
					Войти
				</Button>
			</div>
		</header>
	)
}

export default LandingHeader
