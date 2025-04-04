import { Skeleton } from '@/shared/ui/skeleton'

export function TableSkeleton() {
	return (
		<div className='space-y-6 p-4'>
			<div className='flex justify-end gap-3'>
				<Skeleton className='h-8 w-24' />
				<Skeleton className='h-8 w-10' />
			</div>
			<div className='flex items-center justify-between'>
				<Skeleton className='h-8 w-52' />

				<div className='flex justify-end gap-5'>
					<Skeleton className='h-8 w-38' />
					<Skeleton className='h-8 w-24' />
				</div>
			</div>
			<div className='space-y-4'>
				<Skeleton className='h-[300px] w-full' />
			</div>
			<div className='flex justify-end gap-3'>
				<Skeleton className='h-8 w-24' />
				<Skeleton className='h-8 w-24' />
			</div>
		</div>
	)
}
