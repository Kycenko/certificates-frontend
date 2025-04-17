import { Link, useParams } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'

import { DetailsDataTable } from '@/shared/components/tables'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

import { useGetStudentByIdQuery } from '@/app/graphql/generated'

import { studentDetailsTableColumns } from '@/modules/admin/student/details/studentDetailsTableColumns'

import LandingHeader from '../landing/LandingHeader'

function StudentInfoComponent() {
	const { id } = useParams({ from: '/_public/student-info/$id' })
	const { data, loading } = useGetStudentByIdQuery({
		variables: { id }
	})

	const { lastName, firstName, secondName, group, certificates } =
		data?.getStudentById || {}

	return (
		<div>
			<LandingHeader />
			<div className='container mx-auto py-8'>
				<div className='mb-6'>
					<Link
						to='/'
						className='text-primary flex items-center text-sm font-bold transition-colors hover:underline hover:underline-offset-4'
					>
						<ChevronLeft className='mr-1 h-4 w-4' />
						Вернуться назад
					</Link>
				</div>
				<Card className='mb-6'>
					<CardHeader>
						<CardTitle>Информация о студенте</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
							<div>
								<p className='text-muted-foreground text-sm'>Фамилия</p>
								<p className='text-lg font-medium'>{lastName || '-'}</p>
							</div>
							<div>
								<p className='text-muted-foreground text-sm'>Имя</p>
								<p className='text-lg font-medium'>{firstName || '-'}</p>
							</div>
							<div>
								<p className='text-muted-foreground text-sm'>Отчество</p>
								<p className='text-lg font-medium'>{secondName || '-'}</p>
							</div>
							<div>
								<p className='text-muted-foreground text-sm'>Группа</p>
								<p className='text-lg font-medium'>{group?.title || '-'}</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Список медицинских справок</CardTitle>
					</CardHeader>
					<CardContent>
						<DetailsDataTable
							isLoading={loading}
							data={certificates}
							columns={studentDetailsTableColumns}
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default StudentInfoComponent
