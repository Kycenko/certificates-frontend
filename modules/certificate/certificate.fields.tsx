import { useFormContext } from 'react-hook-form'

import { CertificateSchema } from './certficate.schema'
import { CertificateFieldsProps } from './certificate.types'
import { DatePicker, SelectCombobox } from '@/shared/components'
import { FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui'

export function CertificateFields({
	students,
	healthGroups,
	physicalEducations
}: CertificateFieldsProps) {
	const { control } = useFormContext<CertificateSchema>()

	return (
		<>
			<FormField
				name='startDate'
				control={control}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Выберите дату начала</FormLabel>
						<DatePicker
							selected={field.value}
							onSelect={field.onChange}
						/>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				name='finishDate'
				control={control}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Выберите дату окончания</FormLabel>
						<DatePicker
							selected={field.value}
							onSelect={field.onChange}
						/>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				name='studentId'
				control={control}
				render={({ field }) => (
					<FormItem>
						<SelectCombobox
							data={students}
							valueKey={'id'}
							labelKey={item =>
								`${item.lastName} ${item.firstName} ${item.secondName || ''} `
							}
							placeholder='Выберите студента'
							value={field.value}
							onValueChange={field.onChange}
						/>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				name='healthGroupId'
				control={control}
				render={({ field }) => (
					<FormItem>
						<SelectCombobox
							data={healthGroups}
							valueKey={'id'}
							labelKey={'title'}
							placeholder='Выберите группу здоровья'
							value={field.value}
							onValueChange={field.onChange}
						/>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				name='physicalEducationId'
				control={control}
				render={({ field }) => (
					<FormItem>
						<SelectCombobox
							data={physicalEducations}
							valueKey={'id'}
							labelKey={'title'}
							placeholder='Выберите группу по физкультуре'
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
