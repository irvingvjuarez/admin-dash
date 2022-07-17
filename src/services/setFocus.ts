export const setFocus = (path: string, pathname: string) => {
  if(path === pathname) return "onfocus"
  return "hover:border-just-white"
}