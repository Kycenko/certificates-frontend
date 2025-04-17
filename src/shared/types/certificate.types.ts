import { HealthGroup, HealthGroupFieldsProps } from './healthGroup.types'
import {
	PhysicalEducation,
	PhysicalEducationFieldsProps
} from './physicalEducation.types'
import { Student } from './student.types'

export type Certificate = {
	id: string
	startDate: Date
	finishDate: Date
	studentId: string
	healthGroupId: string
	physicalEducationId: string
	student: Student
	healthGroup: HealthGroup
	physicalEducation: PhysicalEducation
}

export type CertificateFieldsProps = {
	healthGroups: HealthGroupFieldsProps[]
	physicalEducations: PhysicalEducationFieldsProps[]
}
