export const keepLastString = <T extends (object | string)[]>(list: T): T => {
  const result: (object | string)[] = []
  let lastString = ''
  list.map((item) => {
    if (typeof item === 'string') {
      lastString = item
    } else {
      result.push(item)
    }
  })
  if (lastString) {
    result.push(lastString)
  }
  return result as T
}
