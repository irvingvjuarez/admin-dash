interface ConsumerItemProps {
  name: string
  color: string
  message: string
  status: string
}

const ConsumerItem: React.FC<ConsumerItemProps> = ({
  name,
  color,
  message,
  status
}) => {
  const getStatusColor = (status: string) => {
    if(status === "Pending") return "bg-contrast4-clear"
    if(status === "Done") return "bg-contrast5-clear"
    if(status === "Broken") return "bg-[#ef4444]"
  }

  const getConsumerInitials = (name: string) => {
    let wordMatches = [...name.matchAll(/[a-z]+/ig)]
    let initials = wordMatches.map(word => word[0].charAt(0))
    return initials.join("")
  }

  return(
    <div className="flex mb-2">
      <div className={`flex-none mr-2 w-[50px] h-[50px] rounded-full ${color} grid place-content-center text-xl`}>
        {getConsumerInitials(name)}
      </div>

      <div>
        <h2 className="text-xl font-semibold tracking-wide">
          {name}
        </h2>
        <p className="text-md">
          {message}
        </p>
        <span className={`block w-[80px] text-md text-center ${getStatusColor(status)} rounded-xl mt-1`}>
          {status}
        </span>
      </div>
    </div>
  )
}

export { ConsumerItem }