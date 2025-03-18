import { ChangeEvent, useState } from 'react'

export function useSelectCells() {
	const [selectedIds, setSelectedIds] = useState<string[]>([])

	const handleSelectAllCells = (
		e: ChangeEvent<HTMLInputElement>,
		data: any[] | undefined
	) => {
		if (e.target.checked && data) setSelectedIds(data.map(({ id }) => id))
		else setSelectedIds([])
	}

	const handleSelectCell = (e: ChangeEvent<HTMLInputElement>, id: string) => {
		if (selectedIds.includes(id))
			setSelectedIds(selectedIds.filter(selectedId => selectedId !== id))
		else setSelectedIds([...selectedIds, id])
	}

	return { selectedIds, setSelectedIds, handleSelectCell, handleSelectAllCells }
}
