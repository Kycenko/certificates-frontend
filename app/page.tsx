'use client'

import { useGetAllDepartmentsQuery } from './graphql/generated'

export default function Home() {
	const { data } = useGetAllDepartmentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	return <div className=''>Home</div>
}
