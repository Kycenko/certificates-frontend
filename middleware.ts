import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
	const accessToken = request.cookies.get('accessToken')?.value

	if (!accessToken && !request.nextUrl.pathname.startsWith('/auth'))
		return NextResponse.redirect(new URL('/auth/login', request.url))
	if (accessToken && request.nextUrl.pathname.startsWith('/auth'))
		return NextResponse.redirect(new URL('/', request.url))

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
