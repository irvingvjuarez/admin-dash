import { MEDIA_QUERIES } from "@app/globals"
import { useEffect, useState } from "react"
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
}

const ConsumerItem: React.FC<ConsumerItemProps> = ({
  name,
  color,
  message,
  status,
  lastConnection,
  type = "standard",
  containerClassName
}) => {
  const navigate = useNavigate()
  const screenValidation = window.screen.width >= MEDIA_QUERIES.md
  const [containerClassname, setContainerClassname] = useState("flex mb-2 md:px-1 md:py-2 hover:bg-primary-clear-super md:pr-2 rounded-l-xl")
  const { search } = useLocation()

  const handleClick = () => {
    if(!screenValidation) {
      navigate(`/chat/${name}`)
    }
  }

  useEffect(() => {
    if(containerClassName) setContainerClassname(prev => `${prev} ${containerClassName}`)
  }, [search])

  return(
    <LinkWrapper params={screenValidation ? name : undefined}>
      <div
        className={containerClassname}
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
              <span> {lastConnection}</span>
            </p>
          )}
        </div>
      </div>
    </LinkWrapper>
  )
}

export { ConsumerItem }