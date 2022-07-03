import { CardContainer } from "../CardContainer"
import { WeatherDate } from "../WeatherDate"
import { WeatherTemp } from "../WeatherTemp"

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

const WeatherCard = () => {
  return(
    <CardContainer
      type="flex"
      justify="evenly"
      containerClassName="flex-wrap" >
      <>
        <article className="w-full max-w-[300px] flex justify-evenly">
          <WeatherDate titleSize="text-lg" dateSize="text-md" titleClassName="md:text-2xl" dateClassName="md:text-xl" />
          <WeatherTemp temp={"12"} titleSize="text-6xl" titleClassName="md:text-8xl" />
        </article>

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
      </>
    </CardContainer>
  )
}

export { WeatherCard }