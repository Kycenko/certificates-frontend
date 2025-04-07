import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'

interface SearchStudentsProps {
	searchTerm: string
	onSearchTermChange: (value: string) => void
	onSearch: () => void
	onKeyDown: (e: React.KeyboardEvent) => void
}

function SearchStudents({
	searchTerm,
	onSearchTermChange,
	onSearch,
	onKeyDown
}: SearchStudentsProps) {
	return (
		<div className='relative mx-auto max-w-xl'>
			<div className='relative flex rounded-lg shadow-sm'>
				<Input
					value={searchTerm}
					onChange={e => onSearchTermChange(e.target.value)}
					onKeyDown={onKeyDown}
					placeholder='Введите фамилию...'
					className='h-14 rounded-r-none text-base shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500'
				/>
				<Button
					onClick={onSearch}
					className='h-14 rounded-l-none bg-blue-600 px-6 text-base hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500'
				>
					Найти
				</Button>
			</div>
		</div>
	)
}
export default SearchStudents
