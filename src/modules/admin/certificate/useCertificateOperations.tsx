import { useEntityOperations } from '@/shared/hooks/useEntityOperations'

import {
	useCreateCertificateMutation,
	useGetAllHealthGroupsLazyQuery,
	useGetAllPhysicalEducationsLazyQuery,
	useGetAllStudentsLazyQuery,
	useGetCertificateByIdQuery,
	useRemoveCertificateMutation,
	useRemoveManyCertificatesMutation,
	useUpdateCertificateMutation
} from '@/app/graphql/generated'

import { CertificateSchema } from './certificate.schema'

export function useCertificateOperations(id?: string) {
	const certificates = useEntityOperations<CertificateSchema>({
		useGetByIdQuery: useGetCertificateByIdQuery,
		useCreateMutation: useCreateCertificateMutation,
		useUpdateMutation: useUpdateCertificateMutation,
		useRemoveMutation: useRemoveCertificateMutation,
		useRemoveManyMutation: useRemoveManyCertificatesMutation,
		refetchKeys: ['getAllCertificates'],
		infoHref: '/admin/certificates',
		id
	})

	const [fetchStudents, { data: students, loading: loadingStudents }] =
		useGetAllStudentsLazyQuery({
			variables: { params: { orderBy: 'asc' } }
		})

	const [
		fetchPhysicalEducations,
		{ data: physicalEducations, loading: loadingPhysicalEducations }
	] = useGetAllPhysicalEducationsLazyQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const [
		fetchHealthGroups,
		{ data: healthGroups, loading: loadingHealthGroups }
	] = useGetAllHealthGroupsLazyQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	return {
		...certificates,
		students: { data: students, loading: loadingStudents, fetchStudents },
		physicalEducations: {
			data: physicalEducations,
			loading: loadingPhysicalEducations,
			fetchPhysicalEducations
		},
		healthGroups: {
			data: healthGroups,
			loading: loadingHealthGroups,
			fetchHealthGroups
		}
	}
}
