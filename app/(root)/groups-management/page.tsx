'use client'

import dynamic from 'next/dynamic'

import { Card, CardContent } from '@/shared/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs'

const HealthGroupsComponent = dynamic(
	() => import('@/modules/health-group/health-groups.component')
)

const PhysicalEducationsComponent = dynamic(
	() => import('@/modules/physical-education/physical-educations.component')
)

export default function GroupsManagementPage() {
	return (
		<div>
			<Tabs
				defaultValue='health'
				className='w-full'
			>
				<div className='flex flex-col items-start justify-between gap-4 md:flex-row'>
					<TabsList className='grid w-full grid-cols-2 md:w-fit'>
						<TabsTrigger value='health'>Группы здоровья</TabsTrigger>
						<TabsTrigger value='physical'>Группы по физкультуре</TabsTrigger>
					</TabsList>
				</div>

				<TabsContent value='health'>
					<Card>
						<CardContent className='p-4 md:p-6'>
							<HealthGroupsComponent />
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value='physical'>
					<Card>
						<CardContent className='p-4 md:p-6'>
							<PhysicalEducationsComponent />
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}
