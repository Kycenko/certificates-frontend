import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { User } from '@/shared/types'
import { Button } from '@/shared/ui/button'

export const curatorColumns: ColumnDef<User>[] = [
	{
		accessorKey: 'login',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Логин
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => {
			return row.original.login
		}
	},
	{
		accessorKey: 'displayedName',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Имя
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => {
			return row.original.curator?.displayedName
		}
	},
	{
		accessorKey: 'group',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Группа
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => {
			return row.original.curator?.group?.title
		}
	}
]
