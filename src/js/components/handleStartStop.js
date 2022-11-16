import { handleTriggerStartStop } from './handleTriggerStartStop'

export function handleStartStop(playBtns) {
  playBtns?.forEach((btn) => handleTriggerStartStop(btn))
}
