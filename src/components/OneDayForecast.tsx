import { IoIosArrowForward } from "react-icons/io"
import { TiWeatherStormy } from "react-icons/ti"
import { DATA } from "../data"

const OneDayForecast: React.FC = (): JSX.Element => {
  return(
    <section>
      <article className="w-full flex justify-between items-center mb-7">
        <div className="flex items-center text-lg">
          <h2 className="mr-3 relative">
            Today <i className="absolute left-1/2 top-1/2 text-2xl">·</i>
          </h2>
          <h2>Tomorrow</h2>
        </div>

        <div className="flex items-center text-contrast-clear text-lg font-medium">
          <h2>Next 7 days</h2>
          <IoIosArrowForward />
        </div>
      </article>

      <article className="flex space-x-3 w-full overflow-x-auto pb-4 scrollbar lg:justify-center">
        {DATA.todayWeather.map(item => {
          const Component = item.statusIcon()
          return(
            <div key={item.id} className="bg-contrast-strong w-fit rounded-full py-5 px-4 flex flex-col items-center justify-center">
              <span className="min-w-[50px] text-lg font-thin tracking-wide text-center">{item.hour}</span>
              <Component className="text-4xl my-4 text-contrast-clear" />
              <span className="font-thin text-lg tracking-wide">{item.temp}°</span>
            </div>
          )
        })}
      </article>
    </section>
  )
}

export { OneDayForecast }