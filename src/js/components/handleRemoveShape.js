import { state } from '../app'

export function handleRemoveShape(popData) {
  if (popData)
    state.initialData = state.initialData.filter(
      (data) => data.id !== popData.id
    )
  document.getElementById(popData?.id)?.remove()
}
