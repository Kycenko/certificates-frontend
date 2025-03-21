import {
	Select,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

interface SelectDataProps {
	children: React.ReactNode
	label: string
	placeholder: string
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
}

export function SelectData({
	children,
	placeholder,
	label,
	value,
	defaultValue,
	onValueChange
}: SelectDataProps) {
	return (
		<Select
			defaultValue={defaultValue}
			value={value}
			onValueChange={onValueChange}
		>
			<SelectTrigger className='w-full'>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>{label}</SelectLabel>
					{children}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
