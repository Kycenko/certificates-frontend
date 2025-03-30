import { ColumnDef } from '@tanstack/react-table'

import { Certificate } from '@modules/certificate/certificate.types'

export const healthGroupDetailsColumns: ColumnDef<Certificate>[] = [
	{
		accessorKey: 'student',
		header: 'Студент',
		cell: ({ row }) => {
			const student = row.original.student
			return `${student.lastName} ${student.firstName}`
		}
	},
	{
		accessorKey: 'startDate',
		header: 'Дата выдачи',
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
