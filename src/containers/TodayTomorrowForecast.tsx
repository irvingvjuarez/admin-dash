import { useState } from "react"
import { IoIosArrowForward } from "react-icons/io"
import { OneDayForecast } from "../components/OneDayForecast"
import { DATA } from "../data"

const Dot: React.FC = (): JSX.Element => <i className="absolute left-1/2 top-1/2 text-2xl">·</i>

const TodayTomorrowForecast: React.FC = (): JSX.Element => {
  const [weatherData, setWeatherData] = useState<"today" | "tomorrow">("today")
  const handleToday = () => setWeatherData("today")
  const handleTomorrow = () => setWeatherData("tomorrow")

  return(
    <section className="mb-9 flex items-center flex-col">
      <article className="w-full flex justify-between items-center mb-7">
        <div className="flex items-center text-lg">
          <h2 onClick={handleToday} className="mr-3 relative cursor-pointer hover:-translate-y-1">
            Today {weatherData === "today" && <Dot />}
          </h2>
          <h2 onClick={handleTomorrow} className="cursor-pointer hover:-translate-y-1 relative">
            Tomorrow {weatherData === "tomorrow" && <Dot />}
          </h2>
        </div>

        <div className="flex items-center text-contrast-clear text-lg font-medium">
          <h2 className="cursor-pointer">Next 7 days</h2>
          <IoIosArrowForward />
        </div>
      </article>

      <article className="w-full pb-4 scrollbar overflow-x-auto relative max-w-6xl">
        <OneDayForecast data={DATA.todayWeather} isSlider={true} isTransited={weatherData === "tomorrow" ? true : false} />
        <OneDayForecast data={DATA.tomorrowWeather} />
      </article>
    </section>
  )
}

export { TodayTomorrowForecast }