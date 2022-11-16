import { counterDisplay, state } from '../app'

export function handleCounterDisplay() {
  if (counterDisplay) {
    counterDisplay.innerHTML = `Counts: ${state.counter}`
  }
}
