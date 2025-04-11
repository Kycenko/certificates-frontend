import { AnimatePresence, motion } from 'motion/react'

import { TableSkeleton } from '@/shared/components/skeletons/table-skeleton'
import { DataTable } from '@/shared/components/tables/data-table'

import { useGetAllDepartmentsQuery } from '@/app/graphql/generated'

import { departmentColumns } from './department.columns'
import { useDepartmentOperations } from './useDepartmentOperations'

type Props = {
	isLoading: boolean
	children: React.ReactNode
	skeleton: React.ReactNode
}

const AnimatedContent = ({ isLoading, children, skeleton }: Props) => {
	return (
		<AnimatePresence mode='wait'>
			{isLoading ? (
				<motion.div
					key='skeleton'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					{skeleton}
				</motion.div>
			) : (
				<motion.div
					key='content'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	)
}

function DepartmentsTable() {
	const { handleInfo, handleRemove, handleRemoveMany } =
		useDepartmentOperations()

	const { data, loading } = useGetAllDepartmentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <TableSkeleton />
	return (
		<AnimatedContent
			isLoading={loading}
			skeleton={<TableSkeleton />}
		>
			<DataTable
				isLoading={loading}
				data={data?.getAllDepartments || []}
				columns={departmentColumns}
				searchParam='title'
				onInfo={handleInfo}
				onRemove={handleRemove}
				onRemoveMany={handleRemoveMany}
			/>
		</AnimatedContent>
	)
}

export default DepartmentsTable
