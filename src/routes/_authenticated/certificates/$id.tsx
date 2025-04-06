import { createFileRoute } from '@tanstack/react-router'

import CertificateDetailsComponent from '@/modules/certificate/details/certificate-details.component'

export const Route = createFileRoute('/_authenticated/certificates/$id')({
	component: () => <CertificateDetailsComponent />
})
