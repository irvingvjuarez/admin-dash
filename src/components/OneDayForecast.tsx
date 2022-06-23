import { useState } from "react"

interface OneDayForecastProps {
  data: any[],
  isSlider?: boolean,
  isTransited?: boolean
}

const OneDayForecast: React.FC<OneDayForecastProps> = ({ data, isSlider, isTransited }): JSX.Element => {
  const [displayedData, setDisplayedData] = useState(data)
  const onOverlapping = (validation: boolean) => {
    // item.overlapping is true
    if(validation) return "text-primary"
  }
  if(isTransited) setTimeout(() => setDisplayedData([]), 800)
  if(displayedData.length === 0 && !isTransited) setDisplayedData(data)

  return(
    <div className={
        `flex space-x-3 w-fit mx-auto bg-primary
        ${isSlider && "absolute transition-all duration-[800ms] ease-in-out"}
        ${isTransited && "moving"}`
      }>
      {displayedData.map(item => {
        const Component = item.statusIcon()
        return(
          <div key={item.id} className={item.overlapping ? "overlapped-day-forecast" : "standard-day-forecast"}>
            <span className={`min-w-[50px] text-lg font-thin tracking-wide text-center ${onOverlapping(item.overlapping)}`}>{item.hour}</span>
            <Component className="text-4xl my-4 text-contrast-clear" />
            <span className={`font-thin text-lg tracking-wide ${onOverlapping(item.overlapping)}`}>{item.temp}°</span>
          </div>
        )
      })}
    </div>
  )
}

export { OneDayForecast }