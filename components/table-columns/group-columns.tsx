import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Group } from '@/types/group.types'

import { Button } from '../ui/button'

export const groupColumns: ColumnDef<Group>[] = [
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
		accessorKey: 'course',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Курс
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className='lowercase'>{`${row.original.course?.number}-й курс`}</div>
		)
	},
	{
		accessorKey: 'department',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Отделение
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className='lowercase'>{row.original.course.department?.title}</div>
		)
	}
]
