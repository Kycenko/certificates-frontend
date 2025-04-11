import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { isCertificateActive } from '@/shared/lib/isCertificateActive'
import { formatDate } from '@/shared/lib/utils'
import { Certificate } from '@/shared/types/certificate.types'
import { Button } from '@/shared/ui/button'

export const certificateDetailsTableColumns: ColumnDef<Certificate>[] = [
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
			return formatDate(row.original.startDate)
		}
	},
	{
		accessorKey: 'finishDate',
		header: 'Действует до',
		cell: ({ row }) => {
			return formatDate(row.original.finishDate)
		}
	},
	{
		accessorKey: 'status',
		header: 'Статус',
		cell: ({ row }) => {
			return isCertificateActive(row.original.finishDate)
		}
	}
]
