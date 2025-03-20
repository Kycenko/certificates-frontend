import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TableSettingsStore {
	pagination: boolean
	search: boolean
	columnVisibility: boolean
	togglePagination: () => void
	toggleSearch: () => void
	toggleColumnVisibility: () => void
}

export const useTableSettingsStore = create<TableSettingsStore>()(
	persist(
		set => ({
			pagination: true,
			search: true,
			columnVisibility: true,

			togglePagination: () => set(state => ({ pagination: !state.pagination })),
			toggleSearch: () => set(state => ({ search: !state.search })),
			toggleColumnVisibility: () =>
				set(state => ({ columnVisibility: !state.columnVisibility }))
		}),
		{ name: 'table-settings' }
	)
)
