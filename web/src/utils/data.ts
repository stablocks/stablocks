type AnyObject = {
  [x: string]: any
}

export const verifySave = (
  originalData: AnyObject,
  newData: AnyObject
): boolean => {
  let sameData = true

  for (const key in newData) {
    if (Object.prototype.hasOwnProperty.call(newData, key)) {
      const value = newData[key]

      if (originalData[key] !== value) {
        sameData = false
        break
      }
    }
  }

  return !sameData
}
