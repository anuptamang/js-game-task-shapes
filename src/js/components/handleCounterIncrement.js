import { state } from '../app'
import { UI_CONSTANTS } from '../data/constants'
import { handleIncrementAction } from './handleIncrementAction'
import { handleItemAddRemove } from './handleItemAddRemove'

export function handleCounterIncrement() {
  if (state.counter < state.data.length) {
    handleIncrementAction()
    handleItemAddRemove(UI_CONSTANTS.ADD)
  }
}
