'use client'

import dynamic from 'next/dynamic'
import Head from 'next/head'

const LoginForm = dynamic(() => import('@modules/auth/login-form'))

export default function Login() {
	return (
		<>
			<Head>
				<title>Авторизация</title>
			</Head>
			<LoginForm />
		</>
	)
}
