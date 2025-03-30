import { Certificate } from '@modules/certificate/certificate.types'
import { Button } from '@shared/ui/button'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ArrowUpDown } from 'lucide-react'

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
					ФИО
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div>
				{row.original.student.lastName} {row.original.student.firstName}{' '}
				{row.original.student.secondName}
			</div>
		)
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
		cell: ({ row }) => (
			<div>{format(row.getValue('startDate'), 'dd.MM.yyyy')}</div>
		)
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
		cell: ({ row }) => (
			<div>{format(row.getValue('finishDate'), 'dd.MM.yyyy')}</div>
		)
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
