export const getContainerClassName = (columns: any[]) => {
  let classname = "w-full grid grid-cols-7 border-y-2 min-w-[900px] border-b-primary"
  if(columns[0] === "Image") classname += " border-t-0"
  return classname
}

export const getCellClassName = () => {
  let classname = "tracking-wide py-2 md:text-lg flex justify-center items-center"
  return classname
}