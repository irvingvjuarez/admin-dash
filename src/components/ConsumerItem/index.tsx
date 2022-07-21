import { MEDIA_QUERIES } from "@app/globals"
import { cleanSearch } from "@app/utils"
import { useLocation, useNavigate } from "react-router-dom"
import { LinkWrapper } from "../LinkWrapper"
import { getConsumerInitials, getStatusColor, getContainerClassName } from "./utils"
import { ConsumerItemProps } from "./props.interface"

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
  const handleClick = () => !screenValidation && navigate(`/chat/${name}`)
  const classnameConfig = {
    containerClassName,
    selected,
    search: cleanSearch(search),
    name
  }

  const renderParagraph = (validation: boolean) => {
    if(validation) return <p>Last seen at <span> {lastConnection}</span></p>

    if(!validation) return (
      <p className="text-md overflow-hidden max-h-[52px] whitespace-[break-space]">
        {message}
      </p>
    )
  }

  return(
    <LinkWrapper params={screenValidation ? name : undefined}>
      <div
        className={getContainerClassName(classnameConfig)}
        onClick={handleClick}
      >
        <div className={`flex-none mr-2 w-[50px] h-[50px] rounded-full ${color} grid place-content-center text-xl`}>
          {getConsumerInitials(name)}
        </div>

        <div className="w-full">
          <div className={` ${type === "inbox" && "flex justify-between"}`}>
            <h2 className="text-xl font-semibold tracking-wide">
              {name}
            </h2>

            {renderParagraph(type === "inbox")}
            <span className={`block w-[80px] h-fit text-md text-center ${getStatusColor(status)} rounded-xl mt-1`}>
              {status}
            </span>
          </div>
          
          {renderParagraph(type !== "inbox")}
        </div>
      </div>
    </LinkWrapper>
  )
}

export { ConsumerItem }