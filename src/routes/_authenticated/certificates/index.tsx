import { createFileRoute } from '@tanstack/react-router'

import CertificatesComponent from '@/modules/certificate/certificates.component'

export const Route = createFileRoute('/_authenticated/certificates/')({
	component: () => <CertificatesComponent />
})
