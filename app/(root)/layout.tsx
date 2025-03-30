import NavLinks from '@/shared/components/nav-links'

export default function HomeLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex h-screen'>
			<div className='flex flex-1 overflow-hidden'>
				<div className='bg-background w-64 overflow-y-auto border-r p-4'>
					<NavLinks />
				</div>

				<div className='flex-1 overflow-auto p-10'>
					<div className='h-full'>
						<div>{children}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
