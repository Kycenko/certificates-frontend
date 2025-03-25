import { User } from 'lucide-react'
import Link from 'next/link'

import { navLinks } from '@/components/nav-links'
import { Button } from '@/components/ui/button'

export default function HomeLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex h-screen'>
			<div className='flex flex-1 overflow-hidden'>
				<div className='bg-background w-64 overflow-y-auto border-r p-4'>
					<nav className='flex h-full flex-col'>
						<ul className='flex flex-grow flex-col space-y-2'>
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

						<div className='mt-auto pt-4'>
							<Link
								href={'/profile'}
								passHref
							>
								<Button
									variant='outline'
									className='w-full cursor-pointer justify-start gap-2'
								>
									<User className='h-4 w-4' />
									Профиль
								</Button>
							</Link>
						</div>
					</nav>
				</div>

				<div className='flex-1 overflow-auto'>
					<div className='bg-card h-full'>
						<div className='text-foreground p-2'>{children}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
