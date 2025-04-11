import { toast } from 'sonner'

import { DataDialog } from '@/shared/components/DataDialog'

import {
	useGetAllGroupsLazyQuery,
	useRegisterCuratorMutation
} from '@/app/graphql/generated'

import CuratorFields from './CuratorFields'
import { CuratorSchema, curatorSchema } from './curator.schema'

function CreateCuratorForm() {
	const [fetchGroups, { data: groups }] = useGetAllGroupsLazyQuery({
		variables: { params: { orderBy: 'asc' } }
	})
	const [register] = useRegisterCuratorMutation()

	async function handleCreate(data: CuratorSchema) {
		await register({
			variables: {
				data
			},
			refetchQueries: ['getAllCurators'],
			onCompleted: () => {
				toast.success('Куратор успешно добавлен')
			}
		})
	}

	return (
		<DataDialog
			onOpenChange={fetchGroups}
			schema={curatorSchema}
			defaultValues={{
				login: '',
				password: '',
				displayedName: '',
				groupId: ''
			}}
			title='Добавление куратора группы'
			fields={<CuratorFields groups={groups?.getAllGroups || []} />}
			onSubmit={handleCreate}
		/>
	)
}

export default CreateCuratorForm
