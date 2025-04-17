import { useFormContext } from 'react-hook-form'

import { FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

import { HealthGroupSchema } from './healthGroupSchema'

function HealthGroupFields() {
	const { control } = useFormContext<HealthGroupSchema>()

	return (
		<FormField
			control={control}
			name='title'
			render={({ field }) => (
				<FormItem>
					<FormLabel>Группа здоровья</FormLabel>
					<Input
						placeholder='Название группы здоровья'
						onChange={field.onChange}
						value={field.value}
					/>

					<FormMessage />
				</FormItem>
			)}
		/>
	)
}

export default HealthGroupFields
