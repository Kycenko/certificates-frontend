import { Link } from '@tanstack/react-router'

import Logout from './logout'
import { navLinks } from './nav-links'
import { Button } from '@/shared/ui/button'

export default function NavBar() {
	return (
		<div className='flex h-full flex-col justify-between'>
			<div className='flex-1'>
				<nav className='flex h-full flex-col'>
					<div className='pb-4'></div>
					<ul className='flex flex-1 flex-col space-y-2'>
						{navLinks.map(({ href, title, icon }) => (
							<li key={href}>
								<Button
									variant='ghost'
									className='text-foreground hover:bg-muted w-full cursor-pointer justify-start'
									asChild
								>
									<Link to={href}>
										<div className='flex items-center gap-2'>
											{icon}
											<span>{title}</span>
										</div>
									</Link>
								</Button>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className='mt-auto pt-4'>
				<Logout />
			</div>
		</div>
	)
}
