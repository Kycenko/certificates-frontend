import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { isCertificateActive } from '@/shared/lib'
import { formatDate } from '@/shared/lib/utils'
import { Student } from '@/shared/types'
import { Button } from '@/shared/ui/button'

export const curatorGroupTableColumns: ColumnDef<Student>[] = [
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

		cell: ({ row }) => <div>{row.original.lastName}</div>
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

		cell: ({ row }) => <div>{row.original.firstName}</div>
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

		cell: ({ row }) => <div>{row.original.secondName || '-'}</div>
	},
	{
		accessorKey: 'startDate',
		header: () => <span> Дата выдачи</span>,

		cell: ({ row }) => {
			const certs = row.original.certificates
			return formatDate(certs[0]?.startDate) || '-'
		}
	},
	{
		accessorKey: 'finishDate',
		header: () => <span> Дата окончания</span>,
		cell: ({ row }) => {
			const certs = row.original.certificates
			return formatDate(certs[0]?.finishDate) || '-'
		}
	},

	{
		accessorKey: 'status',
		header: () => <span> Статус</span>,
		cell: ({ row }) => {
			const certs = row.original.certificates
			return isCertificateActive(certs[0]?.finishDate)
		}
	}
]
