import { TodayTomorrowForecast } from "../containers/TodayTomorrowForecast"
import { TodayWeatherOverview } from "../components/TodayWeatherOverview"
import { ChanceRain } from "../charts/ChanceRain"

const WeatherForecast: React.FC = (): JSX.Element => {
  return(
    <>
      <h2 className="text-xl font-normal tracking-wider">Weather Forecast</h2>

      <TodayWeatherOverview />
      <TodayTomorrowForecast />
      <ChanceRain />
    </>
  )
}

export { WeatherForecast }