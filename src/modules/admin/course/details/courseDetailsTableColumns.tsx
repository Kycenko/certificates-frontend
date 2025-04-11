import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Group } from '@/shared/types/group.types'
import { Button } from '@/shared/ui/button'

export const courseDetailsTableColumns: ColumnDef<Group>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Название
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.original.title}</div>
	},
	{
		accessorKey: 'students',
		header: 'Количество студентов',
		cell: ({ row }) => {
			return <div>{row.original.students?.length}</div>
		}
	}
]
