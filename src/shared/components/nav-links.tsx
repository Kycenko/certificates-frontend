import {
	BookOpen,
	BookUser,
	CalendarHeart,
	ChartArea,
	GitBranch,
	HeartPulse,
	Users
} from 'lucide-react'

export const navLinks = [
	{
		icon: <HeartPulse />,
		href: '/groups-management',
		title: 'Группы здоровья'
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
	},
	{
		icon: <ChartArea />,
		href: '/statistics',
		title: 'Cтатистика'
	}
]
