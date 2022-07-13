import { DATA } from "@app/data"


const TodayMetaData = () => {
  return(
    <article className="w-full flex-none grid grid-cols-1 gap-2 max-w-[500px] md:grid-cols-2 md:gap-5">
      {DATA.weatherMetadata.map(item => (
        <div key={item.title} className="flex items-center justify-between md:px-2">
          <h2 className="font-bold text-lg tracking-wide">{item.title}</h2>
          <p className="text-lg">
            <span className="mr-1">{item.value}</span>
            <span>{item.inTermsOf}</span>
          </p>
        </div>
      ))}
    </article>
  )
}

export { TodayMetaData }