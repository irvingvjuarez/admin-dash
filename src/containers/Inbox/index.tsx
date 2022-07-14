import { DATA } from "@app/data"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { ChatForm } from "../../components/ChatForm"
import { ConsumerItem } from "../../components/ConsumerItem"
import { MEDIA_QUERIES } from "../../globals"
import { classNameProps, getContainerClassName } from "./utils"
import { cleanSearch } from "@app/utils"

interface InboxProps {
  person?: any
  containerClassName?: string
}

const Inbox: React.FC<InboxProps> = ({
  person,
  containerClassName
}) => {
  const { pathname, search } = useLocation()
  const [chat, setChat] = useState(person)
  const validation = window.screen.width >= MEDIA_QUERIES.md
  const classNameConfig: classNameProps = {
    containerClassName,
    validation,
    pathname
  }

  useEffect(() => {
    if(!person && validation){
      const cleanedSearch = cleanSearch(search)
      const customer = DATA.consumers.find(consumer => consumer.name === cleanedSearch)
      if(customer) setChat(customer)
    }
  }, [search])

  return(
    <section className={getContainerClassName(classNameConfig)} >
      {chat ? (
        <>
          <div>
            {/* @ts-ignore */}
            <ConsumerItem {...chat} type="inbox" />
          </div>

          <ChatForm />
        </>
      ) : (
        <h2 className="w-full text-center text-lg mt-3 tracking-wider">Start a conversation</h2>
      )}
    </section>
  )
}

export { Inbox }