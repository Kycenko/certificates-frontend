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

function AdminSearchStudents() {
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
		if (!open) {
			setSearchTerm('')
		}
	}, [open])

	useEffect(() => {
		if (debouncedSearchTerm && open) {
			refetch()
		}
	}, [debouncedSearchTerm, open, refetch])

	const students = data?.getAllStudents || []

	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.altKey && e.key.toLowerCase() === 'k') {
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

			<DialogContent className='overflow-hidden p-0 sm:max-w-2xl'>
				<DialogHeader className='px-6 pt-6 pb-2'>
					<DialogTitle className='text-1xl'>Поиск студентов</DialogTitle>
				</DialogHeader>
				<Command shouldFilter={false}>
					<CommandInput
						placeholder='Начните вводить фамилию...'
						value={searchTerm}
						onValueChange={setSearchTerm}
						autoFocus
						className='text-md h-14 px-6'
					/>
					<CommandList className='max-h-[500px] overflow-auto'>
						<CommandEmpty className='text-md py-6 text-center'>
							{searchTerm
								? 'Совпадений не найдено'
								: 'Введите фамилию для начала поиска'}
						</CommandEmpty>

						{students.length > 0 && (
							<CommandGroup
								className='px-4 font-medium'
								heading={<div className='text-md py-2'>Результаты поиска</div>}
							>
								{students.map(student => (
									<CommandItem
										key={student.id}
										value={student.id}
										className='text-md hover:bg-muted cursor-pointer rounded-lg px-4 py-3'
										onSelect={() => {
											router.navigate({
												to: `/admin/students/${student.id}`
											})
											setOpen(false)
										}}
									>
										<div className='flex flex-col'>
											<span className='font-semibold'>
												{student.lastName} {student.firstName}{' '}
												{student.secondName}
											</span>
											{student.group && (
												<span className='text-muted-foreground text-base'>
													Группа: {student.group.title}
												</span>
											)}
										</div>
									</CommandItem>
								))}
							</CommandGroup>
						)}
					</CommandList>
				</Command>
			</DialogContent>
		</Dialog>
	)
}

export default AdminSearchStudents
