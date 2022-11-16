import { state } from '../app'
import { UI_CONSTANTS } from '../data/constants'
import { handleDecrementAction } from './handleDecrementAction'
import { handleItemAddRemove } from './handleItemAddRemove'

export function handleCounterDecrement() {
  if (state.counter) {
    handleDecrementAction()
    handleItemAddRemove(UI_CONSTANTS.REMOVE)
  }
}
