import { SearchIcon } from 'lucide-react'

function SearchEmpty() {
	return (
		<div className='bg-muted/40 mx-auto max-w-md rounded-xl border px-6 py-10 text-center shadow-sm'>
			<SearchIcon className='text-muted-foreground mx-auto h-10 w-10' />
			<h3 className='mt-4 text-lg font-semibold'>Студенты не найдены</h3>
			<p className='text-muted-foreground mt-2 text-sm'>
				Попробуйте изменить параметры поиска
			</p>
		</div>
	)
}

export default SearchEmpty
