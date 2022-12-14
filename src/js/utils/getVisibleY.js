export function visibleY(el) {
  var rect = el.getBoundingClientRect(),
    top = rect.top,
    height = rect.height,
    el = el.parentNode
  // Check if bottom of the element is off the page
  if (rect.bottom < 0) return false
  // Check its within the document viewport
  if (top > document.documentElement.clientHeight) return false
  do {
    rect = el.getBoundingClientRect()
    if (top <= rect.bottom === false) return false
    // Check if the element is out of view due to a container scrolling
    if (top + height <= rect.top) return false
    el = el.parentNode
  } while (el != document.body)
  return true
}
