import { state } from '../app'
import { handleCounterDisplay } from './handleCounterDisplay'
import { handleCreateImage } from './handleCreateImage'

export function handleRemoveFigureOnClick(holder) {
  holder?.addEventListener('click', (e) => {
    const figure = e.target
    state.initialData = state.initialData.filter(
      (data) => figure.id !== data.id
    )

    state.counter = state.initialData.length

    handleCounterDisplay()
    handleCreateImage(holder)
  })
}
