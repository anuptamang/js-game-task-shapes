import { gameBoxScreenHolder, state } from '../app'
import { handleCounterDisplay } from './handleCounterDisplay'
import { handleRemoveShape } from './handleRemoveShape'

export function handleRemoveFigureOnClick() {
  gameBoxScreenHolder?.addEventListener('click', (e) => {
    const figure = e.target
    const figureToRemove = state.initialData.find(
      (item) => item.id === figure.id
    )

    handleRemoveShape(figureToRemove)

    state.counter = state.initialData.length
    handleCounterDisplay()
  })
}
