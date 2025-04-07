import { useState } from 'react'

import { useGetAllStudentsQuery } from '@/app/graphql/generated'

export const useStudentSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [triggerSearch, setTriggerSearch] = useState(false)

	const { data } = useGetAllStudentsQuery({
		variables: { params: { orderBy: 'asc', lastName: searchTerm } },
		skip: !triggerSearch
	})

	const handleSearch = () => {
		if (searchTerm.trim()) setTriggerSearch(true)
	}

	const handleTermChange = (term: string) => {
		setSearchTerm(term)

		if (term === '' || !triggerSearch) setTriggerSearch(false)
	}

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') handleSearch()
	}

	return {
		searchTerm,
		setSearchTerm: handleTermChange,
		handleSearch,
		handleKeyPress,
		students: data?.getAllStudents || [],
		isEmpty: triggerSearch && data?.getAllStudents?.length === 0
	}
}
