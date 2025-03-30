import { Student } from '@modules/student/student.types'

import { HealthGroup } from '../health-group/health-group.types'
import { PhysicalEducation } from '../physical-education/physical-education.types'

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
