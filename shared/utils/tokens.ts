import Cookies from 'js-cookie'

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

export function removeTokens() {
	Cookies.remove('refreshToken')
	Cookies.remove('accessToken')
}
