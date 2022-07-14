import { DATA } from "../../data"
import { ConsumerItem } from "../ConsumerItem"

const ConsumersView = () => {
  const { consumers } = DATA

  return(
    <article className="overflow-auto md:h-[83vh] lg:h-[85vh] xl:h-[87vh]">
      {consumers.map(consumer => 
        <ConsumerItem key={consumer.name} {...consumer} />
      )}
    </article>
  )
}

export { ConsumersView }