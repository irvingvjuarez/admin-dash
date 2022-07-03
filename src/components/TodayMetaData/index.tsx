const data = [
  {
    title: "Wind",
    value: "12",
    inTermsOf: "m/h"
  },
  {
    title: "Visibility",
    value: "20",
    inTermsOf: "g/h"
  },
  {
    title: "Humidity",
    value: "4",
    inTermsOf: "h/u"
  },
  {
    title: "UV",
    value: "1",
    inTermsOf: ""
  }
]

const TodayMetaData = () => {
  return(
    <article className="w-full flex-none grid grid-cols-1 gap-2 max-w-[500px] md:grid-cols-2 md:gap-5">
      {data.map(item => (
        <div key={item.title} className="flex items-center justify-between border-b-2 border-b-just-white">
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