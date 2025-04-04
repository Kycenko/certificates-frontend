import {
	BookOpen,
	BookUser,
	CalendarHeart,
	GitBranch,
	HeartPulse,
	House,
	Users
} from 'lucide-react'

export const navLinks = [
	{
		icon: <House />,
		href: '/',
		title: 'Главная'
	},
	{
		icon: <HeartPulse />,
		href: '/groups-management',
		title: 'Управление группами'
	},

	{
		icon: <GitBranch />,
		href: '/departments',
		title: 'Отделения'
	},
	{
		icon: <BookOpen />,
		href: '/courses',
		title: 'Курсы'
	},
	{
		icon: <BookUser />,
		href: '/groups',
		title: 'Группы'
	},
	{ icon: <Users />, href: '/students', title: 'Студенты' },
	{
		icon: <CalendarHeart />,
		href: '/certificates',
		title: 'Справки'
	}
]
