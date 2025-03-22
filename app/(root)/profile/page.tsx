import { EditUserForm } from '@/components/edit-user-form'

export default function ProfilePage() {
	return (
		<div className='container mx-auto p-4'>
			<h1 className='mb-6 text-2xl font-bold'>Редактирование пользователя</h1>
			<EditUserForm />
		</div>
	)
}
