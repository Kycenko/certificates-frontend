import LandingFooter from './LandingFooter'
import LandingHeader from './LandingHeader'
import LandingInfoCards from './LandingInfoCards'
import SearchEmpty from './search/SearchEmpty'
import SearchResults from './search/SearchResults'
import SearchStudents from './search/SearchStudents'
import { useStudentSearch } from './search/useStudentSearch'

function LandingComponent() {
	const {
		searchTerm,
		setSearchTerm,
		handleSearch,
		handleKeyPress,
		students: { data: students, loading },
		isEmpty
	} = useStudentSearch()

	return (
		<div className='flex min-h-screen flex-col bg-gray-50 dark:bg-black'>
			<LandingHeader />

			<main className='flex-1 px-4 py-6'>
				<div className='mx-auto max-w-3xl space-y-8'>
					<div className='space-y-6 text-center'>
						<div className='space-y-2'>
							<h1 className='text-foreground text-3xl font-bold tracking-tight'>
								Проверка медицинских справок
							</h1>
							<p className='text-muted-foreground text-lg'>
								Найдите свою фамилию для просмотра статуса обследований
							</p>
						</div>
						<SearchStudents
							searchTerm={searchTerm}
							onSearchTermChange={setSearchTerm}
							onSearch={handleSearch}
							onKeyDown={handleKeyPress}
						/>
					</div>

					{searchTerm && students.length > 0 && (
						<SearchResults
							students={students}
							isLoading={loading}
						/>
					)}

					{searchTerm && isEmpty && <SearchEmpty />}

					<LandingInfoCards />
				</div>
			</main>
			<LandingFooter />
		</div>
	)
}

export default LandingComponent
