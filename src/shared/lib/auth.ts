import { redirect } from '@tanstack/react-router'
import Cookies from 'js-cookie'

import { AuthContextType } from '@/app/providers/AuthProvider'

import { User, UserRole } from '../types/user.types'

export const checkAuth = async (auth: AuthContextType) => {
	const token = Cookies.get('accessToken')

	if (!token && !auth.isAuthenticated) {
		throw redirect({
			to: '/auth/login',
			search: { redirect: location.href }
		})
	}
	return auth.user!
}

export const checkRole = (user: User | undefined, requiredRole: UserRole) => {
	if (user?.role !== requiredRole) {
		throw redirect({
			to: '/auth/login'
		})
	}
}
