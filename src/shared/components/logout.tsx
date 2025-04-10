import { useRouter } from '@tanstack/react-router'

import { useLogoutMutation } from '@/app/graphql/generated'

import { removeAuthData } from '../lib'
import { Button } from '../ui/button'

export default function Logout() {
	const router = useRouter()

	const [logout] = useLogoutMutation({
		onCompleted: () => {
			removeAuthData()
			router.navigate({ to: '/auth/login', replace: true })
		}
	})

	return (
		<Button
			className='w-full'
			variant={'outline'}
			onClick={() => logout()}
		>
			Выйти
		</Button>
	)
}
