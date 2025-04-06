import { useRouter } from '@tanstack/react-router'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useGetAllStudentsQuery } from '@/app/graphql/generated'
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
import { Skeleton } from '@/shared/ui/skeleton'

function StudentsSearch() {
	const [open, setOpen] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearchTerm = useDebounce(searchTerm, 300)

	const router = useRouter()

	const { data, loading, refetch } = useGetAllStudentsQuery({
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
					className='text-muted-foreground w-full justify-start'
				>
					<Search className='mr-2 h-4 w-4' />
					Поиск студентов...
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
						{loading ? (
							<div className='space-y-2 p-4'>
								{[...Array(4)].map((_, i) => (
									<Skeleton
										key={i}
										className='h-8 w-full'
									/>
								))}
							</div>
						) : (
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
														to: `/students/${student.id}`
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
						)}
					</CommandList>
				</Command>
			</DialogContent>
		</Dialog>
	)
}

export default StudentsSearch
