import { Monitor, Moon, Sun } from 'lucide-react'

import { Button } from '@/shared/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu'
import { Switch } from '@/shared/ui/switch'

import { useTheme } from '@/app/providers/theme-provider'

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					title='Сменить тему'
					variant='ghost'
					size='icon'
					className='hover:bg-accent/50 relative'
				>
					<Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
					<Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
					<span className='sr-only'>Смена темы</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='w-48'
			>
				<DropdownMenuItem
					onClick={() => setTheme('light')}
					className='flex items-center justify-between'
				>
					<div className='flex items-center gap-2'>
						<Sun className='h-4 w-4' />
						Светлая
					</div>
					<Switch
						checked={theme === 'light'}
						className='data-[state=checked]:bg-primary'
					/>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme('dark')}
					className='flex items-center justify-between'
				>
					<div className='flex items-center gap-2'>
						<Moon className='h-4 w-4' />
						Темная
					</div>
					<Switch
						checked={theme === 'dark'}
						className='data-[state=checked]:bg-primary'
					/>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme('system')}
					className='flex items-center justify-between'
				>
					<div className='flex items-center gap-2'>
						<Monitor className='h-4 w-4' />
						Системная
					</div>
					<Switch
						checked={theme === 'system'}
						className='data-[state=checked]:bg-primary'
					/>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
