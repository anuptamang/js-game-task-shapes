import { counterBtns, gameBoxScreenHolder, state } from '../app'
import { UI_CONSTANTS } from '../data/constants'
import { handleCounterDisable } from './handleCounterDisable'
import { handleCounterDisplay } from './handleCounterDisplay'
import { handleCounterEnable } from './handleCounterEnable'

export function handleTriggerStartStop(btn) {
  btn?.addEventListener('click', () => {
    if (
      btn?.getAttribute(UI_CONSTANTS.controllerBtnAttr)?.toUpperCase() ===
      UI_CONSTANTS.START
    ) {
      handleCounterEnable(counterBtns)
    } else {
      handleCounterDisable(counterBtns)
      state.counter = 0
      state.initialData = []
      gameBoxScreenHolder.innerHTML = ''
      handleCounterDisplay()
    }
  })
}
