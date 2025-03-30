'use client'

import { AlertTriangle, CheckCircle2, Clock, FileText } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { useGetAllCertificatesQuery } from '@/app/graphql/generated'

export default function CardStats() {
	const { data, loading } = useGetAllCertificatesQuery({
		variables: { params: { orderBy: 'asc' } }
	})
	const dataLength = data?.getAllCertificates?.length

	return (
		<div className='mb-6 grid grid-cols-1 gap-4 md:grid-cols-4'>
			<Card className='border-blue-200 bg-blue-50'>
				<CardHeader className='p-4'>
					<div className='flex items-center justify-between'>
						<CardTitle className='text-sm'>Всего справок</CardTitle>
						<FileText className='h-5 w-5 text-blue-600' />
					</div>
					<CardContent className='p-0 text-2xl font-bold'>
						{dataLength}
					</CardContent>
				</CardHeader>
			</Card>

			<Card className='border-green-200 bg-green-50'>
				<CardHeader className='p-4'>
					<div className='flex items-center justify-between'>
						<CardTitle className='text-sm'>Активные</CardTitle>
						<CheckCircle2 className='h-5 w-5 text-green-600' />
					</div>
					<CardContent className='p-0 text-2xl font-bold'>892</CardContent>
				</CardHeader>
			</Card>

			<Card className='border-amber-200 bg-amber-50'>
				<CardHeader className='p-4'>
					<div className='flex items-center justify-between'>
						<CardTitle className='text-sm'>На проверке</CardTitle>
						<Clock className='h-5 w-5 text-amber-600' />
					</div>
					<CardContent className='p-0 text-2xl font-bold'>217</CardContent>
				</CardHeader>
			</Card>

			<Card className='border-red-200 bg-red-50'>
				<CardHeader className='p-4'>
					<div className='flex items-center justify-between'>
						<CardTitle className='text-sm'>Просроченные</CardTitle>
						<AlertTriangle className='h-5 w-5 text-red-600' />
					</div>
					<CardContent className='p-0 text-2xl font-bold'>125</CardContent>
				</CardHeader>
			</Card>
		</div>
	)
}
