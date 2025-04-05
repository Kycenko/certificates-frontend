'use client'

import dynamic from 'next/dynamic'

const CertificateDetailsComponent = dynamic(
	() => import('@/modules/certificate/details/certificate-details.component')
)

export default function CertificateDetailsPage() {
	return <CertificateDetailsComponent />
}
