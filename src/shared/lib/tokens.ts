import Cookies from 'js-cookie'

export function getTokens() {
	Cookies.get('accessToken')
	Cookies.get('refreshToken')
}

export function setTokens(tokens: {
	accessToken: string
	refreshToken: string
}) {
	Cookies.set('accessToken', tokens.accessToken, {
		expiresIn: '15m',
		sameSite: 'strict'
	})
	Cookies.set('refreshToken', tokens.refreshToken, {
		expires: 7,
		sameSite: 'strict'
	})
}

export function removeAuthData() {
	Cookies.remove('refreshToken')
	Cookies.remove('accessToken')
	localStorage.removeItem('user')
}
