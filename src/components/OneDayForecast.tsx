import { useState } from "react"
import { IoIosArrowForward } from "react-icons/io"
import { DATA } from "../data"

const Dot: React.FC = (): JSX.Element => <i className="absolute left-1/2 top-1/2 text-2xl">·</i>

const OneDayForecast: React.FC = (): JSX.Element => {
  const [weatherData, setWeatherData] = useState({ info: DATA.todayWeather, status: "today" })
  const onOverlapping = (validation: boolean) => {
    // item.overlapping is true
    if(validation) return "text-primary"
  }
  const handleToday = () => setWeatherData({ info: DATA.todayWeather, status: "today" })
  const handleTomorrow = () => setWeatherData({ info: DATA.tomorrowWeather, status: "tomorrow" })

  return(
    <section className="mb-9 flex items-center flex-col">
      <article className="w-full flex justify-between items-center mb-7">
        <div className="flex items-center text-lg">
          <h2 onClick={handleToday} className="mr-3 relative cursor-pointer hover:-translate-y-1">
            Today {weatherData.status === "today" && <Dot />}
          </h2>
          <h2 onClick={handleTomorrow} className="cursor-pointer hover:-translate-y-1 relative">
            Tomorrow {weatherData.status === "tomorrow" && <Dot />}
          </h2>
        </div>

        <div className="flex items-center text-contrast-clear text-lg font-medium">
          <h2 className="cursor-pointer">Next 7 days</h2>
          <IoIosArrowForward />
        </div>
      </article>

      <article className="w-full pb-4 scrollbar overflow-x-auto">
        <div className="flex space-x-3 w-fit mx-auto">
          {weatherData.info.map(item => {
            const Component = item.statusIcon()
            return(
              <div key={item.id} className={item.overlapping ? "overlapped-day-forecast" : "standard-day-forecast"}>
                <span className={`min-w-[50px] text-lg font-thin tracking-wide text-center ${onOverlapping(item.overlapping)}`}>{item.hour}</span>
                <Component className="text-4xl my-4 text-contrast-clear" />
                <span className={`font-thin text-lg tracking-wide ${onOverlapping(item.overlapping)}`}>{item.temp}°</span>
              </div>
            )
          })}
        </div>
      </article>
    </section>
  )
}

export { OneDayForecast }