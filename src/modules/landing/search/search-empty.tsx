import { SearchIcon } from 'lucide-react'

function SearchEmpty() {
	return (
		<div className='bg-accent rounded-lg border p-6 text-center'>
			<SearchIcon className='text-muted-foreground mx-auto h-10 w-10' />
			<h3 className='text-foreground mt-2 text-lg font-medium'>
				Студенты не найдены
			</h3>
			<p className='text-muted-foreground mt-1'>
				Попробуйте изменить параметры поиска
			</p>
		</div>
	)
}

export default SearchEmpty
