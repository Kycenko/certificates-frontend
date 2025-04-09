import { HealthGroup, HealthGroupFieldsProps } from './health-group.types'
import {
	PhysicalEducation,
	PhysicalEducationFieldsProps
} from './physical-education.types'
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
	students: any[]
	healthGroups: HealthGroupFieldsProps[]
	physicalEducations: PhysicalEducationFieldsProps[]
}
