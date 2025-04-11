import { Check, ChevronsUpDown } from 'lucide-react'
import React from 'react'

import { Button } from '@/shared/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '@/shared/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'

import { cn } from '../lib/utils'

interface SelectComboboxProps<T> {
	data: T[]
	valueKey: keyof T
	labelKey: keyof T | ((item: T) => string)
	placeholder?: string
	onValueChange?: (value: T[keyof T]) => void
	value?: T[keyof T]
	disabled?: boolean
	className?: string
}

export function SelectCombobox<T>({
	data,
	valueKey,
	labelKey,
	placeholder,
	onValueChange,
	value,
	disabled,
	className
}: SelectComboboxProps<T>) {
	const [open, setOpen] = React.useState(false)

	const selectedItem = data.find(item => item[valueKey] === value)

	const getLabel = (item: T) => {
		if (typeof labelKey === 'function') {
			return labelKey(item)
		}
		return String(item[labelKey])
	}

	return (
		<Popover
			open={open}
			onOpenChange={setOpen}
		>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					role='combobox'
					aria-expanded={open}
					className={cn('w-full justify-between', className)}
				>
					{selectedItem ? getLabel(selectedItem) : placeholder}
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-full p-0'>
				<Command>
					<CommandInput placeholder={placeholder} />
					<CommandList>
						<CommandEmpty>Ничего не найдено.</CommandEmpty>
						<CommandGroup>
							{data.map(item => (
								<CommandItem
									disabled={disabled}
									key={String(item[valueKey])}
									value={getLabel(item)}
									onSelect={() => {
										onValueChange?.(item[valueKey])
										setOpen(false)
									}}
								>
									{getLabel(item)}
									<Check
										className={cn(
											'ml-auto h-4 w-4',
											value === item[valueKey] ? 'opacity-100' : 'opacity-0'
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
