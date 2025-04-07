import { useState } from 'react'

import { useGetAllStudentsQuery } from '@/app/graphql/generated'
import { useDebounce } from '@/shared/hooks/useDebounce'

export const useStudentSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const debouncedSearchTerm = useDebounce(searchTerm, 500)

	const [triggerSearch, setTriggerSearch] = useState(false)

	const { data, loading } = useGetAllStudentsQuery({
		variables: { params: { orderBy: 'asc', lastName: debouncedSearchTerm } },
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
		students: { data: data?.getAllStudents || [], loading },
		isEmpty: triggerSearch && data?.getAllStudents?.length === 0
	}
}
