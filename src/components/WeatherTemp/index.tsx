interface WeatherTempProps {
  temp: string
}

const WeatherTemp: React.FC<WeatherTempProps> = ({
  temp
}) => {
  return(
    <h2 className="block py-7 tracking-widest text-8xl font-thin relative">
      {temp} <span className="absolute">°</span>
    </h2>
  )
}

export { WeatherTemp }