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

import TableSearch from '@/shared/components/tables/TableSearch'
import { Student } from '@/shared/types'

interface TableProps {
	data: any[]
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

			<div className='relative max-h-[505px] overflow-auto rounded-md border'>
				<table className='w-full border-collapse'>
					<thead className='bg-background sticky top-0 z-10'>
						{table.getHeaderGroups().map(headerGroup => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map(header => (
									<th
										key={header.id}
										className='text-muted-foreground border-b px-4 py-2 text-left text-sm font-medium'
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{rows.length > 0 ? (
							rows.map(row => (
								<tr
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
									className='border-b'
								>
									{row.getVisibleCells().map(cell => (
										<td
											key={cell.id}
											className='px-4 py-2'
										>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</td>
									))}
								</tr>
							))
						) : (
							<tr>
								<td
									colSpan={columns.length}
									className='text-muted-foreground h-24 text-center'
								>
									Ничего не найдено.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default CuratorGroupTable
