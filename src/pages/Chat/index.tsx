import { useLocation } from "react-router-dom"
import { Inbox } from "../../containers/Inbox"
import { SectionContainer } from "../../containers/SectionContainer"
import { DATA } from "../../data"
import { getNameFromPath } from "./utils"

const Chat = () => {
  const { pathname } = useLocation()
  const consumer = DATA.consumers.find(consumer => consumer.name === getNameFromPath(pathname))

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