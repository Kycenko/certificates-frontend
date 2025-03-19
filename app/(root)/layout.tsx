import { Search } from 'lucide-react'
import Link from 'next/link'

import { navLinks } from '../components/nav-links'
import { ThemeToggle } from '../components/theme-toggle'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'

export default function HomeLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex flex-col h-screen'>
			<div className='p-4 border-b bg-background'>
				<div className='flex justify-between items-center'>
					<CardTitle className='text-xl font-semibold text-foreground'>
						Medical
					</CardTitle>
					<div className='flex items-center gap-4'>
						<div className='relative'>
							<Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
							<Input
								placeholder='Поиск...'
								className='pl-8 min-w-80 bg-card text-foreground border-border'
							/>
						</div>
						<ThemeToggle />
					</div>
				</div>
			</div>

			<div className='flex flex-1'>
				<div className='w-64 p-4 bg-background'>
					<Card className='border h-full shadow-sm bg-card flex flex-col'>
						<CardContent className='flex flex-col flex-grow'>
							<nav className='flex flex-col flex-grow'>
								<ul className='flex flex-col space-y-2'>
									{navLinks.map(({ href, title }) => (
										<Link
											href={href}
											key={href}
										>
											<Button
												variant='ghost'
												className='w-full justify-start text-foreground hover:bg-muted cursor-pointer'
											>
												{title}
											</Button>
										</Link>
									))}
								</ul>

								<Button
									variant='ghost'
									className='w-full justify-start text-foreground hover:bg-muted cursor-pointer mt-auto'
								>
									Выход
								</Button>
							</nav>
						</CardContent>
					</Card>
				</div>

				<div className='flex-1 p-4 bg-background'>
					<Card className='bg-card shadow-sm'>
						<CardContent className='p-4 text-foreground'>
							{children}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
