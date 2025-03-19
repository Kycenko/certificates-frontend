import { AlertTriangle, CheckCircle2, Clock, FileText } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function CardStats() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>
			<Card className='bg-blue-50 border-blue-200'>
				<CardHeader className='p-4'>
					<div className='flex items-center justify-between'>
						<CardTitle className='text-sm'>Всего справок</CardTitle>
						<FileText className='w-5 h-5 text-blue-600' />
					</div>
					<CardContent className='p-0 text-2xl font-bold'>1,234</CardContent>
				</CardHeader>
			</Card>

			<Card className='bg-green-50 border-green-200'>
				<CardHeader className='p-4'>
					<div className='flex items-center justify-between'>
						<CardTitle className='text-sm'>Активные</CardTitle>
						<CheckCircle2 className='w-5 h-5 text-green-600' />
					</div>
					<CardContent className='p-0 text-2xl font-bold'>892</CardContent>
				</CardHeader>
			</Card>

			<Card className='bg-amber-50 border-amber-200'>
				<CardHeader className='p-4'>
					<div className='flex items-center justify-between'>
						<CardTitle className='text-sm'>На проверке</CardTitle>
						<Clock className='w-5 h-5 text-amber-600' />
					</div>
					<CardContent className='p-0 text-2xl font-bold'>217</CardContent>
				</CardHeader>
			</Card>

			<Card className='bg-red-50 border-red-200'>
				<CardHeader className='p-4'>
					<div className='flex items-center justify-between'>
						<CardTitle className='text-sm'>Просроченные</CardTitle>
						<AlertTriangle className='w-5 h-5 text-red-600' />
					</div>
					<CardContent className='p-0 text-2xl font-bold'>125</CardContent>
				</CardHeader>
			</Card>
		</div>
	)
}
