import { Input } from '@/components/ui/input'

import { ThemeToggle } from '@/app/components/theme-toggle'

export default function HomeLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex h-screen '>
			<div className=' w-64 p-4 border-r border-gray-200 '>
				<div className='text-xl font-semibold mb-6'>Medical</div>
				<nav>
					<ul>
						<li className='mb-2'>
							<a
								href='#'
								className='block p-2 hover:bg-blue-100 rounded'
							>
								Главная
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className='flex-1 flex flex-col'>
				<div className=' p-4 border-b border-gray-200'>
					<div className='flex justify-between items-center'>
						<div className='text-xl font-semibold'>Dashboard</div>
						<div className='flex items-center'>
							<Input
								type='text'
								placeholder='Search...'
								className='p-2 border border-gray-300 rounded'
							/>
						</div>
						<div className='ml-4'>
							<ThemeToggle />
						</div>
					</div>
				</div>

				<div className='flex-1 p-4'>{children}</div>
			</div>
		</div>
	)
}
