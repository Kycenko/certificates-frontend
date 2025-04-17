import { createFileRoute } from '@tanstack/react-router'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs'

import HealthGroupsComponent from '@/modules/admin/health-group/HealthGroupsComponent'
import PhysicalEducationsComponent from '@/modules/admin/physical-education/PhysicalEducationsComponent'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/groups-management/'
)({
	component: () => (
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
					<HealthGroupsComponent />
				</TabsContent>

				<TabsContent value='physical'>
					<PhysicalEducationsComponent />
				</TabsContent>
			</Tabs>
		</div>
	)
})
