'use client'

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'

import { cn } from '@/lib/utils'

interface DatePickerProps {
	label: string
	selected: Date
	onSelect: (date: any) => void
}

export function DatePicker({ label, selected, onSelect }: DatePickerProps) {
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
						<span>{label}</span>
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
