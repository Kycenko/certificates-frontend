import {
	ColumnDef,
	SortingState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table'
import { useState } from 'react'

import TableSearch from '@/shared/components/tables/table-search'
import { Student } from '@/shared/types'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/shared/ui/table'

interface TableProps {
	data: Student[]
	columns: ColumnDef<Student>[]
}

function CuratorGroupTable({ data, columns }: TableProps) {
	const [sorting, setSorting] = useState<SortingState>([])

	const filterColumn = 'lastName'

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting
		}
	})

	const rows = table.getRowModel().rows

	return (
		<div className='w-full space-y-4'>
			<div className='flex items-center justify-between'>
				<TableSearch
					table={table}
					searchParam={filterColumn}
					placeholder='Введите фамилию...'
				/>
			</div>

			<div className='rounded-md border'>
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map(headerGroup => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map(header => (
									<TableHead
										key={header.id}
										className='text-muted-foreground text-sm font-medium'
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
						{rows.length > 0 ? (
							rows.map(row => (
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
		</div>
	)
}

export default CuratorGroupTable
