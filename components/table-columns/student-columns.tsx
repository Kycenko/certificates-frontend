import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ArrowUpDown } from 'lucide-react'

import { Student } from '@/types/student.types'

import { Button } from '../ui/button'

export const studentColumns: ColumnDef<Student>[] = [
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
		accessorKey: 'secondName',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Отчество
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.getValue('secondName') || 'Не указано'}</div>
	},
	{
		accessorKey: 'birthDate',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Дата рождения
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div>{format(row.getValue('birthDate'), 'dd.MM.yyyy')}</div>
		)
	},
	{
		accessorKey: 'isExpelled',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Отчислен?
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.getValue('isExpelled') ? 'Да' : 'Нет'}</div>
	},
	{
		accessorKey: 'group',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
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
					variant='ghost'
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
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Отделение
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div>{row.original.group?.course?.department?.title || 'Не указано'}</div>
		)
	},
	{
		accessorKey: 'certificates',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Кол-во справок
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => <div>{row.original.certificates?.length || '0'}</div>
	}
]
