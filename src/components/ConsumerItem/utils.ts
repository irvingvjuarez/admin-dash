export const getStatusColor = (status: string) => {
  if(status === "Pending") return "bg-contrast4-clear"
  if(status === "Done") return "bg-contrast5-clear"
  if(status === "Broken") return "bg-[#ef4444]"
}

export const getConsumerInitials = (name: string) => {
  let wordMatches = [...name.matchAll(/[a-z]+/ig)]
  let initials = wordMatches.map(word => word[0].charAt(0))
  return initials.join("")
}

interface IClassNameConfig {
  containerClassName: string | undefined
  search: string | null
  name: string
  selected: "on" | "off"
}

export const getContainerClassName = (config: IClassNameConfig) => {
  const { containerClassName, search, name, selected } = config

  let classname = "flex mb-2 border-2 border-[transparent] md:px-1 md:py-2 hover:border-just-white md:pr-2 rounded-l-xl"
  if(containerClassName) classname += ` ${containerClassName}`
  if(search === name && selected === "on") classname += " bg-contrast-strong"
  return classname
}