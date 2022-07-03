import { CardContainer } from "../CardContainer"
import { WeatherDate } from "../WeatherDate"
import { WeatherTemp } from "../WeatherTemp"

const WeatherCard = () => {
  return(
    <CardContainer>
      <>
        <WeatherDate />
        <WeatherTemp temp={"12"} />
      </>
    </CardContainer>
  )
}

export { WeatherCard }