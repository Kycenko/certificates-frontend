import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import HealthGroupsComponent from '@/features/health-groups'
import PhysicalEducationsComponent from '@/features/physical-educations'

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
