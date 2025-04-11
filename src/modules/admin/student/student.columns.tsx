import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { formatDate } from '@/shared/lib/utils'
import { Student } from '@/shared/types/student.types'
import { Badge } from '@/shared/ui'
import { Button } from '@/shared/ui/button'

export const studentColumns: ColumnDef<Student>[] = [
	{
		accessorKey: 'lastName',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Фамилия
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.getValue('lastName')}</div>
	},
	{
		accessorKey: 'firstName',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Имя
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.getValue('firstName')}</div>
	},

	{
		accessorKey: 'secondName',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Отчество
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.getValue('secondName') || '-'}</div>
	},
	{
		accessorKey: 'birthDate',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Дата рождения
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => {
			return formatDate(row.original.birthDate)
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
		cell: ({ row }) => <div>{row.original.group?.title || 'Не указана'}</div>
	},
	{
		accessorKey: 'course',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Курс
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div>
				{row.original.group?.course?.number !== undefined
					? `${row.original.group.course.number}-й курс`
					: 'Не указан'}
			</div>
		)
	},
	{
		accessorKey: 'department',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Отделение
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div>{row.original.group?.course?.department?.title || '-'}</div>
		)
	},
	{
		accessorKey: 'isExpelled',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Отчислен?
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div>
				{row.getValue('isExpelled') ? (
					<Badge
						className='text-red-600'
						variant={'outline'}
					>
						<span>Да</span>
					</Badge>
				) : (
					<Badge
						className='text-green-600'
						variant={'outline'}
					>
						<span>Нет</span>
					</Badge>
				)}
			</div>
		)
	}
]
