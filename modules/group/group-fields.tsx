import { useFormContext } from 'react-hook-form'

import { GroupSchema } from './group.schema'
import { GroupFieldsProps } from './group.types'
import { SelectCombobox } from '@/shared/components'
import { FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

export default function GroupFields({ data, isLoading }: GroupFieldsProps) {
	const { control } = useFormContext<GroupSchema>()

	return (
		<>
			<FormField
				control={control}
				name='title'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Группа</FormLabel>
						<Input
							placeholder='Название группы'
							{...field}
						/>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				name='courseId'
				control={control}
				render={({ field }) => (
					<FormItem>
						<SelectCombobox
							data={data}
							disabled={isLoading}
							valueKey={'id'}
							labelKey={item =>
								`${item.number}-й курс (${item.department.title})`
							}
							placeholder='Выберите курс'
							value={field.value}
							onValueChange={field.onChange}
						/>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	)
}
