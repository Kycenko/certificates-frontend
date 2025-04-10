import {
	BookOpen,
	BookUser,
	CalendarHeart,
	ChartArea,
	GitBranch,
	GraduationCap,
	HeartPulse,
	Users
} from 'lucide-react'

export const navLinks = [
	{
		icon: <HeartPulse />,
		href: '/admin/groups-management',
		title: 'Группы здоровья'
	},

	{
		icon: <GitBranch />,
		href: '/admin/departments',
		title: 'Отделения'
	},
	{
		icon: <BookOpen />,
		href: '/admin/courses',
		title: 'Курсы'
	},
	{
		icon: <BookUser />,
		href: '/admin/groups',
		title: 'Группы'
	},
	{ icon: <Users />, href: '/admin/students', title: 'Студенты' },
	{
		icon: <CalendarHeart />,
		href: '/admin/certificates',
		title: 'Справки'
	},
	{
		icon: <ChartArea />,
		href: '/admin/statistics',
		title: 'Cтатистика'
	},
	{
		icon: <GraduationCap />,
		href: '/admin/curators',
		title: 'Кураторы'
	}
]
