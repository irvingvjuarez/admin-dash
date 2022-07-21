import { useLocation } from "react-router-dom"
import { Inbox } from "../../containers/Inbox"
import { SectionContainer } from "../../containers/SectionContainer"
import chat from "@app/data/chat.json"
import { getNameFromPath } from "./utils"

const Chat = () => {
  const { pathname } = useLocation()
  const consumer = chat.find(consumer => consumer.name === getNameFromPath(pathname))

  return(
    <SectionContainer
      title=""
      subpage={true}
      sectionClassName="h-full relative" >
      
      <Inbox person={consumer} />
    </SectionContainer>
  )
}

export { Chat }