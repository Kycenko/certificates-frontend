import { type ClassValue, clsx } from 'clsx'
import { format } from 'date-fns/format'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
	if (!date) return
	return format(date, 'dd.MM.yyyy')
}

export function getFullName(
	lastName: string,
	firstName: string,
	secondName?: string
) {
	return `${lastName} ${firstName} ${secondName ? secondName : ''}`
}

export function getShortName(
	lastName: string,
	firstName: string,
	secondName?: string
) {
	return `${lastName} ${firstName[0]}. ${secondName ? `${secondName[0]}.` : ''}`
}
