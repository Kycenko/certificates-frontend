export function GlobalSpinner() {
	return (
		<div className='bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black'>
			<div className='border-opacity-75 h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500'></div>
		</div>
	)
}
