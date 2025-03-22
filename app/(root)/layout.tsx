import { Search, User } from 'lucide-react'
import Link from 'next/link'

import { navLinks } from '@/components/nav-links'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function HomeLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex h-screen flex-col'>
			<div className='bg-background border-b p-4'>
				<div className='flex items-center justify-between'>
					<CardTitle className='text-foreground text-xl font-semibold'>
						Медицинские справки
					</CardTitle>
					<div className='flex items-center gap-4'>
						<div className='relative'>
							<Search className='text-muted-foreground absolute top-2.5 left-2 h-4 w-4' />
							<Input
								placeholder='Поиск...'
								className='bg-card text-foreground border-border min-w-80 pl-8'
							/>
						</div>
						<ThemeToggle />
					</div>
				</div>
			</div>

			<div className='flex flex-1'>
				<div className='bg-background w-64 p-4'>
					<Card className='bg-card flex h-full flex-col border shadow-sm'>
						<CardContent className='flex flex-grow flex-col'>
							<nav className='flex flex-grow flex-col'>
								<ul className='flex flex-col space-y-2'>
									{navLinks.map(({ href, title }) => (
										<Link
											href={href}
											key={href}
										>
											<Button
												variant='ghost'
												className='text-foreground hover:bg-muted w-full cursor-pointer justify-start'
											>
												{title}
											</Button>
										</Link>
									))}
								</ul>

								<div className='mt-auto'>
									<Link href={'/profile'}>
										<Button
											variant='outline'
											className='mt-auto w-full cursor-pointer justify-start gap-2'
										>
											<User className='h-4 w-4' />
											Профиль
										</Button>
									</Link>
								</div>
							</nav>
						</CardContent>
					</Card>
				</div>

				<div className='bg-background flex-1 p-4'>
					<Card className='bg-card shadow-sm'>
						<CardContent className='text-foreground p-4'>
							{children}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
