import Link from 'next/link'

import { Button } from '@/shared/ui/button'

const navLinks = [
	{
		href: '/',
		title: 'Главная'
	},
	{
		href: '/groups-management',
		title: 'Управление группами'
	},

	{
		href: '/departments',
		title: 'Отделения'
	},
	{
		href: '/courses',
		title: 'Курсы'
	},
	{
		href: '/groups',
		title: 'Группы'
	},
	{
		href: '/students',
		title: 'Студенты'
	},
	{
		href: '/certificates',
		title: 'Справки'
	}
]

export default function NavLinks() {
	return (
		<nav className='flex h-full flex-col'>
			<ul className='flex flex-col space-y-2'>
				{navLinks.map(({ href, title }) => (
					<li key={href}>
						<Link
							href={href}
							passHref
						>
							<Button
								variant='ghost'
								className='text-foreground hover:bg-muted w-full cursor-pointer justify-start'
							>
								{title}
							</Button>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
