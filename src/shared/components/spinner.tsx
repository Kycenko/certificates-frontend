function Spinner() {
	return (
		<div className='bg-opacity-50 bg-background dark:bg-background fixed inset-0 z-50 flex items-center justify-center'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='var(--primary)'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='animate-spin'
			>
				<path d='M21 12a9 9 0 1 1-6.219-8.56' />
			</svg>
		</div>
	)
}

export default Spinner
