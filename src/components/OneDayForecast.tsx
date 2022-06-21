import { IoIosArrowForward } from "react-icons/io"
import { TiWeatherStormy } from "react-icons/ti"

const OneDayForecast: React.FC = (): JSX.Element => {
  return(
    <section>
      <article className="w-full flex justify-between items-center">
        <div className="flex items-center text-lg">
          <h2 className="mr-3">
            Today
          </h2>
          <h2>Tomorrow</h2>
        </div>

        <div className="flex items-center text-contrast-clear text-lg font-medium">
          <h2>Next 7 days</h2>
          <IoIosArrowForward />
        </div>
      </article>

      <article>
        <div>
          <span>12 AM</span>
          <TiWeatherStormy />
          <span>16°</span>
        </div>
      </article>
    </section>
  )
}

export { OneDayForecast }