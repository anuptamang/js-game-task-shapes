import { state } from '../app'
import { UI_CONSTANTS } from '../data/constants'
import { getUniqueCompareResult, shuffle } from '../utils'
import { handleCreateImage } from './handleCreateImage'
import { handleMoveShape } from './handleMoveShape'
import { handleRemoveFigureOnClick } from './handleRemoveFigureOnClick'
import { handleRemoveShape } from './handleRemoveShape'

export function handleItemAddRemove(type) {
  if (type === UI_CONSTANTS.ADD) {
    const d = getUniqueCompareResult(state.data, state.initialData)
    let newData = shuffle(d).pop()

    let fav = [...shuffle(state.favColors)]
    let size = [...shuffle(state.size)]

    newData.figure = `${newData.figure} ${shuffle(fav).pop()} ${shuffle(
      size
    ).pop()}`

    state.initialData = [...state.initialData, newData]

    handleMoveShape(newData, handleCreateImage(newData))
    handleRemoveFigureOnClick()
  } else {
    const popData = state.initialData.pop()
    state.initialData = state.initialData.slice(0, -1)
    handleRemoveShape(popData)
    handleRemoveFigureOnClick()
  }
}
