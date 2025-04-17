import { Table } from '@tanstack/react-table'
import { Search } from 'lucide-react'

import { Input } from '@/shared/ui/input'

interface TableSearchProps {
	table: Table<any>
	searchParam: string
	placeholder?: string
}

function TableSearch({ table, searchParam, placeholder }: TableSearchProps) {
	return (
		<div className='relative'>
			<Search className='text-muted-foreground absolute top-2.5 left-2 h-4 w-4' />
			<Input
				placeholder={placeholder ?? 'Поиск...'}
				value={(table.getColumn(searchParam)?.getFilterValue() as string) ?? ''}
				onChange={event =>
					table.getColumn(searchParam)?.setFilterValue(event.target.value)
				}
				className='max-w-md pl-8'
			/>
		</div>
	)
}

export default TableSearch
