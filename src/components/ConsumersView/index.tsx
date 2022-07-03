import { DATA } from "../../data"

const ConsumersView = () => {
  const { consumers } = DATA

  const getStatusColor = (status: string) => {
    if(status === "Pending") return "bg-contrast4-clear"
    if(status === "Done") return "bg-contrast5-clear"
    if(status === "Broken") return "bg-[#ef4444]"
  }

  const getConsumerInitials = (name: string) => {
    let wordMatches = [...name.matchAll(/[a-z]+/ig)]
    let initials = wordMatches.map(word => word[0].charAt(0))
    return initials.join("")
  }

  return(
    <article>
      {consumers.map(consumer => (
        <div className="flex mb-2" key={consumer.name}>
          <div className={`flex-none mr-2 w-[50px] h-[50px] rounded-full ${consumer.color} grid place-content-center text-xl`}>
            {getConsumerInitials(consumer.name)}
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-wide">
              {consumer.name}
            </h2>
            <p className="text-md">
              {consumer.message}
            </p>
            <span className={`block w-[80px] text-md text-center ${getStatusColor(consumer.status)} rounded-xl mt-1`}>
              {consumer.status}
            </span>
          </div>
        </div>
      ))}
    </article>
  )
}

export { ConsumersView }