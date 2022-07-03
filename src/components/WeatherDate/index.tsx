import { BsCloudSun } from "react-icons/bs"

const WeatherDate = () => {
  return(
    <article className="flex items-center justify-evenly">
      <BsCloudSun className="text-5xl text-contrast4-clear mr-2" />

      <div>
        <h2 className="text-3xl tracking-wider font-medium">Today</h2>
        <span className="tracking-wider text-lg">Thu, 18</span>
      </div>
    </article>
  )
}

export { WeatherDate }