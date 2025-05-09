import { useFormContext } from 'react-hook-form'

import { BirthDatePicker, SelectCombobox } from '@/shared/components'
import { StudentFieldsProps } from '@/shared/types/student.types'
import { Checkbox } from '@/shared/ui/checkbox'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

import { StudentSchema } from './student.schema'

function StudentFields({ data, isLoading }: StudentFieldsProps) {
	const { control } = useFormContext<StudentSchema>()

	return (
		<>
			<FormField
				control={control}
				name='lastName'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Фамилия</FormLabel>
						<Input
							placeholder='Введите фамилию...'
							{...field}
						/>

						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='firstName'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Имя</FormLabel>
						<Input
							placeholder='Введите имя...'
							{...field}
						/>

						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='secondName'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Отчество</FormLabel>
						<Input
							{...field}
							placeholder='Введите отчество...'
						/>

						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				name='birthDate'
				control={control}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Дата рождения</FormLabel>
						<BirthDatePicker
							onSelect={field.onChange}
							selected={field.value}
							disabled={date => date > new Date()}
						/>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				name='groupId'
				control={control}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Группа</FormLabel>
						<SelectCombobox
							disabled={isLoading}
							data={data}
							valueKey={'id'}
							labelKey={'title'}
							placeholder='Выберите группу'
							value={field.value}
							onValueChange={field.onChange}
						/>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='isExpelled'
				render={({ field }) => (
					<FormItem className='flex flex-row items-start space-y-0 space-x-3 p-4'>
						<FormControl>
							<Checkbox
								checked={field.value}
								onCheckedChange={field.onChange}
							/>
						</FormControl>
						<div className='space-y-1 leading-none'>
							<FormLabel>Студент отчислен?</FormLabel>
						</div>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	)
}

export default StudentFields
