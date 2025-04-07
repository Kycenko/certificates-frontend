import { SearchIcon } from 'lucide-react'

function SearchEmpty() {
	return (
		<div className='rounded-lg border border-gray-200 bg-gray-50 p-6 text-center'>
			<SearchIcon className='mx-auto h-10 w-10 text-gray-400' />
			<h3 className='mt-2 text-lg font-medium text-gray-900'>
				Студенты не найдены
			</h3>
			<p className='mt-1 text-gray-500'>Попробуйте изменить параметры поиска</p>
		</div>
	)
}

export default SearchEmpty
