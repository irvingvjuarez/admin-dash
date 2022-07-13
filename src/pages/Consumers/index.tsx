import { SectionContainer } from "@app/containers/SectionContainer"
import { ConsumersView } from "@app/components/ConsumersView"
import { Inbox } from "@app/containers/Inbox"
import { useLocation } from "react-router-dom"
import { cleanSearch } from "./utils"
import { useEffect, useState } from "react"
import { DATA } from "@app/data"

const Consumers: React.FC = (): JSX.Element => {
  // const { search } = useLocation()
  // const [chat, setChat] = useState(search)

  // useEffect(() => {
  //   const cleanedSearch = cleanSearch(search)
  //   const customer = DATA.consumers.find(consumer => consumer.name === cleanedSearch)
  //   if(customer) console.log("customer:", customer)
  // }, [search])

  return(
    <SectionContainer
      title="Consumers"
      titleStrong={true}
      titleClassName="mb-3" >
      
      <section className="md:grid md:grid-cols-2">
        <ConsumersView />
        <Inbox containerClassName="hidden md:block" />
      </section>

    </SectionContainer>
  )
}

export { Consumers }