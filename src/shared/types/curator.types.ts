import { Group } from './group.types'

export type Curator = {
	id: string
	userId: string
	groupId: string
	fullName: string
	group: Group
}
