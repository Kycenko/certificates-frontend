import { Link } from '@tanstack/react-router'
import { Ghost } from 'lucide-react'

import { Button } from '../ui/button'

export default function NotFound() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center px-4 text-center'>
			<div className='flex max-w-md flex-col items-center gap-6'>
				<div className='bg-muted text-primary rounded-full p-4'>
					<Ghost className='h-12 w-12' />
				</div>

				<h1 className='text-4xl font-bold tracking-tight'>
					Упс! Страница не найдена
				</h1>
				<p className='text-muted-foreground'>
					Мы не смогли найти страницу, которую вы искали. Возможно, она была
					перемещена или удалена.
				</p>

				<Button asChild>
					<Link
						to='/statistics'
						replace={true}
					>
						Вернуться на главную
					</Link>
				</Button>
			</div>
		</div>
	)
}
