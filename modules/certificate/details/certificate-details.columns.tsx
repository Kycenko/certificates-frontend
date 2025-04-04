import { Certificate } from '@modules/certificate/certificate.types'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Button } from '@/shared/ui/button'

export const certificateDetailsColumns: ColumnDef<Certificate>[] = [
	{
		accessorKey: 'startDate',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Дата выдачи
					<ArrowUpDown />
				</Button>
			)
		},

		cell: ({ row }) => {
			return new Date(row.original.startDate).toLocaleDateString()
		}
	},
	{
		accessorKey: 'finishDate',
		header: 'Действует до',
		cell: ({ row }) => {
			return new Date(row.original.finishDate).toLocaleDateString()
		}
	},
	{
		accessorKey: 'status',
		header: 'Статус',
		cell: ({ row }) => {
			const isActive = new Date(row.original.finishDate) > new Date()
			return (
				<span className={isActive ? 'text-green-600' : 'text-red-600'}>
					{isActive ? 'Активен' : 'Истек'}
				</span>
			)
		}
	}
]
