import { DataTable } from '@/shared/components/tables/DataTable'

import {
	useGetAllCuratorsQuery,
	useRemoveCuratorMutation,
	useRemoveManyCuratorsMutation
} from '@/app/graphql/generated'

import { curatorTableColumns } from './curatorTableColumns'

function CuratorsTable() {
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
				columns={curatorTableColumns}
				searchParam={'login'}
				onRemoveMany={handleRemoveMany}
				onRemove={handleRemove}
			/>
		</div>
	)
}

export default CuratorsTable
