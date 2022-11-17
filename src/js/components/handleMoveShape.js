import { gameBoxScreenHolder, state } from '../app'
import { handleCounterDisplay } from './handleCounterDisplay'

export function handleMoveShape(item, shape) {
  let position = 0
  let id = setInterval(frame, 15)

  function frame() {
    if (position === gameBoxScreenHolder?.clientHeight - shape.offsetHeight) {
      clearInterval(id)
      state.initialData = state.initialData.filter(
        (data) => data.id !== item.id
      )
      state.counter = state.initialData.length
      shape.remove()
      handleCounterDisplay()
    } else {
      position++
      shape.style.bottom = position + 'px'
    }
  }
}
