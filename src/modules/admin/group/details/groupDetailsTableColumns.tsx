import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { getFullName } from '@/shared/lib/utils'
import { Student } from '@/shared/types/student.types'
import { Button } from '@/shared/ui/button'

export const groupDetailsTableColumns: ColumnDef<Student>[] = [
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
		cell: ({ row }) => {
			const { lastName, firstName, secondName } = row.original
			return getFullName(lastName, firstName, secondName)
		}
	},
	{
		accessorKey: 'certificates',
		header: 'Количество справок',
		cell: ({ row }) => {
			return <div>{row.original.certificates?.length}</div>
		}
	}
]
