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
				<Button variant='outline'>Добавить</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[300px]'>
				<Form {...methods}>
					<form onSubmit={handleSubmit(data => onSubmitted(data))}>
						<DialogHeader>
							<DialogTitle>{title}</DialogTitle>
							{description && (
								<DialogDescription>{description}</DialogDescription>
							)}
						</DialogHeader>
						<div className='flex flex-col gap-4 py-4'>{fields}</div>
						<DialogFooter>
							<Button
								disabled={!methods.formState.isValid}
								type='submit'
							>
								Добавить
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
