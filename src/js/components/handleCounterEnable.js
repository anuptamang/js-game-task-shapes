import { UI_CONSTANTS } from '../data/constants'

export function handleCounterEnable(counterBtns) {
  counterBtns?.forEach((btn) =>
    btn.classList.remove(UI_CONSTANTS.disabledClass)
  )
}
