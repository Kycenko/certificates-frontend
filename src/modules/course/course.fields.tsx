import { useFormContext } from 'react-hook-form'

import { CourseSchema } from './course.schema'
import { CourseFieldsProps } from './course.types'
import { SelectCombobox } from '@/shared/components/select-combobox'
import { SelectData } from '@/shared/components/select-data'
import { FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { SelectItem } from '@/shared/ui/select'

export default function CourseFields({ data, isLoading }: CourseFieldsProps) {
	const { control } = useFormContext<CourseSchema>()

	return (
		<>
			<FormField
				control={control}
				name='number'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Номер курса</FormLabel>
						<SelectData
							value={field.value}
							onValueChange={field.onChange}
							label='Номер курса'
							placeholder='Выберите номер курса'
						>
							<SelectItem value='1'>1-й курс</SelectItem>
							<SelectItem value='2'>2-й курс</SelectItem>
							<SelectItem value='3'>3-й курс</SelectItem>
							<SelectItem value='4'>4-й курс</SelectItem>
						</SelectData>

						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				name='departmentId'
				control={control}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Отделение</FormLabel>
						<SelectCombobox
							data={data}
							disabled={isLoading}
							valueKey='id'
							labelKey='title'
							placeholder='Выберите отделение'
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
