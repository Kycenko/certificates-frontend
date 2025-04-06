import { useFormContext } from 'react-hook-form'

import { PhysicalEducationSchema } from './physical-education.schema'
import { FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

export function PhysicalEducationFields() {
	const { control } = useFormContext<PhysicalEducationSchema>()

	return (
		<FormField
			control={control}
			name='title'
			render={({ field }) => (
				<FormItem>
					<FormLabel>Группа по физкультуре</FormLabel>
					<Input
						placeholder='Название группы по физкультуре'
						onChange={field.onChange}
						value={field.value}
					/>

					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
