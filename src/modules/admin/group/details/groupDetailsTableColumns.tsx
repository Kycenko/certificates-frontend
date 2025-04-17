import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Student } from '@/shared/types/student.types'
import { Button } from '@/shared/ui/button'

export const groupDetailsTableColumns: ColumnDef<Student>[] = [
	{
		accessorKey: 'lastName',

		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Фамилия
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <span>{row.original.lastName}</span>
	},
	{
		accessorKey: 'firstName',

		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Имя
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <span>{row.original.firstName}</span>
	},
	{
		accessorKey: 'secondName',

		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Отчество
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <span>{row.original.secondName || '-'}</span>
	},
	{
		accessorKey: 'certificates',
		header: 'Количество справок',
		cell: ({ row }) => {
			return <div>{row.original.certificates?.length}</div>
		}
	}
]
