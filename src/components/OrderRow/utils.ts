import { URL_REGEXP } from "@app/constants/regexp"

export const getContainerClassName = (columns: any[], size: number | undefined) => {
  let cols = size ? "grid-cols-" + size : "grid-cols-7"
  let classname = `w-full grid ${cols} place-items-center min-w-[900px] even:bg-primary-strong `
  if(columns[0] === "Image") classname += " border-b-2"
  return classname
}

export const getCellClassName = () => {
  let classname = "tracking-wide py-2 md:text-lg flex justify-center items-center text-center"
  return classname
}

export const getStatusClassName = (status: "Pending" | "Active" | "Rejected" | "Canceled" | "Complete" | undefined) => {
  let classname = "w-fit p-2 rounded-lg h-fit font-semibold tracking-wide mx-auto"
  if(status === "Complete") classname += " bg-contrast-clear"
  if(status === "Pending") classname += " bg-contrast2-clear"
  if(status === "Rejected") classname += " bg-contrast3-clear"
  if(status === "Active") classname += " bg-contrast4-clear"
  if(status === "Canceled") classname += " bg-contrast-strong"
  return classname
}

export const isImageUrl = (url: string) => {
  return URL_REGEXP.test(url)
}