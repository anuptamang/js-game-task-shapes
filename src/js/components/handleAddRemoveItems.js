import { UI_CONSTANTS } from '../data/constants'
import { handleCounterDecrement } from './handleCounterDecrement'
import { handleCounterIncrement } from './handleCounterIncrement'

export function handleAddRemoveItems(btn) {
  btn.addEventListener('click', () =>
    btn?.getAttribute(UI_CONSTANTS.counterBtnAttr)?.toUpperCase() ===
    UI_CONSTANTS.INCREMENT
      ? handleCounterIncrement()
      : handleCounterDecrement()
  )
}
