import HealthGroupsComponent from '@modules/health-group/health-groups-component'

import PhysicalEducationsComponent from '@/modules/physical-education/physical-educations.component'
import { Card, CardContent } from '@/shared/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs'

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
