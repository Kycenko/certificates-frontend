import { CalendarCheckIcon, CalendarIcon, CheckIcon, XIcon } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

function LandingInfoCards() {
	return (
		<Card className='bg-card border shadow-sm'>
			<CardHeader>
				<CardTitle className='flex items-center gap-2 text-xl'>
					<CalendarCheckIcon className='h-5 w-5 text-green-600' />
					<span>Информация для студентов</span>
				</CardTitle>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='flex items-start gap-3'>
					<div className='mt-1 flex-shrink-0'>
						<div className='flex h-5 w-5 items-center justify-center rounded-full bg-green-100'>
							<CheckIcon className='h-3 w-3 text-green-600' />
						</div>
					</div>
					<p>
						Все студенты обязаны проходить медосмотр{' '}
						<strong>1 раз в год</strong>
					</p>
				</div>
				<div className='flex items-start gap-3'>
					<div className='mt-1 flex-shrink-0'>
						<div className='flex h-5 w-5 items-center justify-center rounded-full bg-red-100'>
							<XIcon className='h-3 w-3 text-red-600' />
						</div>
					</div>
					<p>
						Допуск к занятиям по физкультуре запрещен при просрочке медицинской
						справки
					</p>
				</div>
				<div className='flex items-start gap-3'>
					<div className='mt-1 flex-shrink-0'>
						<div className='flex h-5 w-5 items-center justify-center rounded-full bg-blue-100'>
							<CalendarIcon className='h-3 w-3 text-blue-600' />
						</div>
					</div>
					<p>Данные обновляются медсестрой в течение трех рабочих дней</p>
				</div>
			</CardContent>
		</Card>
	)
}

export default LandingInfoCards
