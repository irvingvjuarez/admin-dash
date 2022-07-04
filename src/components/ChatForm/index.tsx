import { useRef } from "react"
import { IoMdSend } from "react-icons/io"

const ChatForm = () => {
  const inputRef = useRef<null | HTMLInputElement>(null)
  const handleSubmit = (evt: React.FormEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    console.log(inputRef.current?.value)
  }

  return(
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
  )
}

export { ChatForm }