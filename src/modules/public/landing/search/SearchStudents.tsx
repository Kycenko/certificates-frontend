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
		<div className='mx-auto max-w-2xl px-4'>
			<div className='bg-background flex overflow-hidden rounded-xl border shadow-sm'>
				<Input
					value={searchTerm}
					onChange={e => onSearchTermChange(e.target.value)}
					onKeyDown={onKeyDown}
					placeholder='Введите фамилию...'
					className='h-14 flex-1 border-0 px-4 text-base focus-visible:ring-0 focus-visible:outline-none'
				/>
				<Button
					disabled={!searchTerm}
					onClick={onSearch}
					className='h-14 rounded-none px-6 text-base'
				>
					Найти
				</Button>
			</div>
		</div>
	)
}
export default SearchStudents
