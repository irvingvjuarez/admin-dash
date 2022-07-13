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