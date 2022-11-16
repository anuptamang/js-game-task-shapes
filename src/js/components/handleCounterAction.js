import { handleAddRemoveItems } from './handleAddRemoveItems'

export function handleCounterAction(counterBtns) {
  counterBtns?.forEach((btn) => handleAddRemoveItems(btn))
}
