import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonField() {
	return (
		<div className='flex gap-5'>
			<Skeleton className='h-3 w-[250px]' />
			<Skeleton className='h-3 w-[250px]' />
		</div>
	)
}
