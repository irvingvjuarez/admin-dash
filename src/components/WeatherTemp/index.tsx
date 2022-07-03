interface WeatherTempProps {
  temp: string
  titleClassName?: string
  titleSize?: "text-8xl" | "text-7xl" | "text-6xl" | "text-5xl" | "text-4xl"
}

const WeatherTemp: React.FC<WeatherTempProps> = ({
  temp,
  titleClassName,
  titleSize = "text-8xl"
}) => {
  const getTitleClassName = () => {
    let classname = `block py-7 tracking-widest ${titleSize} font-thin relative`
    if(titleClassName) classname += ` ${titleClassName}`
    return classname
  }

  return(
    <h2 className={getTitleClassName()}>
      {temp} <span className="absolute">°</span>
    </h2>
  )
}

export { WeatherTemp }