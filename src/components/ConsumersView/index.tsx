import consumers from "@app/data/chat.json"
import { ConsumerItem } from "../ConsumerItem"

const ConsumersView = () => {
  return(
    <article className="overflow-auto md:h-[83vh] lg:h-[85vh] xl:h-[87vh] scrollbar-main">
      {consumers.map(consumer => 
        <ConsumerItem
          key={consumer.name}
          selected="on"
          {...consumer} />
      )}
    </article>
  )
}

export { ConsumersView }