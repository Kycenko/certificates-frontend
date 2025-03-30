import { useFormContext } from 'react-hook-form'

import { DepartmentSchema } from './department.schema'
import { FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

export default function DepartmentFields() {
	const { control } = useFormContext<DepartmentSchema>()

	return (
		<FormField
			control={control}
			name='title'
			render={({ field }) => (
				<FormItem>
					<FormLabel>Название</FormLabel>
					<Input
						placeholder='Введите название...'
						{...field}
					/>

					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
