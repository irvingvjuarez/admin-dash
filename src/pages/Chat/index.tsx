import { useRef } from "react"
import { IoMdSend } from "react-icons/io"
import { useLocation } from "react-router-dom"
import { ConsumerItem } from "../../components/ConsumerItem"
import { SectionContainer } from "../../containers/SectionContainer"
import { DATA } from "../../data"

const Chat = () => {
  const { pathname } = useLocation()
  const getNameFromPath = (path: string) => {
    const nameMatches = path.match(/[A-z\%0-9]+$/i) as RegExpMatchArray
    const match = nameMatches[0]
    return decodeURI(match)
  }
  const consumer = DATA.consumers.find(consumer => consumer.name === getNameFromPath(pathname))
  const inputRef = useRef<null | HTMLInputElement>(null)

  const handleSubmit = (evt: React.FormEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    console.log(inputRef.current?.value)
  }

  return(
    <SectionContainer
      title=""
      subpage={true}
      sectionClassName="h-full relative" >
      <>
        <div>
          <ConsumerItem {...consumer} type="inbox" />
        </div>

        <form className="absolute bottom-0 w-full flex items-center p-1 rounded-xl border-just-white border">
          <input
            type="text"
            placeholder="Send a message..."
            className="w-full bg-[transparent] text-lg p-1 outline-none"
            ref={inputRef} />
          <button onClick={handleSubmit}>
            <IoMdSend className="text-2xl" />
          </button>
        </form>
      </>
    </SectionContainer>
  )
}

export { Chat }