import { useState } from 'react'

import { useGetAllStudentsByLastNameLazyQuery } from '@/app/graphql/generated'

export const useStudentSearch = () => {
	const [inputValue, setInputValue] = useState('')

	const [fetchStudents, { data, loading }] =
		useGetAllStudentsByLastNameLazyQuery()

	const students = data?.getAllStudentsByLastName || []

	const [hasSearched, setHasSearched] = useState(false)

	const handleSearch = () => {
		if (!inputValue.trim()) return
		fetchStudents({
			variables: { lastName: inputValue.trim() }
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
			data: students,
			loading
		},
		isEmpty: hasSearched && !loading && (students.length ?? 0) === 0
	}
}
