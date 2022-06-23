import { useState } from "react"
import { IoIosArrowForward } from "react-icons/io"
import { OneDayForecast } from "../components/OneDayForecast"
import { ForecastDayButton } from "../components/ForecastDayButton"
import { DATA } from "../data"

const TodayTomorrowForecast: React.FC = (): JSX.Element => {
  const [weatherData, setWeatherData] = useState<"today" | "tomorrow">("today")
  const handleToday = () => setWeatherData("today")
  const handleTomorrow = () => setWeatherData("tomorrow")
  const todayValidation = () => weatherData === "today" ? true : false;
  const tomorrowValidation = () => weatherData === "tomorrow" ? true : false;

  return(
    <section className="mb-9 flex items-center flex-col">
      <article className="w-full flex justify-between items-center mb-7">
        <div className="flex items-center text-lg">
          <ForecastDayButton
            handleClick={handleToday}
            validationFn={todayValidation}
            text="Today" />
          <ForecastDayButton
            handleClick={handleTomorrow}
            validationFn={tomorrowValidation}
            text="Tomorrow" />
        </div>

        <ForecastDayButton
          handleClick={() => console.log("Hello")}
          text="Next 7 days"
          isArrowButton={true}
          url="/weather-next-seven-days" />
      </article>

      <article className="w-full pb-4 scrollbar overflow-x-auto relative max-w-6xl">
        <OneDayForecast data={DATA.todayWeather} isSlider={true} isTransited={weatherData === "tomorrow" ? true : false} />
        <OneDayForecast data={DATA.tomorrowWeather} />
      </article>
    </section>
  )
}

export { TodayTomorrowForecast }