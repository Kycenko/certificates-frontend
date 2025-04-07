import { useRouter } from '@tanstack/react-router'

import { GetAllStudentsQuery } from '@/app/graphql/generated'
import { Button } from '@/shared/ui/button'

interface LandingSearchResultsProps {
	students: GetAllStudentsQuery['getAllStudents']
}

function LandingSearchResults({ students }: LandingSearchResultsProps) {
	const router = useRouter()

	return (
		<div className='space-y-4'>
			<h2 className='text-xl font-semibold text-gray-800'>
				Найденные студенты:
			</h2>
			<div className='overflow-hidden rounded-lg border border-gray-200 shadow-sm'>
				<ul className='max-h-60 divide-y divide-gray-200 overflow-y-auto'>
					{students.map(student => (
						<li
							key={student.id}
							className='p-4 transition-colors duration-150 hover:bg-gray-50'
						>
							<div className='flex items-center justify-between'>
								<div>
									<p className='text-lg font-medium text-gray-900'>
										{student.lastName} {student.firstName}{' '}
										{student.secondName || ''}
									</p>
									<p className='text-sm text-gray-500'>
										Группа: {student.group?.title || 'Не указана'}
									</p>
								</div>
								<Button
									variant='outline'
									className='border-blue-500 text-blue-600 hover:bg-blue-50'
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
