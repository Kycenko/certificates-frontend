import { zodResolver } from '@hookform/resolvers/zod'
import { PlusIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { ReactNode } from 'react'
import { DefaultValues, FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/shared/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui/dialog'
import { Form } from '@/shared/ui/form'

interface DataDialogProps<T extends FieldValues> {
	onSubmit: (data: T) => void
	onOpenChange?: () => void
	fields: ReactNode
	defaultValues?: DefaultValues<T>
	title: string
	description?: string
	schema: z.ZodSchema<T>
}

export function DataDialog<T extends FieldValues>({
	onSubmit,
	onOpenChange,
	fields,
	defaultValues,
	title,
	description,
	schema
}: DataDialogProps<T>) {
	const methods = useForm<T>({
		defaultValues,
		mode: 'onChange',
		resolver: zodResolver(schema)
	})

	const { handleSubmit, reset } = methods

	function onSubmitted(data: T) {
		onSubmit(data)
		reset()
	}

	function handleOpenChange(open: boolean) {
		if (open) onOpenChange?.()
	}

	return (
		<Dialog onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>
				<Button
					variant='outline'
					className='flex w-full items-center gap-2 sm:w-auto'
				>
					<PlusIcon className='h-4 w-4' />
					Добавить
				</Button>
			</DialogTrigger>
			<DialogContent className='md:max-w-1xl sm:max-w-md'>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.95 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
				>
					<Form {...methods}>
						<form onSubmit={handleSubmit(data => onSubmitted(data))}>
							<DialogHeader>
								<DialogTitle className='text-foreground text-2xl font-semibold'>
									{title}
								</DialogTitle>
								{description && (
									<DialogDescription className='text-muted-foreground'>
										{description}
									</DialogDescription>
								)}
							</DialogHeader>
							<div className='flex flex-col gap-4 py-4'>{fields}</div>
							<DialogFooter>
								<Button
									disabled={!methods.formState.isValid}
									type='submit'
									className='w-full sm:w-auto'
								>
									Добавить
								</Button>
							</DialogFooter>
						</form>
					</Form>
				</motion.div>
			</DialogContent>
		</Dialog>
	)
}
