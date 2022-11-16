import { gameBoxScreenHolder, state } from '../app'
import { UI_CONSTANTS } from '../data/constants'
import { getUniqueCompareResult, shuffle, visibleY } from '../utils'
import { handleCounterDisplay } from './handleCounterDisplay'
import { handleCreateImage } from './handleCreateImage'
import { handleRemoveFigureOnClick } from './handleRemoveFigureOnClick'

export function handleItemAddRemove(type) {
  if (type === UI_CONSTANTS.ADD) {
    const d = getUniqueCompareResult(state.data, state.initialData)
    let popData = shuffle(d).pop()

    let fav = [...shuffle(state.favColors)]
    let size = [...shuffle(state.size)]

    popData.figure = `${popData.figure} ${shuffle(fav).pop()} ${shuffle(
      size
    ).pop()}`

    state.initialData = [...state.initialData, popData]

    handleCreateImage(gameBoxScreenHolder)
    handleRemoveFigureOnClick(gameBoxScreenHolder)

    if (state.initialData.length > 0) {
      state.initialData?.forEach((data) => {
        if (!visibleY(document.getElementById(data.id))) {
          let index = state.initialData.indexOf(data)
          if (index > -1) {
            state.initialData.splice(index, 1)
          }
          state.counter = state.initialData.length
          handleCounterDisplay()
          handleCreateImage(gameBoxScreenHolder)
        }
      })
    }
  } else {
    state.initialData = state.initialData.slice(0, -1)
    handleCreateImage(gameBoxScreenHolder)
    handleRemoveFigureOnClick(gameBoxScreenHolder)
  }
}
