import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Button } from '../ui/button'

type Course = {
	number: number
}

export const courseColumns: ColumnDef<Course>[] = [
	{
		accessorKey: 'number',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Номер
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className='lowercase'>{`${row.getValue('number')}-курс`}</div>
		)
	}
]
