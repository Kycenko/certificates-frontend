import { useRouter } from '@tanstack/react-router'
import { LogOut } from 'lucide-react'

import { useLogoutMutation } from '@/app/graphql/generated'

import { cn, removeAuthData } from '../lib'
import { Button } from '../ui/button'

function Logout({ variant }: { variant: 'sidebar' | 'header' }) {
	const router = useRouter()

	const [logout] = useLogoutMutation({
		onCompleted: () => {
			removeAuthData()
			router.navigate({ to: '/auth/login', replace: true })
		}
	})

	return (
		<Button
			variant='ghost'
			className={cn(
				'hover:text-destructive gap-2',
				variant === 'sidebar' && 'w-full justify-start',
				variant === 'header' && 'flex items-center'
			)}
			onClick={() => logout()}
		>
			<LogOut className='h-4 w-4' />
			<span>Выйти</span>
		</Button>
	)
}

export default Logout
