import { createFileRoute } from '@tanstack/react-router'

import CertificatesComponent from '@/modules/admin/certificate/CertificatesComponent'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/certificates/'
)({
	component: () => <CertificatesComponent />
})
