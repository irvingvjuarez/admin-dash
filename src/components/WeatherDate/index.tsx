import { BsCloudSun } from "react-icons/bs"

interface WeatherDateProps {
  titleSize?: "text-3xl" | "text-2xl" | "text-xl" | "text-lg" | "text-md"
  dateSize?: "text-3xl" | "text-2xl" | "text-xl" | "text-lg" | "text-md"
}

const WeatherDate: React.FC<WeatherDateProps> = ({
  titleSize = "text-3xl",
  dateSize = "text-lg"
}) => {
  return(
    <article className="flex items-center justify-evenly">
      <BsCloudSun className="text-5xl text-contrast4-clear mr-2" />

      <div>
        <h2 className={`${titleSize} tracking-wider font-medium`}>Today</h2>
        <span className={`tracking-wider ${dateSize}`}>Thu, 18</span>
      </div>
    </article>
  )
}

export { WeatherDate }