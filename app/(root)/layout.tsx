import Link from 'next/link'

import { navLinks } from '@/components/nav-links'
import { ThemeToggle } from '@/components/theme-toggle'
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

						<div className='mt-auto flex gap-3 pt-4'>
							<ThemeToggle />
						</div>
					</nav>
				</div>

				<div className='flex-1 space-y-4 overflow-auto p-6'>
					<div className='h-full'>
						<div>{children}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
