import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { HealthGroup } from './health-group.types'
import { Button } from '@/shared/ui/button'

export const healthGroupColumns: ColumnDef<HealthGroup>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
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
