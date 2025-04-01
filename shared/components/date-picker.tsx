'use client'

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'

import {
	Button,
	Calendar,
	Popover,
	PopoverContent,
	PopoverTrigger
} from '../ui'
import { cn } from '../utils'

interface DatePickerProps {
	selected: Date
	onSelect: (date: Date | undefined) => void
}

export function DatePicker({ selected, onSelect }: DatePickerProps) {
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
					<CalendarIcon />
					{selected ? (
						format(selected, 'PPP', { locale: ru })
					) : (
						<span>Выберите дату</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0'>
				<Calendar
					mode='single'
					selected={selected}
					onSelect={onSelect}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
}
