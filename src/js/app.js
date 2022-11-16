import '../scss/main.scss'
import SHAPES from './data/shapes.json'
import { UI_CONSTANTS } from './data/constants'
import {
  handleCounterAction,
  handleCounterDisable,
  handleCounterDisplay,
  handleLoadInitialData,
  handleStartStop,
} from './components'

export const state = {
  data: SHAPES,
  initialData: [{}],
  counter: 0,
  favColors: ['blue', 'green', 'yellow', 'purple', 'orange', 'red'],
  size: ['small', 'medium', 'large'],
}

// UI DOM variables
export const gameBox = document.querySelector(`[${UI_CONSTANTS.gameBox}]`)
export const gameBoxScreenHolder = gameBox?.querySelector(
  `[${UI_CONSTANTS.gameScreenHolder}]`
)
export const playBtns = gameBox?.querySelectorAll(
  `[${UI_CONSTANTS.gameControllerBtn}]`
)
export const counterBtns = gameBox?.querySelectorAll(
  `[${UI_CONSTANTS.gameCounterBtn}]`
)
export const counterDisplay = gameBox?.querySelector(
  `[${UI_CONSTANTS.gameCounterDisplay}]`
)

// Game App init function
const initGameApp = () => {
  // Append inital data to screen
  handleLoadInitialData()

  // Disable counter btns on start
  handleCounterDisable(counterBtns)

  // Toggle Start / Stop action
  handleStartStop(playBtns)

  // handle counter actions
  handleCounterAction(counterBtns)

  // handle counter display
  handleCounterDisplay()
}

// Initialize the app
initGameApp()
