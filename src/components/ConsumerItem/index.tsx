import { MEDIA_QUERIES } from "@app/globals"
import { cleanSearch } from "@app/utils"
import { useLocation, useNavigate } from "react-router-dom"
import { LinkWrapper } from "../LinkWrapper"
import { getConsumerInitials, getStatusColor } from "./utils"

interface ConsumerItemProps {
  name: string
  color: string
  message: string
  status: string
  lastConnection: string
  type?: "standard" | "inbox"
  containerClassName?: string
  selected?: "on" | "off"
}

const ConsumerItem: React.FC<ConsumerItemProps> = ({
  name,
  color,
  message,
  status,
  lastConnection,
  type = "standard",
  containerClassName,
  selected = "off"
}) => {
  const navigate = useNavigate()
  const screenValidation = window.screen.width >= MEDIA_QUERIES.md
  const { search } = useLocation()

  const handleClick = () => {
    if(!screenValidation) {
      navigate(`/chat/${name}`)
    }
  }

  const getContainerClassName = () => {
    let classname = "flex mb-2 border-2 border-[transparent] md:px-1 md:py-2 hover:border-just-white md:pr-2 rounded-l-xl"
    if(containerClassName) classname += ` ${containerClassName}`
    if(cleanSearch(search) === name && selected === "on") classname += " bg-contrast-strong"
    return classname
  }

  return(
    <LinkWrapper params={screenValidation ? name : undefined}>
      <div
        className={getContainerClassName()}
        onClick={handleClick} >
        <div className={`flex-none mr-2 w-[50px] h-[50px] rounded-full ${color} grid place-content-center text-xl`}>
          {getConsumerInitials(name)}
        </div>

        <div className="w-full">
          <div className={` ${type === "inbox" && "flex justify-between"}`}>
            <h2 className="text-xl font-semibold tracking-wide">
              {name}
            </h2>
            {type !== "inbox" && (
              <p className="text-md overflow-hidden max-h-[52px] whitespace-[break-space]">
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
              <span> {lastConnection}</span>
            </p>
          )}
        </div>
      </div>
    </LinkWrapper>
  )
}

export { ConsumerItem }