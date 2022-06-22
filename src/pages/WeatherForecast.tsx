import { OneDayForecast } from "../components/OneDayForecast"
import { TodayWeatherOverview } from "../components/TodayWeatherOverview"
import { ChanceRain } from "../charts/ChanceRain"

const WeatherForecast: React.FC = (): JSX.Element => {
  return(
    <>
      <h2 className="text-xl font-normal tracking-wider">Weather Forecast</h2>

      <TodayWeatherOverview />
      <OneDayForecast />
      <ChanceRain />
    </>
  )
}

export { WeatherForecast }