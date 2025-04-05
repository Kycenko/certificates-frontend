'use client'

import dynamic from 'next/dynamic'

const CertificatesComponent = dynamic(
	() => import('@/modules/certificate/certificates.component')
)

export default function CertificatesPage() {
	return <CertificatesComponent />
}
