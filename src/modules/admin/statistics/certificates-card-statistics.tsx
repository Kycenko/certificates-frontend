import { AlertTriangle, CheckCircle2, Clock, FileText } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Skeleton } from '@/shared/ui/skeleton'

import { useGetAllCertificatesQuery } from '@/app/graphql/generated'

function CertificatesCardStatistics() {
	const { data, loading } = useGetAllCertificatesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading)
		return (
			<div className='flex items-center justify-center gap-3'>
				<Skeleton className='h-[140px] w-[400px]' />
				<Skeleton className='h-[140px] w-[400px]' />
				<Skeleton className='h-[140px] w-[400px]' />
				<Skeleton className='h-[140px] w-[400px]' />
			</div>
		)

	const certificates = data?.getAllCertificates || []
	const activeCertificates = certificates.filter(
		({ startDate, finishDate }) =>
			new Date(startDate) <= new Date() && new Date(finishDate) >= new Date()
	)

	const expiredCertificates = certificates.filter(
		({ finishDate }) => new Date(finishDate) < new Date()
	)

	const soonExpiringCertificates = certificates.filter(({ finishDate }) => {
		const now = new Date()
		const expiryDate = new Date(finishDate)
		const daysDifference = Math.floor(
			(expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
		)
		return daysDifference > 0 && daysDifference <= 30
	})

	return (
		<div>
			<h1 className='mb-6 text-2xl font-bold'>
				Статистика медицинских справок
			</h1>
			<div className='mb-6 grid grid-cols-1 gap-4 md:grid-cols-4'>
				<Card>
					<CardHeader className='p-4'>
						<div className='flex items-center justify-between'>
							<CardTitle className='text-sm'>Всего справок</CardTitle>
							<FileText className='h-5 w-5 text-blue-600' />
						</div>
						<CardContent className='p-0 text-2xl font-bold'>
							{certificates.length}
						</CardContent>
					</CardHeader>
				</Card>

				<Card>
					<CardHeader className='p-4'>
						<div className='flex items-center justify-between'>
							<CardTitle className='text-sm'>Активные</CardTitle>
							<CheckCircle2 className='h-5 w-5 text-green-600' />
						</div>
						<CardContent className='p-0 text-2xl font-bold'>
							{activeCertificates.length}
						</CardContent>
					</CardHeader>
				</Card>

				<Card>
					<CardHeader className='p-4'>
						<div className='flex items-center justify-between'>
							<CardTitle className='text-sm'>Скоро истекут</CardTitle>
							<Clock className='h-5 w-5 text-amber-600' />
						</div>
						<CardContent className='p-0 text-2xl font-bold'>
							{soonExpiringCertificates.length}
						</CardContent>
					</CardHeader>
				</Card>

				<Card>
					<CardHeader className='p-4'>
						<div className='flex items-center justify-between'>
							<CardTitle className='text-sm'>Просроченные</CardTitle>
							<AlertTriangle className='h-5 w-5 text-red-600' />
						</div>
						<CardContent className='p-0 text-2xl font-bold'>
							{expiredCertificates.length}
						</CardContent>
					</CardHeader>
				</Card>
			</div>
		</div>
	)
}
export default CertificatesCardStatistics
