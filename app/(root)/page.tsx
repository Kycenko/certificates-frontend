'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
	useGetAllDepartmentsQuery,
	useRemoveManyDepartmentsMutation
} from '../graphql/generated'

import { useSelectCells } from '@/app/hooks/useSelectCells'

export default function Home() {
	const {
		selectedIds,
		setSelectedIds,
		handleSelectCell,
		handleSelectAllCells
	} = useSelectCells()

	const [removeMany] = useRemoveManyDepartmentsMutation()

	const handleRemoveMany = async () => {
		await removeMany({ variables: { ids: selectedIds } })
		setSelectedIds([])
	}

	const { data } = useGetAllDepartmentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	return (
		<div>
			<Button
				disabled={selectedIds.length === 0}
				onClick={handleRemoveMany}
			>
				Delete
			</Button>
			<table>
				<thead>
					<tr>
						<th>
							<Input
								type='checkbox'
								checked={selectedIds.length === data?.getAllDepartments.length}
								onChange={e => handleSelectAllCells(e, data?.getAllDepartments)}
							/>
						</th>
						<th>Title</th>
						<th>Actions</th>
					</tr>
				</thead>

				<tbody>
					{data?.getAllDepartments.map(department => (
						<tr key={department.id}>
							<td>
								<Input
									type='checkbox'
									value={department.id}
									checked={selectedIds.includes(department.id)}
									onChange={e => handleSelectCell(e, department.id)}
								/>
							</td>
							<td>{department.title}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
