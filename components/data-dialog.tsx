'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { DefaultValues, FieldValues, useForm } from 'react-hook-form'
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

import { Form } from './ui/form'

interface DataDialogProps<T extends FieldValues> {
	onSubmit: (data: T) => void
	fields: ReactNode
	defaultValues?: DefaultValues<T>
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
	defaultValues,
	headers,
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

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline'>{headers.triggerTitle}</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[300px]'>
				<Form {...methods}>
					<form onSubmit={handleSubmit(data => onSubmitted(data))}>
						<DialogHeader>
							<DialogTitle>{headers.dialogTitle}</DialogTitle>
							{headers.dialogDescription && (
								<DialogDescription>
									{headers.dialogDescription}
								</DialogDescription>
							)}
						</DialogHeader>
						<div className='flex flex-col gap-4 py-4'>{fields}</div>
						<DialogFooter>
							<Button
								disabled={!methods.formState.isValid}
								type='submit'
							>
								{headers.submitTitle}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
