'use client'

import { Settings } from 'lucide-react'

import { useTableSettingsStore } from '@/store/table-settings.store'

import { Button } from '@/shared/ui/button'
import { Checkbox } from '@/shared/ui/checkbox'
import { Label } from '@/shared/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'

export function TableSettings() {
	const {
		pagination,
		search,
		columnVisibility,
		togglePagination,
		toggleSearch,
		toggleColumnVisibility
	} = useTableSettingsStore()

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant='outline'>
					<Settings className='h-4 w-4' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-60'>
				<div className='grid gap-4'>
					<div className='space-y-2'>
						<h4 className='leading-none font-medium'>
							Настройки отображения таблицы
						</h4>
					</div>
					<div className='grid gap-2'>
						<div className='flex items-center gap-4'>
							<Checkbox
								id='pagination'
								checked={pagination}
								onCheckedChange={togglePagination}
							/>
							<Label htmlFor='pagination'>Пагинация</Label>
						</div>

						<div className='flex items-center gap-4'>
							<Checkbox
								id='search'
								checked={search}
								onCheckedChange={toggleSearch}
							/>
							<Label htmlFor='search'>Поиск</Label>
						</div>

						<div className='flex items-center gap-4'>
							<Checkbox
								id='columnSelection'
								checked={columnVisibility}
								onCheckedChange={toggleColumnVisibility}
							/>
							<Label htmlFor='columnSelection'>Выбор столбцов</Label>
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
