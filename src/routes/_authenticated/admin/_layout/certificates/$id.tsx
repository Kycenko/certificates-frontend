import { createFileRoute } from '@tanstack/react-router'

import CertificateDetailsComponent from '@/modules/admin/certificate/details/CertificateDetailsComponent'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/certificates/$id'
)({
	component: () => <CertificateDetailsComponent />
})
