import { useVirtualizer } from '@tanstack/react-virtual'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'

import { Button } from '@/shared/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem
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
}

export function SelectCombobox<T>({
	data,
	valueKey,
	labelKey,
	placeholder = 'Выберите...',
	onValueChange,
	value,
	disabled
}: SelectComboboxProps<T>) {
	const [open, setOpen] = useState(false)
	const [search, setSearch] = useState('')
	const listRef = useRef<HTMLDivElement>(null)

	const selectedItem = useMemo(
		() => data.find(item => item[valueKey] === value),
		[data, value, valueKey]
	)

	const getLabel = (item: T) =>
		typeof labelKey === 'function' ? labelKey(item) : String(item[labelKey])

	const filteredData = useMemo(() => {
		if (!search.trim()) return data
		return data.filter(item =>
			getLabel(item).toLowerCase().includes(search.toLowerCase())
		)
	}, [data, search])

	const rowVirtualizer = useVirtualizer({
		count: filteredData.length,
		getScrollElement: () => listRef.current,
		estimateSize: () => 40,
		overscan: 5
	})

	useEffect(() => {
		if (open) {
			setSearch('')
			setTimeout(() => rowVirtualizer.measure(), 0)
		}
	}, [open])

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
					className='w-full justify-between truncate'
					disabled={disabled}
				>
					<span className='truncate'>
						{selectedItem ? getLabel(selectedItem) : placeholder}
					</span>
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>

			<PopoverContent className='min-w-[320px] p-0'>
				<Command shouldFilter={false}>
					<div className='border-b px-3 py-2'>
						<CommandInput
							placeholder={placeholder}
							value={search}
							onValueChange={setSearch}
						/>
					</div>

					<CommandEmpty className='text-muted-foreground py-4 text-center text-sm'>
						{search.trim() ? 'Ничего не найдено' : 'Нет доступных вариантов'}
					</CommandEmpty>

					<CommandGroup className='p-0'>
						<div
							ref={listRef}
							className='max-h-[200px] overflow-auto'
						>
							<div
								style={{
									height: `${rowVirtualizer.getTotalSize()}px`,
									position: 'relative'
								}}
							>
								{rowVirtualizer.getVirtualItems().map(virtualRow => {
									const item = filteredData[virtualRow.index]
									return (
										<div
											key={String(item[valueKey])}
											style={{
												position: 'absolute',
												top: 0,
												left: 0,
												width: '100%',
												height: `${virtualRow.size}px`,
												transform: `translateY(${virtualRow.start}px)`
											}}
										>
											<CommandItem
												value={getLabel(item)}
												disabled={disabled}
												onSelect={() => {
													onValueChange?.(item[valueKey])
													setOpen(false)
												}}
												className='flex cursor-pointer items-center gap-2 px-3 py-2 text-sm'
											>
												{getLabel(item)}
												<Check
													className={cn(
														'text-primary ml-auto h-4 w-4 transition-opacity',
														value === item[valueKey]
															? 'opacity-100'
															: 'opacity-0'
													)}
												/>
											</CommandItem>
										</div>
									)
								})}
							</div>
						</div>
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
