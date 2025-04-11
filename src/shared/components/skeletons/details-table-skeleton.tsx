import { Skeleton } from '@/shared/ui/skeleton'

export function DetailsTableSkeleton() {
	return (
		<div className='space-y-6 p-4'>
			<div className='flex items-center justify-between'>
				<Skeleton className='h-8 w-52' />
				<Skeleton className='h-8 w-24' />
			</div>
			<div className='space-y-4'>
				<Skeleton className='h-[300px] w-full' />
			</div>
		</div>
	)
}
