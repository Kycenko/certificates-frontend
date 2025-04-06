export function Spinner() {
	return (
		<div className='bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black'>
			<div className='border-opacity-75 h-10 w-10 animate-spin rounded-full border-t-4 border-gray-900 dark:border-white'></div>
		</div>
	)
}
