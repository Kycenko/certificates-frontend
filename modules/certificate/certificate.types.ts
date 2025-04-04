import { Student } from '@modules/student/student.types'

import {
	HealthGroup,
	HealthGroupFieldsProps
} from '../health-group/health-group.types'
import {
	PhysicalEducation,
	PhysicalEducationFieldsProps
} from '../physical-education/physical-education.types'

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
