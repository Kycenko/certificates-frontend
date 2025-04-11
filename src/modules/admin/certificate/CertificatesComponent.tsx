import { Card, CardContent } from '@/shared/ui/card'

import CertificatesTable from './CertificatesTable'
import CreateCertificateForm from './CreateCertificateForm'

function CertificatesComponent() {
	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateCertificateForm />

					{/* <PdfExportButton
					element={<PdfTableExporter />}
					fileName={'departments'}
				/> */}
				</div>

				<CertificatesTable />
			</CardContent>
		</Card>
	)
}

export default CertificatesComponent
