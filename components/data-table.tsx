'use client'

import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table'
import { ChevronDown, MoreHorizontal, Search } from 'lucide-react'
import { useCallback, useState } from 'react'

import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from './ui/dropdown-menu'
import { Input } from './ui/input'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from './ui/table'

interface TableProps {
	data: any[]
	columns: ColumnDef<any, any>[]
	search: boolean
	searchParam: string
	pagination: boolean
	visibility: boolean
	onRemoveMany: (selectedIds: Set<string>) => void
}

export function DataTable({
	data,
	columns,
	onRemoveMany,
	searchParam,
	search,
	visibility,
	pagination
}: TableProps) {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = useState({})

	const selectColumn: ColumnDef<any, any> = {
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && 'indeterminate')
				}
				onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
				aria-label='Select all'
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={value => row.toggleSelected(!!value)}
				aria-label='Select row'
			/>
		),
		enableSorting: false,
		enableHiding: false
	}

	const actionsColumn: ColumnDef<any, any> = {
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant='ghost'
							className='h-8 w-8 p-0'
						>
							<span className='sr-only'>Открыть</span>
							<MoreHorizontal />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Опции</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Подробнее</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		}
	}

	const table = useReactTable({
		data,
		columns: [selectColumn, ...columns, actionsColumn],
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection
		}
	})

	const handleDeleteSelected = useCallback(() => {
		const selectedRowIds = new Set(
			table.getSelectedRowModel().rows.map(row => row.original.id)
		)
		onRemoveMany(selectedRowIds)
		setRowSelection({})
	}, [table, onRemoveMany])

	return (
		<div className='w-full'>
			<div className='flex items-center justify-between py-4'>
				<div>
					{search && (
						<div className='relative'>
							<Search className='text-muted-foreground absolute top-2.5 left-2 h-4 w-4' />
							<Input
								placeholder='Поиск...'
								value={
									(table
										.getColumn(`${searchParam}`)
										?.getFilterValue() as string) ?? ''
								}
								onChange={event =>
									table
										.getColumn(`${searchParam}`)
										?.setFilterValue(event.target.value)
								}
								className='max-w-lg pl-8'
							/>
						</div>
					)}
				</div>
				<div className='flex gap-5'>
					<Button
						variant='destructive'
						onClick={handleDeleteSelected}
						disabled={table.getSelectedRowModel().rows.length === 0}
					>
						Удалить выбранные
					</Button>
					{visibility && (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant='outline'
									className='ml-auto'
								>
									Столбцы <ChevronDown />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='end'>
								{table
									.getAllColumns()
									.filter(column => column.getCanHide())
									.map(column => {
										return (
											<DropdownMenuCheckboxItem
												key={column.id}
												className='capitalize'
												checked={column.getIsVisible()}
												onCheckedChange={value =>
													column.toggleVisibility(!!value)
												}
											>
												{column.id}
											</DropdownMenuCheckboxItem>
										)
									})}
							</DropdownMenuContent>
						</DropdownMenu>
					)}
				</div>
			</div>
			<div className='rounded-md border'>
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map(headerGroup => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map(header => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
													)}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows?.map(row => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
								>
									{row.getVisibleCells().map(cell => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className='h-24 text-center'
								>
									Ничего не найдено.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			{pagination && (
				<div className='flex items-center justify-end space-x-2 py-4'>
					<div className='text-muted-foreground flex-1 text-sm'>
						{table.getFilteredSelectedRowModel().rows.length} из{' '}
						{table.getFilteredRowModel().rows.length} строк выбрано.
					</div>
					<div className='space-x-2'>
						<Button
							variant='outline'
							size='sm'
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							Назад
						</Button>
						<Button
							variant='outline'
							size='sm'
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							Далее
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}
