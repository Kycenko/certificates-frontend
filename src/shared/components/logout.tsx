import { useRouter } from '@tanstack/react-router'

import { useLogoutMutation } from '@/app/graphql/generated'

import { removeTokens } from '../lib/tokens'
import { Button } from '../ui/button'

export default function Logout() {
	const router = useRouter()

	const [logout] = useLogoutMutation({
		onCompleted: () => {
			removeTokens()
			router.navigate({ to: '/auth/login' })
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
