import { Link } from '@tanstack/react-router'

import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { navLinks } from './navLinks'

function NavBar() {
	return (
		<div className='flex h-full flex-col'>
			<div className='flex-1 overflow-y-auto'>
				<nav className='flex flex-col'>
					{navLinks.map((group, index) => (
						<div
							key={index}
							className='mb-4 flex flex-col space-y-2'
						>
							<ul className='flex flex-col space-y-2'>
								{group.map(({ href, title, icon }) => (
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

							{index !== navLinks.length - 1 && <Separator />}
						</div>
					))}
				</nav>
			</div>
		</div>
	)
}
export default NavBar
