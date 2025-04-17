import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState
} from 'react'

import { User } from '@/shared/types/user.types'

export type AuthContextType = {
	user: User | null
	setUser: (user: User | null) => void
	isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const getLocalStorageUser = () => {
		const user = localStorage.getItem('user')
		return user ? JSON.parse(user) : null
	}

	const [user, setUser] = useState<User | null>(getLocalStorageUser())

	useEffect(() => {
		if (user) localStorage.setItem('user', JSON.stringify(user))
	})

	return (
		<AuthContext.Provider value={{ user, setUser, isAuthenticated: !!user }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
