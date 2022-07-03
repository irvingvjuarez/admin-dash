import { CardContainer } from "../CardContainer"
import { WeatherDate } from "../WeatherDate"
import { WeatherTemp } from "../WeatherTemp"

const WeatherCard = () => {
  return(
    <CardContainer
      type="flex"
      justify="evenly" >
      <>
        <WeatherDate titleSize="text-lg" dateSize="text-md" />
        <WeatherTemp temp={"12"} titleSize="text-6xl" />
      </>
    </CardContainer>
  )
}

export { WeatherCard }