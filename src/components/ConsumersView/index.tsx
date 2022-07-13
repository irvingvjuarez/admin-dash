import { DATA } from "../../data"
import { ConsumerItem } from "../ConsumerItem"

const ConsumersView = () => {
  const { consumers } = DATA

  return(
    <article className="overflow-auto md:h-[80vh]">
      {consumers.map(consumer => 
        <ConsumerItem key={consumer.name} {...consumer} />
      )}
    </article>
  )
}

export { ConsumersView }