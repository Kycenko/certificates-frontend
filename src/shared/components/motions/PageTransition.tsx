import { motion } from 'motion/react'

interface PageTransitionProps {
	children: React.ReactNode
}

function PageTransition({ children }: PageTransitionProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.98 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.98 }}
			transition={{ duration: 0.2, ease: 'easeInOut' }}
		>
			{children}
		</motion.div>
	)
}

export default PageTransition
