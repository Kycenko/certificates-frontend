import { useFormContext } from 'react-hook-form'

import { SelectCombobox } from '@/shared/components/SelectCombobox'
import { FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

import { CuratorSchema } from './curator.schema'

function CuratorFields({
	groups
}: {
	groups: { id: string; title: string }[]
}) {
	const { control } = useFormContext<CuratorSchema>()

	return (
		<>
			<FormField
				control={control}
				name='login'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Логин</FormLabel>
						<Input
							placeholder='Введите логин...'
							{...field}
						/>

						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='displayedName'
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
				name='password'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Пароль</FormLabel>
						<Input
							placeholder='Введите пароль...'
							type='password'
							{...field}
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
							data={groups}
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
		</>
	)
}
export default CuratorFields
