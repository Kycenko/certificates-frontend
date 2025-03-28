import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonField() {
	return (
		<div className='flex gap-5'>
			<Skeleton className='h-3 w-[200px]' />
			<Skeleton className='h-3 w-[200px]' />
			<Skeleton className='h-3 w-[200px]' />
			<Skeleton className='h-3 w-[200px]' />
			<Skeleton className='h-3 w-[200px]' />
			<Skeleton className='h-3 w-[200px]' />
			<Skeleton className='h-3 w-[200px]' />
		</div>
	)
}
