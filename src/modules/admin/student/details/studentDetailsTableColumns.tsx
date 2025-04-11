import { ColumnDef } from '@tanstack/react-table'

import { isCertificateActive } from '@/shared/lib/isCertificateActive'
import { formatDate } from '@/shared/lib/utils'
import { Certificate } from '@/shared/types/certificate.types'

export const studentDetailsTableColumns: ColumnDef<Certificate>[] = [
	{
		accessorKey: 'startDate',
		header: 'Дата выдачи',

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
		accessorKey: 'healthGroup',
		header: 'Группа здоровья',

		cell: ({ row }) => {
			return row.original.healthGroup.title
		}
	},
	{
		accessorKey: 'physicalEducation',
		header: 'Группа по физкультуре',

		cell: ({ row }) => {
			return row.original.physicalEducation.title
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
