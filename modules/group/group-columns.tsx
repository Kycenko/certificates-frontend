import { Group } from '@modules/group/group.types'
import { Button } from '@shared/ui/button'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

export const groupColumns: ColumnDef<Group>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
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
		accessorKey: 'course',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Курс
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{`${row.original.course?.number}-й курс`}</div>
	},
	{
		accessorKey: 'department',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Отделение
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.original.course.department?.title}</div>
	},
	{
		accessorKey: 'students',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Кол-во студентов
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.original.students?.length || '0'}</div>
	}
]
