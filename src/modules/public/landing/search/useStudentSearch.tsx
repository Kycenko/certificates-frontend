import { useState } from 'react'

import { useGetAllStudentsLazyQuery } from '@/app/graphql/generated'

export const useStudentSearch = () => {
	const [inputValue, setInputValue] = useState('')

	const [fetchStudents, { data, loading }] = useGetAllStudentsLazyQuery()

	const [hasSearched, setHasSearched] = useState(false)

	const handleSearch = () => {
		if (!inputValue.trim()) return
		fetchStudents({
			variables: { params: { orderBy: 'asc', lastName: inputValue.trim() } }
		})
		setHasSearched(true)
	}

	const handleTermChange = (term: string) => {
		setInputValue(term)
		if (term === '') {
			setHasSearched(false)
		}
	}

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleSearch()
		}
	}

	return {
		searchTerm: inputValue,
		setSearchTerm: handleTermChange,
		handleSearch,
		handleKeyPress,
		students: {
			data: data?.getAllStudents || [],
			loading
		},
		isEmpty:
			hasSearched && !loading && (data?.getAllStudents?.length ?? 0) === 0
	}
}
