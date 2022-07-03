import { CardContainer } from "../CardContainer"
import { WeatherDate } from "../WeatherDate"
import { WeatherTemp } from "../WeatherTemp"
import { TodayMetaData } from "../TodayMetaData"

const WeatherCard = () => {
  return(
    <CardContainer
      type="flex"
      justify="evenly"
      containerClassName="flex-wrap max-w-[1000px] mx-auto" >
      <>
        <article className="w-full max-w-[300px] flex justify-evenly">
          <WeatherDate titleSize="text-lg" dateSize="text-md" titleClassName="md:text-2xl" dateClassName="md:text-xl" />
          <WeatherTemp temp={"12"} titleSize="text-6xl" titleClassName="md:text-8xl" />
        </article>

        <TodayMetaData />
      </>
    </CardContainer>
  )
}

export { WeatherCard }