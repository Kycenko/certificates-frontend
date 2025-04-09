export type User = {
	id: string
	login: string
	role: string
}

export const enum UserRole {
	ADMIN = 'ADMIN',
	CURATOR = 'CURATOR'
}
