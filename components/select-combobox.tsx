'use client'

import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'

import { cn } from '@/lib/utils'

export function SelectCombobox({ data }: { data: any[] }) {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState('')

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
					className='w-[200px] justify-between'
				>
					{value ? data.find(item => item.title === value)?.title : 'Поиск...'}
					<ChevronsUpDown className='ml-2 h-4 w-4 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[200px] p-0'>
				<Command>
					<CommandInput placeholder='Поиск...' />
					<CommandList>
						<CommandEmpty>Ничего не найдено.</CommandEmpty>
						<CommandGroup>
							{data.map(item => (
								<CommandItem
									key={item.id}
									value={item.title}
									onSelect={currentValue => {
										setValue(currentValue === value ? '' : currentValue)
										setOpen(false)
									}}
								>
									{item.title}
									<Check
										className={cn(
											'ml-auto',
											value === item.title ? 'opacity-100' : 'opacity-0'
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
