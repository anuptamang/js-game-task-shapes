import { UI_CONSTANTS } from '../data/constants'

export function handleCounterDisable(counterBtns) {
  counterBtns?.forEach((btn) => btn.classList.add(UI_CONSTANTS.disabledClass))
}
