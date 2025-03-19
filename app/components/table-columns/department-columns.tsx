import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Button } from '../ui/button'

import { Department } from '@/app/types/department.types'

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
		cell: ({ row }) => <div className='lowercase'>{row.getValue('title')}</div>
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
		cell: ({ row }) => (
			<div className='lowercase'>{row.original.courses.length}</div>
		)
	}
]
