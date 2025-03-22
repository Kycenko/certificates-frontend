import { HealthGroup } from './health-group.types'
import { PhysicalEducation } from './physical-education.types'
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
