import { useTableSettingsStore } from '@/store'

import { DataTable } from '@/shared/components'

import {
	useGetAllCuratorsQuery,
	useRemoveCuratorMutation,
	useRemoveManyCuratorsMutation
} from '@/app/graphql/generated'

import { curatorColumns } from './curator.columns'

function CuratorsTable() {
	const { search, columnVisibility, pagination } = useTableSettingsStore()
	const { data, loading } = useGetAllCuratorsQuery()

	const [remove] = useRemoveCuratorMutation()
	const [removeMany] = useRemoveManyCuratorsMutation()

	async function handleRemove(id: string) {
		remove({ variables: { id } })
	}

	async function handleRemoveMany(ids: Set<string>) {
		removeMany({ variables: { ids: Array.from(ids) } })
	}

	return (
		<div>
			<DataTable
				isLoading={loading}
				data={data?.getAllCurators || []}
				columns={curatorColumns}
				search={search}
				searchParam={'login'}
				pagination={pagination}
				visibility={columnVisibility}
				onRemoveMany={handleRemoveMany}
				onRemove={handleRemove}
			/>
		</div>
	)
}

export default CuratorsTable
