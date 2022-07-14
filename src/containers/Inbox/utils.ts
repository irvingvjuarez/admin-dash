export interface classNameProps {
  containerClassName?: string,
  validation: boolean,
  pathname: string
}

export const getContainerClassName = (config: classNameProps) => {
  const { containerClassName, validation, pathname } = config

  let classname = "border border-[transparent] md:relative md:p-2"
  if(containerClassName) classname += ` ${containerClassName}`
  if(validation && /chat/.test(pathname) === false) classname += " border-l-just-white"
  return classname
}