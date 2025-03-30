import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Department } from './department.types'
import { Button } from '@/shared/ui/button'

export const departmentColumns: ColumnDef<Department>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Название
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.getValue('title')}</div>
	},
	{
		accessorKey: 'courses',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Кол-во курсов
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.original.courses.length}</div>
	}
]
