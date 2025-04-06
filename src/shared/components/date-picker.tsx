import { format } from 'date-fns/format'
import { ru } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'

import { cn } from '../lib/utils'
import { Button } from '../ui/button'
import { Calendar } from '../ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

interface DatePickerProps {
	selected: Date
	onSelect: (date: Date | undefined) => void
	disabled?: (date: Date) => boolean
}

export function DatePicker({ selected, onSelect, disabled }: DatePickerProps) {
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
					disabled={disabled}
					locale={ru}
					lang='ru'
					fixedWeeks
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
}
