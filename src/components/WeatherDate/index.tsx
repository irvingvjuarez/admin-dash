import { BsCloudSun } from "react-icons/bs"

interface WeatherDateProps {
  titleClassName?: string
  titleSize?: "text-3xl" | "text-2xl" | "text-xl" | "text-lg" | "text-md"
  dateClassName?: string
  dateSize?: "text-3xl" | "text-2xl" | "text-xl" | "text-lg" | "text-md"
}

const WeatherDate: React.FC<WeatherDateProps> = ({
  titleClassName,
  titleSize = "text-3xl",
  dateClassName,
  dateSize = "text-lg"
}) => {
  const getTitleClassName = () => {
    let classname = `tracking-wider font-medium ${titleSize}`
    if(titleClassName) classname += ` ${titleClassName}`
    return classname
  }

  const getDateClassName = () => {
    let classname = `tracking-wider ${dateSize}`
    if(dateClassName) classname += ` ${dateClassName}`
    return classname
  }
  
  return(
    <article className="flex items-center justify-evenly">
      <BsCloudSun className="text-5xl text-contrast4-clear mr-2" />

      <div>
        <h2 className={getTitleClassName()}>Today</h2>
        <span className={getDateClassName()}>Thu, 18</span>
      </div>
    </article>
  )
}

export { WeatherDate }