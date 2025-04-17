import { createFileRoute } from '@tanstack/react-router'

import CuratorsComponent from '@/modules/admin/curator/CuratorsComponent'

export const Route = createFileRoute('/_authenticated/admin/_layout/curators/')(
	{
		component: CuratorsComponent
	}
)
