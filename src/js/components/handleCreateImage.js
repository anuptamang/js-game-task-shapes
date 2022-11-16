import { state } from '../app'

export function handleCreateImage(holder) {
  const items = state.initialData
  holder.innerHTML = ''

  items.forEach((item, i) => {
    const type = item.figure
    const typeArr = type?.split(' ')
    const div = document.createElement('div')
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

    div.setAttribute('id', item.id)
    holder?.append(div)
    document.getElementById(item.id)?.scrollIntoView(true)
  })
}
