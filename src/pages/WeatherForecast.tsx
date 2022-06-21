import { OneDayForecast } from "../components/OneDayForecast"
import { TodayWeatherOverview } from "../components/TodayWeatherOverview"

const WeatherForecast: React.FC = (): JSX.Element => {
  return(
    <>
      <h2 className="text-xl font-normal tracking-wider">Weather Forecast</h2>

      <TodayWeatherOverview />
      <OneDayForecast />
    </>
  )
}

export { WeatherForecast }