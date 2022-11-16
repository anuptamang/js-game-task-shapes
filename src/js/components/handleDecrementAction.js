import { state } from '../app'
import { handleCounterDisplay } from './handleCounterDisplay'

export function handleDecrementAction() {
  if (state.counter > 0) {
    state.counter = state.counter - 1
    handleCounterDisplay()
  }
}
