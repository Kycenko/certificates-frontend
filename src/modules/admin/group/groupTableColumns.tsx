import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Group } from '@/shared/types/group.types'
import { Button } from '@/shared/ui/button'

export const groupTableColumns: ColumnDef<Group>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Название группы
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.getValue('title')}</div>
	},
	{
		accessorKey: 'course',
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
		cell: ({ row }) => <div>{row.original.course?.number}-й</div>
	},
	{
		accessorKey: 'department',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Название отделения
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.original.course.department?.title}</div>
	}
]
