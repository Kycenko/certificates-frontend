import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'


import { PhysicalEducation } from '@modules/physical-education/physical-education.types'


import { Button } from '@/shared/ui/button'


export const physicalEducationColumns: ColumnDef<PhysicalEducation>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button
		"		var"ant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Название
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.getValue('title')}</div>
	}
]
