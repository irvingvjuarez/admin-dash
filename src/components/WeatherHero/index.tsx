import { BsCloudSun } from "react-icons/bs"
import { WeatherDate } from "../WeatherDate"
import { WeatherTemp } from "../WeatherTemp"

interface WeatherHeroProps {
  city: string
  temp: string
}

const WeatherHero: React.FC<WeatherHeroProps> = ({
  city,
  temp
}): JSX.Element => {
  return(
    <section className="w-fill px-2 py-5 flex flex-col items-center relative max-w-5xl my-0 mx-auto mb-7">
      <WeatherDate />

      <WeatherTemp temp={temp} />

      <span className="block rounded-lg border-contrast-strong px-8  py-1 border-2">
        {city}
      </span>

      <BsCloudSun className="floating-icon bottom-0 left-0 translate-x-full" />
      <BsCloudSun className="floating-icon top-0 right-0 -translate-x-1/2" />
    </section>
  )
}

export { WeatherHero }