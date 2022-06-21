import { IoIosArrowForward } from "react-icons/io"
import { TiWeatherStormy } from "react-icons/ti"

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

      <article>
        <div className="bg-contrast-strong w-fit rounded-full py-3 px-4 flex flex-col items-center">
          <span className="text-lg font-thin tracking-wide">12 AM</span>
          <TiWeatherStormy className="text-4xl my-4 text-contrast-clear" />
          <span className="font-thin text-lg tracking-wide">16°</span>
        </div>
      </article>
    </section>
  )
}

export { OneDayForecast }