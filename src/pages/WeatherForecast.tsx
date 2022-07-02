import { TodayTomorrowForecast } from "../containers/TodayTomorrowForecast"
import { TodayWeatherOverview } from "../components/TodayWeatherOverview"
import { Tabs } from "../components/Tabs"
import { ChanceRain } from "../charts/ChanceRain"
import { SectionContainer } from "../containers/SectionContainer"

const WeatherForecast: React.FC = (): JSX.Element => {
  const tabs = [
    {
      title: "Today"
    },
    {
      title: "Tomororow"
    },
    {
      title: "Next 7 days",
      url: "/weather-next-seven-days"
    }
  ]

  return(
    <SectionContainer
      title="Weather Forecast"
      titleStrong={true}>
      <>
        <Tabs items={tabs} />
        <TodayWeatherOverview />
        <TodayTomorrowForecast />
        <ChanceRain />
      </>
    </SectionContainer>
  )
}

export { WeatherForecast }