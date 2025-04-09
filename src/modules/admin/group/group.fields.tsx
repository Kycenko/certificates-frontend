import { useFormContext } from 'react-hook-form'

import { SelectCombobox } from '@/shared/components'
import { GroupFieldsProps } from '@/shared/types/group.types'
import { FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

import { GroupSchema } from './group.schema'

function GroupFields({ data, isLoading }: GroupFieldsProps) {
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
						<FormLabel>Курс</FormLabel>
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
export default GroupFields
