import { LinkWrapper } from "../LinkWrapper"

interface ConsumerItemProps {
  name: string
  color: string
  message: string
  status: string
  type?: "standard" | "inbox"
}

const ConsumerItem: React.FC<ConsumerItemProps> = ({
  name,
  color,
  message,
  status,
  type = "standard"
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
    <LinkWrapper url={`/consumer/${name}`}>
      <div className="flex mb-2">
        <div className={`flex-none mr-2 w-[50px] h-[50px] rounded-full ${color} grid place-content-center text-xl`}>
          {getConsumerInitials(name)}
        </div>

        <div className="w-full">
          <div className={` ${type === "inbox" && "flex justify-between"}`}>
            <h2 className="text-xl font-semibold tracking-wide">
              {name}
            </h2>
            {type !== "inbox" && (
              <p className="text-md">
                {message}
              </p>
            )}
            <span className={`block w-[80px] h-fit text-md text-center ${getStatusColor(status)} rounded-xl mt-1`}>
              {status}
            </span>
          </div>
          
          {type === "inbox" && (
            <p>
              Last seen at
              <span> 12:32 PM</span>
            </p>
          )}
        </div>
      </div>
    </LinkWrapper>
  )
}

export { ConsumerItem }