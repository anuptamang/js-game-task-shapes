import { gameBoxScreenHolder, state } from '../app'

export function handleCreateImage(item) {
  if (item) {
    const type = item.figure
    const typeArr = type?.split(' ')
    const randomVal = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min

    const div = document.createElement('div')
    if (typeArr) {
      typeArr?.length > 1 && typeArr?.length < 3
        ? div.classList.add('figure', `figure-${typeArr[0]}`, `${typeArr[1]}`)
        : typeArr?.length > 2
        ? div.classList.add(
            'figure',
            `figure-${typeArr[0]}`,
            `${typeArr[1]}`,
            `${typeArr[2]}`
          )
        : div.classList.add('figure', `figure-${typeArr[0]}`)
    }
    div.setAttribute('id', item.id)
    div.style.left = `${randomVal(0, 80)}%`
    gameBoxScreenHolder?.appendChild(div)

    document.getElementById(`${item.id}`)?.classList.add('out')
    setTimeout(() => document.getElementById(`${item.id}`)?.classList.add('in'))

    return div
  }
}
