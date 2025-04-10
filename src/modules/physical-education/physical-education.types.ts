import { Certificate } from '@modules/certificate/certificate.types'

export type PhysicalEducation = {
	id: string
	title: string
	certificates?: Certificate[]
}

export type PhysicalEducationFieldsProps = Omit<
	PhysicalEducation,
	'certificates'
>
