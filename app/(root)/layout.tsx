'use client'

import { ThemeToggle } from '@/shared/components'
import NavBar from '@/shared/components/navbar'

export default function HomeLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex h-screen flex-col'>
			<div className='bg-background flex h-16 items-center border-b px-4'>
				<h1 className='text-1xl font-bold'>Медицинские справки</h1>

				<div className='flex-1'></div>
				<div className='flex items-center'>
					<ThemeToggle />
				</div>
			</div>

			<div className='flex flex-1 overflow-hidden'>
				<div className='bg-background relative w-64 border-r p-4'>
					<div className='bg-border absolute right-0 bottom-0 left-0 h-px'></div>

					<NavBar />
				</div>

				<div className='flex-1 overflow-auto p-4'>
					<div className='h-full'>
						<div>{children}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
