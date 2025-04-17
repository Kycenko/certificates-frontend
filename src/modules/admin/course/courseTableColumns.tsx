import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Course } from '@/shared/types/course.types'
import { Button } from '@/shared/ui/button'

export const courseTableColumns: ColumnDef<Course>[] = [
	{
		accessorKey: 'number',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Номер курса
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{`${row.getValue('number')}-й`}</div>
	},
	{
		accessorFn: row => row.department.title,
		id: 'department.title',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Название отделения
					<ArrowUpDown className='"-4 ml-2 h-4' />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.getValue('department.title')}</div>
	}
]
