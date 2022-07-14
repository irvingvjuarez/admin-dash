const searchRegex = new RegExp("[A-z]+\%[A-z0-9]+", "ig")

export const cleanSearch = (search: string) => {
  const matches = searchRegex.exec(search) 
  if(matches) return decodeURI(matches[0])
  return null
}