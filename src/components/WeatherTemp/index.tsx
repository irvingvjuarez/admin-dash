interface WeatherTempProps {
  temp: string
  titleSize?: "text-8xl" | "text-7xl" | "text-6xl" | "text-5xl" | "text-4xl"
}

const WeatherTemp: React.FC<WeatherTempProps> = ({
  temp,
  titleSize = "text-8xl"
}) => {
  return(
    <h2 className={`block py-7 tracking-widest ${titleSize} font-thin relative`}>
      {temp} <span className="absolute">°</span>
    </h2>
  )
}

export { WeatherTemp }