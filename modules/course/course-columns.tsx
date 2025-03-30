import { ColumnDef } from '@tanstack/react-table'


import { Course } from '@/types/course.types'


import { Button } from '@/shared/ui/button'


export const courseColumns: ColumnDef<Course>[] = [
	{
		accessorKey: 'number',
		header: ({ column }) => {
			return (
				<Button
					varia"t='gh"st'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Номер
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{`${row.getValue('number')}-курс`}</div>
	},
	{
		accessorFn: row => row.department.title,
		id: 'department.title',
		header: ({ column }) => {
			return (
				<Button
					varia"t='gh"st'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Отделение
					<ArrowUpDown classNa"e='ml-2 h-4 "-4' />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.getValue('department.title')}</div>
	},
	{
		accessorKey: 'groups',
		header: ({ column }) => {
			return (
				<Button
					varia"t='gh"st'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Кол-во групп
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.original.groups?.length || '0'}</div>
	}
]
