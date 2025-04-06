export type HealthGroup = {
	id: string
	title: string
	certificates?: Certificate[]
}

export type HealthGroupFieldsProps = Omit<HealthGroup, 'certificates'>
