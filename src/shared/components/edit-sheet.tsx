import { zodResolver } from '@hookform/resolvers/zod'
import { Edit } from 'lucide-react'
import {
	DefaultValues,
	FieldValues,
	FormProvider,
	useForm
} from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../ui/button'

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/shared/ui/sheet'

interface EditSheetProps<T extends FieldValues> {
	fields: React.ReactNode
	onSubmit: (data: T) => void
	onOpenChange?: () => void
	defaultValues: DefaultValues<T>
	schema: z.ZodSchema<T>
	title: string
}

export default function EditSheet<T extends FieldValues>({
	fields,
	onSubmit,
	onOpenChange,
	defaultValues,
	schema,
	title
}: EditSheetProps<T>) {
	const methods = useForm<T>({
		defaultValues,
		mode: 'onChange',
		resolver: zodResolver(schema)
	})

	function handleOpenChange(open: boolean) {
		if (open) onOpenChange?.()
	}

	const { handleSubmit } = methods

	return (
		<Sheet onOpenChange={handleOpenChange}>
			<SheetTrigger asChild>
				<Button variant='outline'>
					<Edit className='mr-2 h-4 w-4' />
					Редактировать
				</Button>
			</SheetTrigger>

			<SheetContent className='w-full'>
				<SheetHeader className='mb-6'>
					<SheetTitle>{title}</SheetTitle>
				</SheetHeader>

				<div className='p-4'>
					<FormProvider {...methods}>
						<form
							onSubmit={handleSubmit(data => onSubmit(data))}
							className='space-y-4'
						>
							{fields}
							<Button
								disabled={!methods.formState.isValid}
								type='submit'
								className='w-full'
							>
								Сохранить изменения
							</Button>
						</form>
					</FormProvider>
				</div>
			</SheetContent>
		</Sheet>
	)
}
