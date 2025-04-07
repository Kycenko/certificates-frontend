function LandingFooter() {
	return (
		<footer className='mt-auto border-t bg-white py-4 text-center text-sm text-gray-500'>
			Внутренний сервис ЧУО "Колледж бизнеса и права" ©{' '}
			{new Date().getFullYear()}
		</footer>
	)
}

export default LandingFooter
