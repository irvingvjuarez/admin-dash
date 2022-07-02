import { TodayTomorrowForecast } from "../containers/TodayTomorrowForecast"
import { TodayWeatherOverview } from "../components/TodayWeatherOverview"
import { ChanceRain } from "../charts/ChanceRain"
import { SectionContainer } from "../containers/SectionContainer"

const WeatherForecast: React.FC = (): JSX.Element => {
  return(
    <SectionContainer
      title="Weather Forecast"
      titleStrong={true}>
      <>
        <TodayWeatherOverview />
        <TodayTomorrowForecast />
        <ChanceRain />
      </>
    </SectionContainer>
  )
}

export { WeatherForecast }