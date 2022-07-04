export const getNameFromPath = (path: string) => {
  const nameMatches = path.match(/[A-z\%0-9]+$/i) as RegExpMatchArray
  const match = nameMatches[0]
  return decodeURI(match)
}
