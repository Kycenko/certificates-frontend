'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'

interface DataDialogProps<T extends FieldValues> {
	onSubmit: (data: T) => void
	fields: ReactNode
	headers: {
		triggerTitle: string
		dialogTitle: string
		dialogDescription?: string
		submitTitle: string
	}
	schema: z.ZodSchema<T>
}

export function DataDialog<T extends FieldValues>({
	onSubmit,
	fields,
	headers,
	schema
}: DataDialogProps<T>) {
	const methods = useForm<T>({
		mode: 'onChange',
		resolver: zodResolver(schema)
	})

	const { handleSubmit, reset, formState } = methods

	function onSubmitted(data: T) {
		onSubmit(data)
		reset()
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline'>{headers.triggerTitle}</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(data => onSubmitted(data))}>
						<DialogHeader>
							<DialogTitle>{headers.dialogTitle}</DialogTitle>
							{headers.dialogDescription && (
								<DialogDescription>
									{headers.dialogDescription}
								</DialogDescription>
							)}
						</DialogHeader>
						<div className='grid gap-4 py-4'>
							<div className='grid grid-cols-4 items-center gap-4'>
								{fields}
							</div>
						</div>
						<DialogFooter>
							<Button
								disabled={!formState.isValid}
								type='submit'
							>
								{headers.submitTitle}
							</Button>
						</DialogFooter>
					</form>
				</FormProvider>
			</DialogContent>
		</Dialog>
	)
}
