export const getNameFromPath = (path: string) => {
  const nameMatches = path.match(/[A-z\%0-9]+$/i) as RegExpMatchArray
  const match = nameMatches[0]
  return decodeURI(match)
}

export const handleSubmit = (
  evt: React.FormEvent<HTMLButtonElement>,
  inputRef: React.MutableRefObject<HTMLInputElement | null>
) => {
  evt.preventDefault()
  console.log(inputRef.current?.value)
}