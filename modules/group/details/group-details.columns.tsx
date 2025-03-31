import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Student } from '@/modules/student/student.types'
import { Button } from '@/shared/ui/button'

export const groupDetailsColumns: ColumnDef<Student>[] = [
	{
		accessorKey: 'student',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					ФИО студента
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div>
				{row.original.lastName} {row.original.firstName}
			</div>
		)
	},
	{
		accessorKey: 'certificates',
		header: 'Количество справок',
		cell: ({ row }) => {
			return <div>{row.original.certificates?.length}</div>
		}
	}
]
