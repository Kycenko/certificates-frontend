import { AnimatePresence, motion } from 'motion/react'

interface AnimatedContentProps {
	isLoading?: boolean
	children: React.ReactNode
	skeleton: React.ReactNode
}

function AnimatedContent({
	isLoading,
	children,
	skeleton
}: AnimatedContentProps) {
	return (
		<AnimatePresence mode='wait'>
			{isLoading ? (
				<motion.div
					key='skeleton'
					initial={{ opacity: 0, y: 8 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.4,
							ease: [0.16, 1, 0.3, 1]
						}
					}}
					exit={{
						opacity: 0,
						y: -8,
						transition: {
							duration: 0.3,
							ease: [0.7, 0, 0.84, 0]
						}
					}}
				>
					{skeleton}
				</motion.div>
			) : (
				<motion.div
					key='content'
					initial={{ opacity: 0, y: 12 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.5,
							ease: [0.16, 1, 0.3, 1],
							delay: 0.1
						}
					}}
					exit={{
						opacity: 0,
						y: -12,
						transition: {
							duration: 0.25,
							ease: [0.7, 0, 0.84, 0]
						}
					}}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default AnimatedContent
