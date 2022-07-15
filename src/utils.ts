const searchRegex = new RegExp("[A-z]+\%[A-z0-9]+", "ig")

export const cleanSearch = (search: string) => {
  const matches = search.match(searchRegex)
  if(matches?.length) return decodeURI(matches[0])
  return null
}