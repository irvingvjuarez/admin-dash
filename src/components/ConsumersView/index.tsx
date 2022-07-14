import { useLocation } from "react-router-dom"
import { DATA } from "../../data"
import { ConsumerItem } from "../ConsumerItem"
import { cleanSearch } from "@app/utils"
import { MEDIA_QUERIES } from "@app/globals"

const ConsumersView = () => {
  const { consumers } = DATA
  const { search } = useLocation()
  const screenValidation = window.screen.width >= MEDIA_QUERIES.md
  const getContainerClassName = (name: string) => {
    let classname = ""
    if(cleanSearch(search) === name && screenValidation){
      classname += " bg-contrast-strong"
    } else{
      classname = ""
    }
    return classname
  }

  return(
    <article className="overflow-auto md:h-[83vh] lg:h-[85vh] xl:h-[87vh]">
      {consumers.map(consumer => 
        <ConsumerItem
          key={consumer.name}
          containerClassName={getContainerClassName(consumer.name)}
          {...consumer} />
      )}
    </article>
  )
}

export { ConsumersView }