import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Course } from '@/shared/types/course.types'
import { Button } from '@/shared/ui/button'

export const departmentDetailsColumns: ColumnDef<Course>[] = [
	{
		accessorKey: 'number',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Номер курса
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.original.number}-й</div>
	},
	{
		accessorKey: 'courses',
		header: 'Количество групп',
		cell: ({ row }) => {
			return <div>{row.original.groups?.length}</div>
		}
	}
]
