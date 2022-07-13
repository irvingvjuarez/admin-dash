import { DATA } from "@app/data"
import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { ChatForm } from "../../components/ChatForm"
import { ConsumerItem } from "../../components/ConsumerItem"
import { MEDIA_QUERIES } from "../../globals"
import { cleanSearch } from "./utils"

interface InboxProps {
  person?: any
  containerClassName?: string
}

const Inbox: React.FC<InboxProps> = ({
  person,
  containerClassName
}) => {
  const { pathname, search } = useLocation()
  const getContainerClassName = () => {
    let classname = "border border-[transparent]"
    if(containerClassName) classname += ` ${containerClassName}`
    if(window.screen.width >= MEDIA_QUERIES.md && /chat/.test(pathname) === false) classname += " border-l-just-white"
    return classname
  }

  if(!person){
    const cleanedSearch = cleanSearch(search)
    const customer = DATA.consumers.find(consumer => consumer.name === cleanedSearch)
    if(customer) person = customer
  }

  console.log("person:", person)

  return(
    <section className={getContainerClassName()} >
      {person ? (
        <>
          <div>
            {/* @ts-ignore */}
            <ConsumerItem {...person} type="inbox" />
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