import { ChartContainerConfig } from "./types"

export const getArticleClass = (config: ChartContainerConfig) => {
  const { scrollbar, containerClassName } = config
  let classname = "chart__container"

  if(scrollbar) classname += " scrollbar"
  if(containerClassName) classname += ` ${containerClassName}`
  return classname
}

export const getWrapperClass = (config: ChartContainerConfig) => {
  const { type, wrapperClassName } = config
  let classname = "chart"

  if(type === "full") classname += " w-full"
  if(type === "flex") classname += " flex flex-col items-center"
  if(wrapperClassName) classname += ` ${wrapperClassName}`
  return classname
}

export const getTitleClass = (config: ChartContainerConfig) => {
  const { titleClassName } = config
  let classname = "chart__title w-full text-start"

  if(titleClassName) classname += ` ${titleClassName}`
  return classname
}