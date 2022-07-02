import { WeatherTemp } from "../containers/WeatherTemp"
import { WeatherHero } from "../components/WeatherHero"
import { Tabs } from "../components/Tabs"
import { ChanceRain } from "../charts/ChanceRain"
import { SectionContainer } from "../containers/SectionContainer"
import { useState } from "react"
import { DATA } from "../data"

const WeatherForecast: React.FC = (): JSX.Element => {
  const [weatherData, setWeatherData] = useState({
    data: DATA.todayWeather,
    day: "Today"
  })
  const { city, current_temp, forecast_temp } = weatherData.data

  const tabs = [
    {
      title: "Today",
      callback: () => setWeatherData({
        data: DATA.todayWeather,
        day: "Today"
      })
    },
    {
      title: "Tomorrow",
      callback: () => setWeatherData({
        data: DATA.tomorrowWeather,
        day: "Tomorrow"
      })
    },
    {
      title: "Next 7 days",
      url: "/weather-next-seven-days"
    }
  ]

  return(
    <SectionContainer
      title="Weather Forecast"
      titleStrong={true} >
      <>
        <Tabs items={tabs} focusOn={weatherData.day} />
        <WeatherHero
          city={city}
          temp={current_temp} />
        <WeatherTemp 
          weatherData={forecast_temp} />
        <ChanceRain />
      </>
    </SectionContainer>
  )
}

export { WeatherForecast }