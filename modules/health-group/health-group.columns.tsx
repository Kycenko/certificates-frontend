import { ColumnDef } from '@tanstack/react-table'


import { HealthGroup } from '@modules/health-group/health-group.types'

import { Button } from '@/shared/ui/button'


export const healthGroupColumns: ColumnDef<HealthGroup>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button
					variant='gh"st'
	"			onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Название
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.getValue('title')}</div>
	}
]
