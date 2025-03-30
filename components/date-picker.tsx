'use client'

import { format, parse } from 'date-fns'
import { ru } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { ChangeEvent, useState } from 'react'

import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'

import { Button } from './ui/button'

interface DatePickerProps {
	label: string
	selected: Date | undefined
	onSelect: (date: Date | undefined) => void
	disabled?: boolean
}

export function DatePicker({
	label,
	selected,
	onSelect,
	disabled
}: DatePickerProps) {
	const [inputValue, setInputValue] = useState<string>('')

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setInputValue(e.target.value)

		const parsedDate = parse(value, 'dd.MM.yyyy', new Date())

		if (parsedDate.toString() !== 'Invalid Date') onSelect(parsedDate)
		else onSelect(undefined)
	}

	const handleCalendarSelect = (date: Date | undefined) => {
		if (date) {
			setInputValue(format(date, 'dd.MM.yyyy'))
			onSelect(date)
		}
	}

	return (
		<Popover>
			<div className='relative'>
				<Input
					placeholder={label}
					value={inputValue}
					onChange={handleInputChange}
					className='pl-10'
				/>
				<PopoverTrigger asChild>
					<Button
						variant='ghost'
						size='icon'
						className='absolute top-0 left-0 h-full px-3'
					>
						<CalendarIcon className='h-4 w-4' />
					</Button>
				</PopoverTrigger>
			</div>
			<PopoverContent className='w-auto p-0'>
				<Calendar
					mode='single'
					selected={selected}
					onSelect={handleCalendarSelect}
					disabled={disabled}
					locale={ru}
					fixedWeeks
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
}
