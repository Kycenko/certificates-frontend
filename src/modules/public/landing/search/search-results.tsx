import { useRouter } from '@tanstack/react-router'

import { Skeleton } from '@/shared/ui'
import { Button } from '@/shared/ui/button'

import { GetAllStudentsQuery } from '@/app/graphql/generated'

interface LandingSearchResultsProps {
	students: GetAllStudentsQuery['getAllStudents']
	isLoading: boolean
}

function LandingSearchResults({
	students,
	isLoading
}: LandingSearchResultsProps) {
	const router = useRouter()

	if (isLoading) return <Skeleton className='h-[300px] w-full' />

	return (
		<div className='space-y-4'>
			<h2 className='text-foreground text-xl font-semibold'>
				Результаты поиска:
			</h2>
			<div className='overflow-hidden rounded-lg border shadow-sm'>
				<ul className='divide-border max-h-60 divide-y overflow-y-auto'>
					{students.map(student => (
						<li
							key={student.id}
							className='hover:bg-accent p-4 transition-colors duration-150'
						>
							<div className='flex items-center justify-between'>
								<div>
									<p className='text-foreground text-lg font-medium'>
										{student.lastName} {student.firstName}{' '}
										{student.secondName || ''}
									</p>
									<p className='text-muted-foreground text-sm'>
										Группа: {student.group?.title || 'Не указана'}
									</p>
								</div>
								<Button
									variant='outline'
									onClick={() =>
										router.navigate({ to: `/students/${student.id}` })
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
