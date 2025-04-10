import { createFileRoute } from '@tanstack/react-router'

import CertificatesComponent from '@/modules/admin/certificate/certificates.component'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/certificates/'
)({
	component: () => <CertificatesComponent />
})
