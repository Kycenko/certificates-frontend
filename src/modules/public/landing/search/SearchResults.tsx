import { useRouter } from '@tanstack/react-router'

import { Skeleton } from '@/shared/ui'
import { Button } from '@/shared/ui/button'

import { GetAllStudentsQuery } from '@/app/graphql/generated'

import SearchEmpty from './SearchEmpty'

interface LandingSearchResultsProps {
	students: GetAllStudentsQuery['getAllStudents']
	isLoading: boolean
}

function LandingSearchResults({
	students,
	isLoading
}: LandingSearchResultsProps) {
	const router = useRouter()

	if (isLoading) return <Skeleton className='h-60 w-full rounded-xl' />

	if (!students.length) return <SearchEmpty />

	return (
		<div className='space-y-4'>
			<h2 className='text-md font-semibold'>Результаты поиска</h2>
			<div className='bg-background rounded-xl border shadow-sm'>
				<ul className='divide-border max-h-80 divide-y overflow-y-auto'>
					{students.map(student => (
						<li
							key={student.id}
							className='p-4 transition-colors'
						>
							<div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
								<div>
									<p className='text-lg font-medium'>
										{student.lastName} {student.firstName}{' '}
										{student.secondName || ''}
									</p>
									<p className='text-muted-foreground text-sm'>
										Группа: {student.group?.title || '-'}
									</p>
								</div>
								<Button
									variant='outline'
									size='sm'
									onClick={() =>
										router.navigate({ to: `/student-info/${student.id}` })
									}
								>
									Просмотр
								</Button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default LandingSearchResults
