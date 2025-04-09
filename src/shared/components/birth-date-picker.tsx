import { format } from 'date-fns/format'
import { ru } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'

import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Calendar } from '@/shared/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared/ui/select'

interface BirthDatePickerProps {
	selected: Date
	onSelect: (date: Date | undefined) => void
	disabled?: (date: Date) => boolean
}

export function BirthDatePicker({
	selected,
	onSelect,
	disabled
}: BirthDatePickerProps) {
	const currentDate = new Date()
	const currentYear = currentDate.getFullYear()

	const years = Array.from(
		{ length: 101 },
		(_, i) => currentYear - 100 + i
	).reverse()

	const months = [
		{ value: 0, name: 'Январь' },
		{ value: 1, name: 'Февраль' },
		{ value: 2, name: 'Март' },
		{ value: 3, name: 'Апрель' },
		{ value: 4, name: 'Май' },
		{ value: 5, name: 'Июнь' },
		{ value: 6, name: 'Июль' },
		{ value: 7, name: 'Август' },
		{ value: 8, name: 'Сентябрь' },
		{ value: 9, name: 'Октябрь' },
		{ value: 10, name: 'Ноябрь' },
		{ value: 11, name: 'Декабрь' }
	]

	const handleYearChange = (year: number) => {
		const newDate = new Date(selected)
		newDate.setFullYear(year)

		if (newDate > currentDate) {
			newDate.setFullYear(currentYear)
			newDate.setMonth(currentDate.getMonth())
			newDate.setDate(currentDate.getDate())
		}

		onSelect(newDate)
	}

	const handleMonthChange = (month: number) => {
		const newDate = new Date(selected)
		newDate.setMonth(month)

		if (newDate > currentDate) {
			newDate.setMonth(currentDate.getMonth())
		}

		onSelect(newDate)
	}

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'justify-start text-left font-normal',
						!selected && 'text-muted-foreground'
					)}
				>
					<CalendarIcon className='mr-2 h-4 w-4' />
					{selected ? (
						format(selected, 'PPP', { locale: ru })
					) : (
						<span>Выберите дату</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-4'>
				<div className='mb-4 flex justify-center gap-2'>
					<Select
						value={selected.getMonth().toString()}
						onValueChange={value => handleMonthChange(parseInt(value))}
					>
						<SelectTrigger className='w-[120px]'>
							<SelectValue placeholder='Месяц' />
						</SelectTrigger>
						<SelectContent className='h-[350px]'>
							{months.map(month => (
								<SelectItem
									key={month.value}
									value={month.value.toString()}
								>
									{month.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					<Select
						value={selected.getFullYear().toString()}
						onValueChange={value => handleYearChange(parseInt(value))}
					>
						<SelectTrigger className='w-[100px]'>
							<SelectValue placeholder='Год' />
						</SelectTrigger>
						<SelectContent className='h-[350px]'>
							{years.map(year => (
								<SelectItem
									key={year}
									value={year.toString()}
								>
									{year}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<Calendar
					mode='single'
					selected={selected}
					onSelect={onSelect}
					locale={ru}
					fixedWeeks
					initialFocus
					disabled={disabled}
					month={selected}
					components={{
						IconLeft: () => null,
						Caption: () => null,
						IconRight: () => null
					}}
				/>
			</PopoverContent>
		</Popover>
	)
}
