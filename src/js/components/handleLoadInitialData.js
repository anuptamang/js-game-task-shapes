import { gameBoxScreenHolder, state } from '../app'
import { handleCreateImage, handleRemoveFigureOnClick } from '../components'
import { getLimitedItems } from '../utils'

export function handleLoadInitialData() {
  state.initialData = getLimitedItems(state.data, state.counter)

  handleCreateImage(gameBoxScreenHolder)
  handleRemoveFigureOnClick(gameBoxScreenHolder)
}
