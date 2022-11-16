import { state } from '../app'
import { handleCounterDisplay } from './handleCounterDisplay'

export function handleIncrementAction() {
  state.counter = state.counter + 1

  handleCounterDisplay()
}
