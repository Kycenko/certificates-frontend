'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '@/components/ui/command'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Skeleton } from '@/components/ui/skeleton'

import { useGetAllStudentsQuery } from '@/app/graphql/generated'

export function StudentSearch() {
	const [open, setOpen] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')

	const router = useRouter()

	const { data, loading } = useGetAllStudentsQuery({
		variables: {
			params: {
				orderBy: 'asc',
				lastName: searchTerm
			}
		},
		skip: !open
	})

	const students = data?.getAllStudents || []

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
				<Command shouldFilter={false}>
					<CommandInput
						placeholder='Введите фамилию студента...'
						value={searchTerm}
						onValueChange={setSearchTerm}
					/>
					<CommandList>
						{loading ? (
							<div className='space-y-2 p-4'>
								{[...Array(3)].map((_, i) => (
									<Skeleton
										key={i}
										className='h-8 w-full'
									/>
								))}
							</div>
						) : (
							<>
								<CommandEmpty>Студенты не найдены</CommandEmpty>
								<CommandGroup heading='Результаты поиска'>
									{students.map(student => (
										<CommandItem
											key={student.id}
											value={student.id}
											onSelect={() => {
												router.push(`/students/${student.id}`)
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
							</>
						)}
					</CommandList>
				</Command>
			</DialogContent>
		</Dialog>
	)
}
