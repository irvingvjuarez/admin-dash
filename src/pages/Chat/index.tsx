import { useRef } from "react"
import { IoMdSend } from "react-icons/io"
import { useLocation } from "react-router-dom"
import { ConsumerItem } from "../../components/ConsumerItem"
import { SectionContainer } from "../../containers/SectionContainer"
import { DATA } from "../../data"
import { getNameFromPath, handleSubmit } from "./utils"

const Chat = () => {
  const { pathname } = useLocation()
  const consumer = DATA.consumers.find(consumer => consumer.name === getNameFromPath(pathname))
  const inputRef = useRef<null | HTMLInputElement>(null)

  return(
    <SectionContainer
      title=""
      subpage={true}
      sectionClassName="h-full relative" >
      <>
        <div>
          {/* @ts-ignore */}
          <ConsumerItem {...consumer} type="inbox" />
        </div>

        <form className="absolute bottom-0 w-full flex items-center p-1 rounded-xl border-just-white border">
          <input
            type="text"
            placeholder="Send a message..."
            className="w-full bg-[transparent] text-lg p-1 outline-none"
            ref={inputRef} />
          <button onClick={(evt) => handleSubmit(evt, inputRef)}>
            <IoMdSend className="text-2xl" />
          </button>
        </form>
      </>
    </SectionContainer>
  )
}

export { Chat }