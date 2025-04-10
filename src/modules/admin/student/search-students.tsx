import { useRouter } from '@tanstack/react-router'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useDebounce } from '@/shared/hooks/useDebounce'
import { Button } from '@/shared/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '@/shared/ui/command'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui/dialog'

import { useGetAllStudentsQuery } from '@/app/graphql/generated'

function StudentsSearch() {
	const [open, setOpen] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearchTerm = useDebounce(searchTerm, 300)

	const router = useRouter()

	const { data, refetch } = useGetAllStudentsQuery({
		variables: {
			params: {
				orderBy: 'asc',
				lastName: debouncedSearchTerm
			}
		},
		skip: !open || !debouncedSearchTerm
	})

	useEffect(() => {
		if (debouncedSearchTerm && open) refetch()
	}, [debouncedSearchTerm, open, refetch])

	const students = data?.getAllStudents || []

	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.altKey && e.key === 'k') {
				e.preventDefault()
				setOpen(true)
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [])

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger asChild>
				<Button
					variant='outline'
					className='text-muted-foreground relative w-full justify-start'
				>
					<Search className='mr-2 h-4 w-4 shrink-0' />
					<span className='truncate'>Поиск студентов...</span>
					<kbd className='bg-muted text-muted-foreground pointer-events-none ml-auto hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium select-none sm:inline-flex'>
						<span className='text-xs'>Alt + K</span>
					</kbd>
				</Button>
			</DialogTrigger>

			<DialogContent className='overflow-hidden p-0'>
				<DialogHeader className='px-4 pt-4'>
					<DialogTitle>Поиск студентов</DialogTitle>
				</DialogHeader>
				<Command shouldFilter={false}>
					<CommandInput
						placeholder='Введите фамилию студента...'
						value={searchTerm}
						onValueChange={setSearchTerm}
					/>
					<CommandList>
						<>
							<CommandEmpty>
								{searchTerm
									? 'Студенты не найдены'
									: 'Введите фамилию для поиска'}
							</CommandEmpty>
							{students.length > 0 && (
								<CommandGroup heading='Результаты поиска'>
									{students.map(student => (
										<CommandItem
											className='cursor-pointer'
											key={student.id}
											value={student.id}
											onSelect={() => {
												router.navigate({
													to: `/admin/students/${student.id}`
												})
												setOpen(false)
											}}
										>
											{student.lastName} {student.firstName}{' '}
											{student.secondName}
											{student.group && (
												<span className='text-muted-foreground ml-2 text-xs'>
													{student.group.title}
												</span>
											)}
										</CommandItem>
									))}
								</CommandGroup>
							)}
						</>
					</CommandList>
				</Command>
			</DialogContent>
		</Dialog>
	)
}

export default StudentsSearch
