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

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '../ui/select'

import { Button } from '@/shared/ui/button'
import { Checkbox } from '@/shared/ui/checkbox'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu'
import { Input } from '@/shared/ui/input'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/shared/ui/table'

interface TableProps {
	data: any[]
	columns: ColumnDef<any>[]
	search: boolean
	searchParam: string
	pagination: boolean
	visibility: boolean
	onRemoveMany: (selectedIds: Set<string>) => void
	onRemove: (id: string) => void
	onInfo: (id: string) => void
	isLoading?: boolean
	filterable?: boolean
}

export function DataTable({
	data,
	columns,
	onRemoveMany,
	onRemove,
	onInfo,
	searchParam,
	search,
	visibility,
	pagination
}: TableProps) {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = useState({})

	const selectColumn: ColumnDef<any> = {
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

	const actionsColumns: ColumnDef<any> = {
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
							<MoreHorizontal />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Действия</DropdownMenuLabel>
						<DropdownMenuSeparator />

						<DropdownMenuItem onClick={() => onInfo(row.original.id)}>
							Подробнее
						</DropdownMenuItem>

						<DropdownMenuItem onClick={() => onRemove(row.original.id)}>
							Удалить
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		}
	}

	const table = useReactTable({
		data,
		columns: [selectColumn, ...columns, actionsColumns],
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
				<div className='flex items-center gap-5'>
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

			<div className='border-t border-b'>
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map(headerGroup => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map(header => (
									<TableHead
										key={header.id}
										className='border-r last:border-r-0'
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
									</TableHead>
								))}
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
										<TableCell
											key={cell.id}
											className='border-r last:border-r-0'
										>
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
									className='h-24 border-r text-center last:border-r-0'
								>
									Ничего не найдено.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			{pagination && (
				<div className='flex items-center justify-between py-4'>
					<div className='text-muted-foreground flex-1 text-sm'>
						{table.getFilteredSelectedRowModel().rows.length} из{' '}
						{table.getFilteredRowModel().rows.length} строк выбрано.
					</div>
					<div className='flex items-center space-x-4'>
						<div className='flex items-center space-x-2'>
							<p className='text-sm font-medium'>Строк на странице:</p>
							<Select
								value={`${table.getState().pagination.pageSize}`}
								onValueChange={value => {
									table.setPageSize(Number(value))
								}}
							>
								<SelectTrigger className='h-8 w-[75px]'>
									<SelectValue
										placeholder={table.getState().pagination.pageSize}
									/>
								</SelectTrigger>
								<SelectContent side='top'>
									{[10, 25, 50, 75, 100].map(pageSize => (
										<SelectItem
											key={pageSize}
											value={`${pageSize}`}
										>
											{pageSize}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
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
				</div>
			)}
		</div>
	)
}
