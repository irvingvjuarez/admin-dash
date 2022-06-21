import { BsCloudSun } from "react-icons/bs"
import { OneDayForecast } from "../components/OneDayForecast"

const WeatherForecast: React.FC = (): JSX.Element => {
  return(
    <>
      <h2 className="text-xl font-normal tracking-wider">Weather Forecast</h2>

      <section className="w-fill px-2 py-5 flex flex-col items-center relative max-w-5xl my-0 mx-auto">
        <article className="flex items-center justify-evenly">
          <BsCloudSun className="text-5xl text-contrast4-clear mr-2" />


          <div>
            <h2 className="text-3xl tracking-wider font-medium">Today</h2>
            <span className="tracking-wider text-lg">Thu, 18</span>
          </div>
        </article>

        <h2 className="block py-7 tracking-widest text-8xl font-thin relative">
          12 <span className="absolute">°</span>
        </h2>

        <span className="block rounded-lg border-contrast-strong px-8  py-1 border-2">
          Mexico City
        </span>

        {/* <BsCloudSun className="text-5xl text-contrast-strong mr-2 aboslute top-0 right-0" /> */}
        <BsCloudSun className="floating-icon bottom-0 left-0 translate-x-full" />
        <BsCloudSun className="floating-icon top-0 right-0 -translate-x-1/2" />
      </section>
      
      <OneDayForecast />
    </>
  )
}

export { WeatherForecast }