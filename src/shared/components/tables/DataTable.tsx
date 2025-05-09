import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table'
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	Edit,
	InfoIcon,
	MoreHorizontal,
	Trash2Icon,
	TrashIcon
} from 'lucide-react'
import React, {
	useCallback,
	useDeferredValue,
	useEffect,
	useState
} from 'react'

import { Button } from '@/shared/ui/button'
import { Checkbox } from '@/shared/ui/checkbox'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared/ui/select'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/shared/ui/table'

import TableSearch from './TableSearch'

interface TableProps {
	data: any[]
	columns: ColumnDef<any>[]
	searchParam: string
	onRemoveMany: (selectedIds: Set<string>) => void
	onRemove: (id: string) => void
	onInfo?: (id: string) => void
	onEdit?: (id: string) => void
	isLoading?: boolean
}

export function DataTable({
	data,
	columns,
	onRemoveMany,
	onRemove,
	onInfo,
	onEdit,
	searchParam
}: TableProps) {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
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
						{onInfo && (
							<DropdownMenuItem onClick={() => onInfo(row.original.id)}>
								<InfoIcon className='h-4 w-4' />
								Подробнее
							</DropdownMenuItem>
						)}
						{onEdit && (
							<DropdownMenuItem onClick={() => onEdit(row.original.id)}>
								<Edit className='h-4 w-4' />
								Редактировать
							</DropdownMenuItem>
						)}
						<DropdownMenuItem onClick={() => onRemove(row.original.id)}>
							<TrashIcon className='h-4 w-4' />
							Удалить
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		}
	}
	const deferredData = useDeferredValue(data)

	const table = useReactTable({
		data: deferredData,
		columns: [selectColumn, ...columns, actionsColumns],
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
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

	const MemoizedTableCell = React.memo(TableCell)
	const MemoizedTableRow = React.memo(TableRow)

	const [pageSize, setPageSize] = useState(10)
	const deferredPageSize = useDeferredValue(pageSize)

	useEffect(() => {
		table.setPageSize(deferredPageSize)
	}, [deferredPageSize, table])

	return (
		<div className='w-full'>
			<div className='flex flex-col items-center justify-between py-4 sm:flex-row'>
				<div className='flex items-center gap-5'>
					<TableSearch
						table={table}
						searchParam={searchParam}
					/>
				</div>

				<div className='mt-4 flex items-center gap-4 sm:mt-0'>
					<Button
						variant='destructive'
						onClick={handleDeleteSelected}
						disabled={table.getSelectedRowModel().rows.length === 0}
						className='flex items-center gap-2'
					>
						<Trash2Icon className='h-4 w-4' />
						Удалить выбранные
					</Button>
				</div>
			</div>

			<div className='max-h-[535px] overflow-y-auto border-t border-b'>
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map(headerGroup => (
							<MemoizedTableRow key={headerGroup.id}>
								{headerGroup.headers.map(header => (
									<TableHead
										key={header.id}
										className='border-r text-left last:border-r-0'
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
									</TableHead>
								))}
							</MemoizedTableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows?.map(row => (
								<MemoizedTableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
								>
									{row.getVisibleCells().map(cell => (
										<MemoizedTableCell
											key={cell.id}
											className='border-r text-left font-medium last:border-r-0'
										>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</MemoizedTableCell>
									))}
								</MemoizedTableRow>
							))
						) : (
							<MemoizedTableRow>
								<MemoizedTableCell
									colSpan={table.getAllColumns().length}
									className='h-24 border-r text-center font-medium last:border-r-0'
								>
									Ничего не найдено.
								</MemoizedTableCell>
							</MemoizedTableRow>
						)}
					</TableBody>
				</Table>
			</div>

			<div className='flex items-center justify-between py-4'>
				<div className='text-muted-foreground flex-1 text-sm'>
					{table.getFilteredSelectedRowModel().rows.length} из{' '}
					{table.getFilteredRowModel().rows.length} строк выбрано.
				</div>
				<div className='flex items-center space-x-4'>
					<div className='flex items-center space-x-2'>
						<p className='text-sm font-medium'>Строк на странице:</p>
						<Select
							value={pageSize.toString()}
							onValueChange={value => {
								setPageSize(Number(value))
							}}
						>
							<SelectTrigger className='h-8 w-[75px]'>
								<SelectValue placeholder={pageSize.toString()} />
							</SelectTrigger>
							<SelectContent side='top'>
								{[10, 25, 50, 75, 100].map(size => (
									<SelectItem
										key={size}
										value={size.toString()}
									>
										{size}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className='flex space-x-2'>
						<Button
							title='Предыдущая страница'
							variant='outline'
							size='sm'
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
							className='flex items-center'
						>
							<ChevronLeftIcon className='h-4 w-4' />
						</Button>
						<Button
							title='Следующая страница'
							variant='outline'
							size='sm'
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
							className='flex items-center'
						>
							<ChevronRightIcon className='h-4 w-4' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
