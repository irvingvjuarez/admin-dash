import { useState } from "react"
import { OneDayForecast } from "../components/OneDayForecast"
import { DATA } from "../data"
import { SectionContainer } from "./SectionContainer"

const TodayTomorrowForecast: React.FC = (): JSX.Element => {
  const [weatherData, setWeatherData] = useState<"today" | "tomorrow">("today")

  return(
    <SectionContainer
      title="Temperature over next 24 hrs"
      sectionClassName="mb-9 flex items-center flex-col" >
      <article className="w-full pb-4 scrollbar overflow-x-auto relative max-w-6xl">
        <OneDayForecast data={DATA.todayWeather} isSlider={true} isTransited={weatherData === "tomorrow" ? true : false} />
        <OneDayForecast data={DATA.tomorrowWeather} />
      </article>
    </SectionContainer>
  )
}

export { TodayTomorrowForecast }