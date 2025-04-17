import { Curator } from './curator.types'

export type User = {
	id: string
	login: string
	role: string
	curator?: Curator
}

export const enum UserRole {
	ADMIN = 'ADMIN',
	CURATOR = 'CURATOR'
}
