// 'use client'

// import { PencilIcon, PlusIcon } from 'lucide-react'
// import { useParams } from 'next/navigation'

// import { Button } from '@/components/ui/button'
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardHeader,
// 	CardTitle
// } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import {
// 	Sheet,
// 	SheetContent,
// 	SheetHeader,
// 	SheetTitle,
// 	SheetTrigger
// } from '@/components/ui/sheet'
// import { Skeleton } from '@/components/ui/skeleton'
// import {
// 	Table,
// 	TableBody,
// 	TableCell,
// 	TableHead,
// 	TableHeader,
// 	TableRow
// } from '@/components/ui/table'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// import { useGetDepartmentByIdQuery } from '@/app/graphql/generated'

// export default function DepartmentDetailsPage() {
// 	const { id } = useParams()
// 	const { data = [], loading } = useGetDepartmentByIdQuery({
// 		variables: { getDepartmentById: String(id) }
// 	})

// 	return (
// 		<div className='mx-auto max-w-7xl p-4 md:p-6 lg:p-8'>
// 			{/* Header Section */}
// 			<div className='mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center'>
// 				<div>
// 					{/* <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
// 						{data?.getDepartmentById.id || <Skeleton className='h-8 w-48' />}
// 					</h1>
// 					<p className='text-muted-foreground mt-2'>
// 						{data?.getDepartmentById.title || (
// 							<Skeleton className='mt-2 h-4 w-64' />
// 						)}
// 					</p> */}
// 				</div>

// 				<div className='flex gap-2'>
// 					<Sheet>
// 						<SheetTrigger asChild>
// 							<Button variant='outline'>
// 								<PencilIcon className='mr-2 h-4 w-4' />
// 								Редактировать
// 							</Button>
// 						</SheetTrigger>
// 						<SheetContent className='w-full sm:max-w-md'>
// 							<SheetHeader>
// 								<SheetTitle>Редактирование отделения</SheetTitle>
// 							</SheetHeader>
// 							{/* Edit Form Here */}
// 						</SheetContent>
// 					</Sheet>

// 					<Button>
// 						<PlusIcon className='mr-2 h-4 w-4' />
// 						Добавить курс
// 					</Button>
// 				</div>
// 			</div>

// 			{/* Main Content Tabs */}
// 			<Tabs
// 				defaultValue='courses'
// 				className='w-full'
// 			>
// 				<TabsList className='grid w-full grid-cols-2 md:w-fit'>
// 					<TabsTrigger value='courses'>Курсы</TabsTrigger>
// 					<TabsTrigger value='statistics'>Статистика</TabsTrigger>
// 				</TabsList>

// 				{/* Courses Tab */}
// 				<TabsContent value='courses'>
// 					<Card>
// 						<CardHeader>
// 							<div className='flex items-center justify-between'>
// 								<div>
// 									<CardTitle>Список курсов</CardTitle>
// 									<CardDescription>Все курсы в этом отделении</CardDescription>
// 								</div>
// 								<Input
// 									placeholder='Поиск курсов...'
// 									className='max-w-64'
// 								/>
// 							</div>
// 						</CardHeader>
// 						<CardContent>
// 							<Table>
// 								<TableHeader>
// 									<TableRow>
// 										<TableHead>Номер курса</TableHead>
// 										<TableHead>Количество групп</TableHead>
// 										<TableHead>Статус</TableHead>
// 										<TableHead className='text-right'>Действия</TableHead>
// 									</TableRow>
// 								</TableHeader>
// 								<TableBody>
// 									{loading
// 										? Array(5)
// 												.fill(0)
// 												.map((_, i) => (
// 													<TableRow key={i}>
// 														<TableCell>
// 															<Skeleton className='h-4 w-12' />
// 														</TableCell>
// 														<TableCell>
// 															<Skeleton className='h-4 w-20' />
// 														</TableCell>
// 														<TableCell>
// 															<Skeleton className='h-4 w-24' />
// 														</TableCell>
// 														<TableCell className='text-right'>
// 															<Skeleton className='ml-auto h-8 w-24' />
// 														</TableCell>
// 													</TableRow>
// 												))
// 										: null}
// 								</TableBody>
// 							</Table>
// 						</CardContent>
// 					</Card>
// 				</TabsContent>

// 				{/* Statistics Tab */}
// 				<TabsContent value='statistics'>
// 					<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
// 						<Card>
// 							<CardHeader>
// 								<CardTitle>Всего студентов</CardTitle>
// 							</CardHeader>
// 							<CardContent>
// 								<div className='text-3xl font-bold'>1,234</div>
// 							</CardContent>
// 						</Card>

// 						<Card>
// 							<CardHeader>
// 								<CardTitle>Справок истекает</CardTitle>
// 							</CardHeader>
// 							<CardContent>
// 								<div className='text-3xl font-bold text-rose-500'>23</div>
// 							</CardContent>
// 						</Card>

// 						<Card>
// 							<CardHeader>
// 								<CardTitle>Средняя посещаемость</CardTitle>
// 							</CardHeader>
// 							<CardContent>
// 								<div className='text-3xl font-bold'>87%</div>
// 							</CardContent>
// 						</Card>
// 					</div>
// 				</TabsContent>
// 			</Tabs>
// 		</div>
// 	)
// }
