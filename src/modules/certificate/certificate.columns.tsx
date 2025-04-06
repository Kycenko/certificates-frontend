import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Certificate } from './certificate.types'
import { formatDate, getShortName } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'

export const certificateColumns: ColumnDef<Certificate>[] = [
	{
		accessorFn: row => row.student.lastName,
		id: 'student.lastName',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					ФИО Студента
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => {
			const { lastName, firstName, secondName } = row.original.student
			return getShortName(lastName, firstName, secondName)
		}
	},
	{
		accessorKey: 'startDate',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Дата выдачи
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => {
			return formatDate(row.original.startDate)
		}
	},
	{
		accessorKey: 'finishDate',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Дата окончания
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => {
			return formatDate(row.original.finishDate)
		}
	},
	{
		accessorKey: 'healthGroup',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Группа здоровья
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.original.healthGroup.title}</div>
	},
	{
		accessorKey: 'physicalEducation',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Группа по физкультуре
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.original.physicalEducation.title}</div>
	}
]
